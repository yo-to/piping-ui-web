(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2852a8b2","chunk-2d0ccfb8"],{"0798":function(e,t,n){"use strict";n("caad");var r=n("f3f3"),i=n("fc11"),s=(n("0c18"),n("10d2")),a=n("afdd"),o=n("9d26"),c=n("f2e7"),u=n("7560"),l=n("2b0e"),d=l["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),p=n("58df"),h=n("d9bd");t["a"]=Object(p["a"])(s["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(o["a"],{props:{color:t}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(r["a"])({},s["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||u["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,n){},"1f4f":function(e,t,n){"use strict";n("a9e3");var r=n("f3f3"),i=(n("8b37"),n("80d2")),s=n("7560"),a=n("58df");t["a"]=Object(a["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(r["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"49e2":function(e,t,n){"use strict";var r=n("0789"),i=n("9d65"),s=n("a9ad"),a=n("3206"),o=n("80d2"),c=n("58df"),u=Object(c["a"])(i["a"],s["a"],Object(a["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(r["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(o["m"])(t))])]})))}})},"4ff6":function(e,t,n){var r,i;(function(s,a,o){e.exports?e.exports=o():(r=o,i="function"===typeof r?r.call(t,n,t,e):r,void 0===i||(e.exports=i))})(0,0,(function(){function e(e){var t=[];if(0===e.length)return"";if("string"!==typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if("string"!==typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(r>0&&(i=i.replace(/^[\/]+/,"")),i=r<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var s=t.join("/");s=s.replace(/\/(\?|&|#[^!])/g,"$1");var a=s.split("?");return s=a.shift()+(a.length>0?"?":"")+a.join("&"),s}return function(){var t;return t="object"===typeof arguments[0]?arguments[0]:[].slice.call(arguments),e(t)}}))},"5e5c":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return w})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return E}));n("99af"),n("a15b"),n("ace4"),n("d3b7"),n("3ca3"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0");var r=n("d0af"),i=(n("96cf"),n("c964")),s=n("434c"),a=Object(s["obj"])({d:Object(s["opt"])(s["str"]),r:Object(s["opt"])(s["str"]),t:Object(s["opt"])(s["str"])}),o=Object(s["obj"])({alg:Object(s["opt"])(s["str"]),crv:Object(s["opt"])(s["str"]),d:Object(s["opt"])(s["str"]),dp:Object(s["opt"])(s["str"]),dq:Object(s["opt"])(s["str"]),e:Object(s["opt"])(s["str"]),ext:Object(s["opt"])(s["bool"]),k:Object(s["opt"])(s["str"]),key_ops:Object(s["opt"])(Object(s["arr"])(s["str"])),kty:Object(s["literal"])("EC"),n:Object(s["opt"])(s["str"]),oth:Object(s["opt"])(Object(s["arr"])(a)),p:Object(s["opt"])(s["str"]),q:Object(s["opt"])(s["str"]),qi:Object(s["opt"])(s["str"]),use:Object(s["opt"])(s["str"]),x:Object(s["opt"])(s["str"]),y:Object(s["opt"])(s["str"])}),c=Object(s["obj"])({version:s["num"],encryptPublicJwk:o}),u=Object(s["obj"])({verified:s["bool"]}),l=n("1579"),d=n("3dfd"),p=function(){return n.e("chunk-2d0b1f6a").then(n.t.bind(null,"21a6",7))},h=function(){return Promise.resolve().then(n.t.bind(null,"4ff6",7)).then((function(e){return e.default}))},f=function(){return n.e("chunk-1799178c").then(n.t.bind(null,"5906",7))},b=function(){return n.e("chunk-2d2100ac").then(n.bind(null,"b5cf"))},v=function(){return Promise.resolve().then(n.bind(null,"7dda"))},x=function(){return n.e("chunk-221256f0").then(n.t.bind(null,"62f3",7))},y=function(){return n.e("chunk-2d21e767").then(n.t.bind(null,"d654",7)).then((function(e){return e.uint8ArrayToString}))};function m(e){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,s,a,o,c,u,l,d,h,x,y,m,g,j,k,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.downloadUrl,r=t.fileName,i=t.key,s=t.decryptErrorMessage,e.next=3,b();case 3:return a=e.sent,e.next=6,a.supportsSwDownload;case 6:if(!e.sent){e.next=25;break}return e.next=9,f();case 9:return o=e.sent,c=function(){return void 0===i?{type:"raw"}:"string"===typeof i?{type:"string",key:i}:{type:"uint8array",key:o.uint8ArrayToBase64(i)}}(),e.next=13,v();case 13:return u=e.sent,l={url:n,filename:r,protection:c,decryptErrorMessage:s},e.next=17,u.sendToServiceWorker({type:"enroll-download-info",downloadInfo:l});case 17:d=e.sent,h=d.data.downloadInfoId,x=document.createElement("a"),x.href="/sw-download#".concat(h),x.target="_blank",x.click(),e.next=55;break;case 25:return e.next=27,f();case 27:if(y=e.sent,void 0!==i){e.next=36;break}m=document.createElement("a"),m.href=n,m.target="_blank",m.download=r,m.click(),e.next=55;break;case 36:return e.next=38,fetch(n);case 38:return g=e.sent,e.t0=y,e.next=42,g.blob();case 42:return e.t1=e.sent,e.next=45,e.t0.blobToUint8Array.call(e.t0,e.t1);case 45:return j=e.sent,e.next=48,v();case 48:return e.next=50,e.sent.decrypt(j,i);case 50:return k=e.sent,e.next=53,p();case 53:w=e.sent,w.saveAs(y.uint8ArrayToBlob(k),r);case 55:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function j(e,t){return k.apply(this,arguments)}function k(){return k=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return r=e.sent,e.abrupt("return",r.sha256("".concat(n,"/key_exchange/").concat(t)));case 4:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return O=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,e.abrupt("return",n.sha256("".concat(t,"/verified")));case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function _(e,t,n){return C.apply(this,arguments)}function C(){return C=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,i){var a,o,u,l,d,p,f,b,v,x,y,m,g,k,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=1,o=256,e.next=4,window.crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveKey","deriveBits"]);case 4:return u=e.sent,e.next=7,crypto.subtle.exportKey("jwk",u.publicKey);case 7:return l=e.sent,d={version:a,encryptPublicJwk:l},e.next=11,h();case 11:return p=e.sent,e.next=14,j(n,i);case 14:return f=e.sent,e.next=17,j("sender"===n?"receiver":"sender",i);case 17:return b=e.sent,e.next=20,Promise.all([fetch(p(t,f),{method:"POST",body:JSON.stringify(d)}),fetch(p(t,b))]);case 20:return v=e.sent,x=Object(r["a"])(v,2),x[0],y=x[1],e.t0=s["validatingParse"],e.t1=c,e.next=28,y.text();case 28:if(e.t2=e.sent,m=(0,e.t0)(e.t1,e.t2),void 0!==m){e.next=32;break}return e.abrupt("return",{type:"error",errorCode:"invalid_parcel_format"});case 32:if(a===m.version){e.next=34;break}return e.abrupt("return",{type:"error",errorCode:"different_key_exchange_version"});case 34:return e.next=36,crypto.subtle.importKey("jwk",m.encryptPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]);case 36:return g=e.sent,e.next=39,crypto.subtle.deriveBits({name:"ECDH",public:g},u.privateKey,o);case 39:return k=e.sent,e.next=42,$(l,m.encryptPublicJwk);case 42:return w=e.sent,e.abrupt("return",{type:"key",key:new Uint8Array(k),verificationCode:w});case 44:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function $(e,t){return B.apply(this,arguments)}function B(){return B=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return r=e.sent,i=r.jwkThumbprintByEncoding,s=[i(t,"SHA-256","hex"),i(n,"SHA-256","hex")],e.next=7,v();case 7:return a=e.sent,e.next=10,a.sha256(s.sort().join("-"));case 10:return e.abrupt("return",e.sent.substring(0,32));case 11:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function A(e,t,n,r){return P.apply(this,arguments)}function P(){return P=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,r,i){var a,o,c,d,p,f,b,x,m,g,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=r.type,e.next="raw"===e.t0?3:"password"===e.t0?4:"passwordless"===e.t0?5:49;break;case 3:return e.abrupt("return",{type:"key",key:void 0});case 4:return e.abrupt("return",{type:"key",key:r.password});case 5:return e.next=7,_(t,"receiver",n);case 7:if(a=e.sent,"error"!==a.type){e.next=11;break}return i({type:"error"}),e.abrupt("return",{type:"error",errorMessage:function(e){return Object(l["a"])(e)["key_exchange_error"](a.errorCode)}});case 11:return o=a.key,c=a.verificationCode,i({type:"verification_code_arrived",verificationCode:c,key:o}),e.next=15,y();case 15:return d=e.sent,e.next=18,h();case 18:return p=e.sent,e.t1=p,e.t2=t,e.next=23,w(n);case 23:return e.t3=e.sent,f=(0,e.t1)(e.t2,e.t3),e.next=27,fetch(f);case 27:return b=e.sent,e.next=30,v();case 30:return x=e.sent,e.t4=x,e.t5=Uint8Array,e.next=35,b.arrayBuffer();case 35:return e.t6=e.sent,e.t7=new e.t5(e.t6),e.t8=o,e.next=40,e.t4.decrypt.call(e.t4,e.t7,e.t8);case 40:if(m=e.sent,g=Object(s["validatingParse"])(u,d(m)),void 0!==g){e.next=44;break}return e.abrupt("return",{type:"error",errorMessage:function(e){return Object(l["a"])(e)["key_exchange_error"]("invalid_parcel_format")}});case 44:if(j=g.verified,i({type:"verified",verified:j}),j){e.next=48;break}return e.abrupt("return",{type:"error",errorMessage:function(e){return Object(l["a"])(e)["sender_not_verified"]}});case 48:return e.abrupt("return",{type:"key",key:o});case 49:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function E(e){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"];case 2:n=e.sent,r=t.getBoundingClientRect().y-n.clientHeight,window.scrollBy({top:r,left:0,behavior:"smooth"});case 5:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}},"8b37":function(e,t,n){},afdd:function(e,t,n){"use strict";var r=n("8336");t["a"]=r["a"]},b77c:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-alert",{attrs:{type:"info"}},[n("span",{staticStyle:{"font-size":"1.2em"}},[e._v(e._s(e.strings["verification_code"])+": "),n("b",[e._v(e._s(e.value))])])])},i=[],s=n("276c"),a=n("e954"),o=n("920b"),c=n("92a6"),u=n("9ab4"),l=n("60a3"),d=n("7a2d"),p=n("1579"),h=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(a["a"])(n,[{key:"strings",get:function(){return Object(p["a"])(d["a"].language)}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],h.prototype,"value",void 0),h=Object(u["a"])([l["a"]],h);var f=h,b=f,v=n("2877"),x=n("6544"),y=n.n(x),m=n("0798"),g=Object(v["a"])(b,r,i,!1,null,null,null);t["a"]=g.exports;y()(g,{VAlert:m["a"]})},c865:function(e,t,n){"use strict";var r=n("f3f3"),i=n("0789"),s=n("9d26"),a=n("a9ad"),o=n("3206"),c=n("5607"),u=n("80d2"),l=n("58df"),d=Object(l["a"])(a["a"],Object(o["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:c["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(u["m"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(r["a"])({},this.$listeners,{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(u["m"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var r=n("f3f3"),i=n("4e82"),s=n("3206"),a=n("80d2"),o=n("58df");t["a"]=Object(o["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(r["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(a["m"])(this))}})}}]);
//# sourceMappingURL=chunk-2852a8b2.de4f223d.js.map