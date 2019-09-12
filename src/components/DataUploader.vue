<template>
  <v-card style="margin-top: 1em; padding: 0.6em;">
    <!-- Align right -->
    <v-layout class="justify-end">
      <!-- Close button -->
      <!-- TODO: implement close action -->
      <v-btn icon >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-layout>

    <div class="title" style="margin-bottom: 1em;">
      Upload #{{ props.uploadNo }}
    </div>

    <v-layout>
      <v-flex xs6>
        <!-- Percentage -->
        {{ progressPercentage && progressPercentage.toFixed(2) }} %
      </v-flex>
      <v-flex xs6>
        <!-- loaded of total -->
        {{ readableBytesString(progressSetting.loadedBytes, 1) }} of {{ readableBytesString(progressSetting.totalBytes, 1) }}
      </v-flex>
    </v-layout>

    <!-- Progress bar -->
    <v-progress-linear
            :value="progressPercentage"
    />

    <v-simple-table class="text-left">
      <tbody>
      <tr class="text-left">
        <td>Upload URL</td>
        <td>{{ uploadPath }}</td>
      </tr>
      </tbody>
    </v-simple-table>

  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import urlJoin from 'url-join';
import * as utils from '@/utils';

export type DataUploaderProps = {
  uploadNo: number,
  data: File | string,
  serverUrl: string,
  secretPath: string
};

// NOTE: Automatically upload when mounted
@Component
export default class DataUploader extends Vue {
  @Prop() private props!: DataUploaderProps;

  // Progress bar setting
  private progressSetting: {loadedBytes: number, totalBytes?: number} = {
    loadedBytes: 0,
    totalBytes: undefined,
  };

  private readableBytesString = utils.readableBytesString;

  private get progressPercentage(): number | null {
    if (this.progressSetting.totalBytes === undefined) {
      return null;
    } else if (this.progressSetting.totalBytes === 0) {
      return 100;
    } else {
      return this.progressSetting.loadedBytes / this.progressSetting.totalBytes * 100;
    }
  }

  private get uploadPath(): string {
    return urlJoin(this.props.serverUrl, this.props.secretPath);
  }

  mounted() {
    const data = this.props.data;

    const bodyLength: number = typeof data === "string" ? data.length : data.size;
    // Send
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.uploadPath, true);
    // Update progress bar
    xhr.upload.onprogress = (ev) => {
      this.progressSetting.loadedBytes = ev.loaded;
      this.progressSetting.totalBytes  = ev.total;
    };
    xhr.upload.onload = () => {
      // Send finished
      if (xhr.status === 200) {
        if (this.progressSetting.totalBytes !== undefined) {
          this.progressSetting.loadedBytes = this.progressSetting.totalBytes;
        }
      } else {
        console.error(`Upload HTTP error: ${xhr.status}`);
      }
    };
    xhr.onabort = (ev) => {
      console.log("xhr.onabort", ev);
    };
    xhr.onerror = (ev) => {
      console.log("xhr.onerror", ev);
    };
    xhr.upload.onerror = () => {
      // TODO: Handle
      console.error('xhr.upload.onerror');
    };
    xhr.upload.onabort = () => {
      // TODO: Handle
      console.error('xhr.upload.onabort');
    };
    xhr.send(data);
    // Initialize progress bar
    this.progressSetting.loadedBytes = 0;
    this.progressSetting.totalBytes = bodyLength;
  }
}
</script>

<style scoped>

</style>