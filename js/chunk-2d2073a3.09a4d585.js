(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073a3"],{a042:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-expansion-panel",[r("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.hasError}},[r("span",[e._v(e._s(e.strings["download_in_downloader"])+" #"+e._s(e.props.downloadNo))])]),r("v-expansion-panel-content",["passwordless"===e.props.protection.type&&"initial"===e.verificationStep.type?r("v-alert",{attrs:{type:"info"}},[r("span",{},[e._v(e._s(e.strings["waiting_for_sender"]))])]):e._e(),"passwordless"===e.props.protection.type&&"verification_code_arrived"===e.verificationStep.type?r("span",[r("VerificationCode",{attrs:{value:e.verificationStep.verificationCode}})],1):e._e(),r("v-simple-table",{staticClass:"text-left"},[r("tbody",[r("tr",{staticClass:"text-left"},[r("td",[e._v(e._s(e.strings["download_url"]))]),r("td",[e._v(e._s(e.downloadPath))])])])]),r("v-alert",{attrs:{type:"error",outlined:"",value:e.hasError}},[e._v(" "+e._s(e.errorMessage())+" ")])],1)],1)},a=[],o=(r("96cf"),r("c964")),s=r("276c"),i=r("e954"),p=r("920b"),c=r("92a6"),l=r("9ab4"),d=r("60a3"),u=r("4ff6"),f=r.n(u),h=r("94ed"),v=r("7a2d"),g=r("1579"),y=r("5e5c"),_=r("b77c"),w=function(e){Object(p["a"])(r,e);var t=Object(c["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.errorMessage=function(){return""},e.verificationStep={type:"initial"},e}return Object(i["a"])(r,[{key:"mounted",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return y["d"](this.$el),e.next=3,y["c"](this.props.serverUrl,this.props.secretPath,this.props.protection,(function(e){n.verificationStep=e}));case 3:if(t=e.sent,"error"!==t.type){e.next=7;break}return this.errorMessage=function(){return t.errorMessage(v["a"].language)},e.abrupt("return");case 7:return r=t.key,e.next=10,y["a"]({downloadUrl:this.downloadPath,fileName:this.props.secretPath,key:r,decryptErrorMessage:this.strings["password_might_be_wrong"]});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"strings",get:function(){return Object(g["a"])(v["a"].language)}},{key:"hasError",get:function(){return""!==this.errorMessage()}},{key:"headerIcon",get:function(){return this.hasError?h["a"]:h["e"]}},{key:"headerIconColor",get:function(){return this.hasError?"error":void 0}},{key:"isReadyToDownload",get:function(){return"passwordless"!==this.props.protection.type||"verified"===this.verificationStep.type&&this.verificationStep.verified}},{key:"downloadPath",get:function(){return f()(this.props.serverUrl,encodeURI(this.props.secretPath))}}]),r}(d["d"]);Object(l["a"])([Object(d["c"])()],w.prototype,"props",void 0),w=Object(l["a"])([Object(d["a"])({components:{VerificationCode:_["a"]}})],w);var b=w,k=b,x=r("2877"),j=r("6544"),O=r.n(j),m=r("0798"),E=r("cd55"),P=r("49e2"),S=r("c865"),C=r("1f4f"),V=Object(x["a"])(k,n,a,!1,null,null,null);t["default"]=V.exports;O()(V,{VAlert:m["a"],VExpansionPanel:E["a"],VExpansionPanelContent:P["a"],VExpansionPanelHeader:S["a"],VSimpleTable:C["a"]})}}]);
//# sourceMappingURL=chunk-2d2073a3.09a4d585.js.map