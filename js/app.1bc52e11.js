(function(e){function t(t){for(var o,c,r=t[0],i=t[1],u=t[2],f=0,s=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&s.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(s.length)s.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},l=[];function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/web-digital-watermarking/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0399":function(e,t,a){"use strict";a("9922")},"0e25":function(e,t,a){var o=a("eacb");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("77fb1b69",o,!0,{sourceMap:!1,shadowMode:!1})},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"15a0":function(e,t,a){"use strict";a("0e25")},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},9922:function(e,t,a){var o=a("b217");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("a8ef6f18",o,!0,{sourceMap:!1,shadowMode:!1})},b217:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}",""]),e.exports=t},cd49:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n=a("3ef4"),l=(a("d9e2"),a("ef21")),c=a.n(l),r=a("0325"),i=a.n(r),u=a("1c35");const d={loaded:!1,loading:!1};i.a;var f;async function s(){d.loaded||d.loading||(d.loading=!0,await i.a.loadOpenCV(),d.loading=!1,d.loaded=!0)}function b(e){const t=new FileReader;return new Promise((a,o)=>{t.readAsArrayBuffer(e),t.onerror=o,t.onload=()=>a(u["Buffer"].from(t.result))})}async function p(e,t="download"){const a=await e.getBufferAsync(e._originalMime);return new File([u["Buffer"].from(a).buffer],`${t}.${e.getExtension()}`)}function O(e,t,a,o){i.a.dft(e,t,a|i.a.DFT_INVERSE,o)}function v(e){const t=new i.a.Rect(0,0,-2&e.cols,-2&e.rows);e.roi(t);const a=e.cols/2,o=e.rows/2,n=e.roi(new i.a.Rect(0,0,a,o)),l=e.roi(new i.a.Rect(a,0,a,o)),c=e.roi(new i.a.Rect(0,o,a,o)),r=e.roi(new i.a.Rect(a,o,a,o)),u=new i.a.Mat;n.copyTo(u),r.copyTo(n),u.copyTo(r),l.copyTo(u),c.copyTo(l),u.copyTo(c),u.delete(),n.delete(),l.delete(),c.delete(),r.delete()}function j(e,t=0){const a=e,o=new i.a.MatVector;return i.a.split(a,o),o.get(t)}function m(e){const t=new i.a.MatVector;t.push_back(e);const a=i.a.Mat.zeros(e.size(),i.a.CV_32F);t.push_back(a);const o=new i.a.Mat;return i.a.merge(t,o),i.a.dft(o,o),a.delete(),o}function w(e,t,a,o){i.a.putText(e,t,a,i.a.FONT_HERSHEY_DUPLEX,o,new i.a.Scalar(0,0,0,0),2),i.a.flip(e,e,-1),i.a.putText(e,t,a,i.a.FONT_HERSHEY_DUPLEX,o,new i.a.Scalar(0,0,0,0),2),i.a.flip(e,e,-1)}function h(e,t,a,o){const n=j(e,o);n.convertTo(n,i.a.CV_32F);const l=m(n),c=new i.a.Point(n.cols/2,n.rows/2);w(l,t,c,a);const r=new i.a.Point(45,45);w(l,t,r,a);const u=new i.a.Mat;O(l,u,i.a.DFT_SCALE|i.a.DFT_REAL_OUTPUT,0);const d=new i.a.Mat;u.convertTo(d,i.a.CV_8U);const f=new i.a.MatVector;i.a.split(e,f),f.set(0,d);const s=new i.a.Mat;return i.a.merge(f,s),n.delete(),l.delete(),u.delete(),d.delete(),s}function g(e,t){const a=j(e,t);a.convertTo(a,i.a.CV_32F);const o=m(a),n=new i.a.MatVector;i.a.split(o,n);const l=new i.a.Mat;i.a.magnitude(n.get(0),n.get(1),l);const c=i.a.Mat.ones(l.size(),i.a.CV_32F);return i.a.add(c,l,l),i.a.log(l,l),v(l),l.convertTo(l,i.a.CV_8UC1),i.a.normalize(l,l,0,255,i.a.NORM_MINMAX,i.a.CV_8UC1),a.delete(),o.delete(),c.delete(),l}function C(e){if(!(e instanceof i.a.Mat))throw new Error("Please input the valid new cv.Mat instance.");const t=new i.a.Mat,a=e.type()%8,o=a<=i.a.CV_8S?1:a<=i.a.CV_32S?1/256:255,n=a===i.a.CV_8S||a===i.a.CV_16S?128:0;switch(e.convertTo(t,i.a.CV_8U,o,n),t.type()){case i.a.CV_8UC1:i.a.cvtColor(t,t,i.a.COLOR_GRAY2RGBA);break;case i.a.CV_8UC3:i.a.cvtColor(t,t,i.a.COLOR_RGB2RGBA);break;case i.a.CV_8UC4:break;default:throw new Error("Bad number of channels (Source image must have 1, 3 or 4 channels)")}const l=u["Buffer"].from(t.data);return t.delete(),l}async function V(e,t,a=1.1,o=f.B){if(!d.loaded)throw new Error("opencv is not loaded");if("number"!==typeof a)throw new Error("fontSize must be number");if("string"!==typeof t||!t)throw new Error("watermark is needed");let n;if(u["Buffer"].isBuffer(e))n=e;else if(e instanceof ArrayBuffer)n=u["Buffer"].from(e);else{if(!(e instanceof File))throw new Error("please use Buffer， arrayBuffer or File");n=await b(e)}const l=await c.a.read(n),r=i.a.matFromImageData(l.bitmap);if(r.empty())throw new Error("read image failed");const s=h(r,t,a,o),O=new c.a({width:s.cols,height:s.rows,data:C(s)});return r.delete(),s.delete(),p(O)}async function _(e,t=f.B){if(!d.loaded)throw new Error("opencv is not loaded");let a;if(u["Buffer"].isBuffer(e))a=e;else if(e instanceof ArrayBuffer)a=u["Buffer"].from(e);else{if(!(e instanceof File))throw new Error("please use Buffer， arrayBuffer or File");a=await b(e)}const o=await c.a.read(a),n=i.a.matFromImageData(o.bitmap),l=g(n,t),r=await new c.a({width:l.cols,height:l.rows,data:C(l)});return n.delete(),l.delete(),p(r)}(function(e){e[e["R"]=2]="R",e[e["G"]=1]="G",e[e["B"]=0]="B"})(f||(f={}));a("caad");var x=a("f6f2"),y=a("21a6");const B={class:"image-container"},N={class:"uploader"};var k=Object(o["defineComponent"])({__name:"Uploader",props:{value:null},emits:["upload"],setup(e,{emit:t}){const a=e;function n(e){if(e.preventDefault(),e.dataTransfer){const{files:a}=e.dataTransfer,o=a[0];o&&o.type.includes("image/")&&t("upload",o)}}function l(e){e.preventDefault();const{target:a}=e;if(a){const e=a,{files:o}=e;if(o){const a=o[0];e.value="",t("upload",a)}}}const{value:c}=Object(o["toRefs"])(a),r=Object(o["ref"])("");function i(){if(r.value){const e=r.value;r.value="",URL.revokeObjectURL(e)}}function u(){c.value&&Object(y["saveAs"])(c.value,c.value.name)}return Object(o["watch"])(c,()=>{r.value&&(URL.revokeObjectURL(r.value),r.value=""),c&&c.value instanceof File&&(r.value=URL.createObjectURL(c.value))},{immediate:!0}),(e,t)=>{const a=Object(o["resolveComponent"])("ElIcon"),c=Object(o["resolveComponent"])("ElImage");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B,[Object(o["createVNode"])(c,{onContextmenu:t[0]||(t[0]=Object(o["withModifiers"])(()=>{},["stop"])),download:"download.jpg",class:"image",fit:"contain",src:r.value,"preview-src-list":r.value?[r.value]:[]},{error:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",N,[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(x["c"]))]),_:1}),Object(o["createElementVNode"])("input",{type:"file",onChange:l,onDrop:n,accept:"image/jpg,image/png,image/jpeg"},null,32)])]),_:1},8,["src","preview-src-list"]),Object(o["createVNode"])(o["Transition"],{name:"el-fade-in-linear"},{default:Object(o["withCtx"])(()=>[r.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"delete-button",title:"删除",onClick:i},[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(x["a"]))]),_:1})])):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(o["Transition"],{name:"el-fade-in-linear"},{default:Object(o["withCtx"])(()=>[r.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"download-button",title:"下载",onClick:u},[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(x["b"]))]),_:1})])):Object(o["createCommentVNode"])("",!0)]),_:1})])}}}),E=(a("15a0"),a("6b0d")),T=a.n(E);const M=T()(k,[["__scopeId","data-v-4f699326"]]);var R=M;const U=Object(o["createElementVNode"])("div",null,"Opencv状态",-1),F=Object(o["createElementVNode"])("h3",null,"水印加密",-1),S=Object(o["createTextVNode"])("打水印"),A=Object(o["createElementVNode"])("h3",null,"水印解密",-1),D=Object(o["createTextVNode"])("查水印");var L=Object(o["defineComponent"])({__name:"App",setup(e){const t=Object(o["ref"])(d.loaded);Object(o["onBeforeMount"])(async()=>{t.value||(await s(),t.value=!0)});const a=[{label:"红",value:f.R},{label:"绿",value:f.G},{label:"蓝",value:f.B}],l=Object(o["ref"])("test"),c=Object(o["ref"])(1.1),r=Object(o["ref"])(f.B),i=Object(o["ref"])(!1),u=Object(o["ref"])(null);function b(e){u.value=e,O()}const p=Object(o["ref"])(null);async function O(){if(u.value){i.value=!0;try{const e=await V(u.value,l.value,c.value,r.value);p.value=e,i.value=!1,v.value=r.value,w(e)}catch(e){n["a"].error("加密失败")}i.value=!1}}const v=Object(o["ref"])(f.B),j=Object(o["ref"])(!1),m=Object(o["ref"])(null);function w(e){m.value=e,g()}const h=Object(o["ref"])(null);async function g(){if(m.value){j.value=!0;try{h.value=await _(m.value,v.value)}catch(e){n["a"].error("解码失败")}j.value=!1}}return(e,n)=>{const d=Object(o["resolveComponent"])("ElBadge"),f=Object(o["resolveComponent"])("ElInput"),s=Object(o["resolveComponent"])("ElFormItem"),C=Object(o["resolveComponent"])("ElInputNumber"),V=Object(o["resolveComponent"])("ElRadioButton"),_=Object(o["resolveComponent"])("ElRadioGroup"),x=Object(o["resolveComponent"])("ElButton"),y=Object(o["resolveComponent"])("ElForm"),B=Object(o["resolveComponent"])("ElCol"),N=Object(o["resolveComponent"])("ElRow"),k=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(d,{value:t.value?"加载完成":"加载中",type:t.value?"success":"info"},{default:Object(o["withCtx"])(()=>[U]),_:1},8,["value","type"]),Object(o["createVNode"])(o["Transition"],{name:"el-fade-in-linear"},{default:Object(o["withCtx"])(()=>[t.value?(Object(o["openBlock"])(),Object(o["createBlock"])(N,{key:0,gutter:8},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(B,{span:12,xs:24,sm:24,md:12,lg:12,xl:12},{default:Object(o["withCtx"])(()=>[F,Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(y,{size:"small","label-width":"120px","label-position":"left","label-suffix":":"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{label:"水印文字"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{style:{"max-width":"180px"},modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),placeholder:"仅支持英文"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(s,{label:"水印文字大小"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,{min:1,step:.1,modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=e=>c.value=e)},null,8,["step","modelValue"])]),_:1}),Object(o["createVNode"])(s,{label:"水印通道"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e)},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a,e=>Object(o["createVNode"])(V,{label:e.value,key:e.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(o["Transition"],{name:"el-fade-in-linear"},{default:Object(o["withCtx"])(()=>[m.value?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(x,{type:"primary",onClick:O},{default:Object(o["withCtx"])(()=>[S]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(R,{value:p.value,onUpload:b},null,8,["value"])]),_:1})]),_:1})),[[k,i.value]])]),_:1}),Object(o["createVNode"])(B,{span:12,xs:24,sm:24,md:12,lg:12,xl:12},{default:Object(o["withCtx"])(()=>[A,Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(y,{size:"small","label-suffix":":","label-width":"120px"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{label:"水印通道"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,{modelValue:v.value,"onUpdate:modelValue":n[3]||(n[3]=e=>v.value=e)},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a,e=>Object(o["createVNode"])(V,{label:e.value,key:e.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(o["Transition"],{name:"el-fade-in-linear"},{default:Object(o["withCtx"])(()=>[u.value?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(x,{type:"primary",onClick:g},{default:Object(o["withCtx"])(()=>[D]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1}),Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(R,{value:h.value,onUpload:w},null,8,["value"])]),_:1})]),_:1})),[[k,j.value]])]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})],64)}}});a("0399");const P=L;var z=P,I=(a("7437"),a("c3a1"));Object(o["createApp"])(z).use(I["a"]).mount("#app")},eacb:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'.image-container[data-v-4f699326]{position:relative;width:300px;height:300px}.image-container .image[data-v-4f699326]{width:100%;height:100%}.image-container .delete-button[data-v-4f699326]{display:none;position:absolute;right:0;top:0;padding:4px;cursor:pointer;z-index:10;color:#fff}.image-container .delete-button[data-v-4f699326]:before{content:"";width:0;height:0;position:absolute;border-top:40px solid #409eff;border-left:40px solid transparent;right:0;top:0;z-index:0}.image-container:hover .delete-button[data-v-4f699326]{display:block}.image-container .download-button[data-v-4f699326]{display:none;position:absolute;right:0;bottom:0;left:0;padding:4px;z-index:10;color:#fff;background:#409eff;cursor:pointer}.image-container:hover .download-button[data-v-4f699326]{display:block}.uploader[data-v-4f699326]{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:100%;border:1px dashed #409eff;box-sizing:border-box;cursor:pointer}.uploader input[type=file][data-v-4f699326]{position:absolute;opacity:0;left:0;right:0;top:0;bottom:0}',""]),e.exports=t}});
//# sourceMappingURL=app.1bc52e11.js.map