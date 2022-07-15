"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1147],{7942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(665),a=(r(959),r(7942));const o={description:"\u7a0d\u5fae\u8a18\u9304\u4e00\u4e0b addEventListener useCapture \u7684\u6548\u679c\u3002",image:"https://vdustr.dev/asset-2022/03-14-add-event-listener-use-capture/og.png",authors:["ViPro"],tags:["event","addEventListener","useCapture","propagation"]},i="addEventListener() useCapture",p={permalink:"/blog/2022/03/14/add-event-listener-use-capture",source:"@site/blog/2022/03/14/add-event-listener-use-capture.mdx",title:"addEventListener() useCapture",description:"\u7a0d\u5fae\u8a18\u9304\u4e00\u4e0b addEventListener useCapture \u7684\u6548\u679c\u3002",date:"2022-03-14T00:00:00.000Z",formattedDate:"2022\u5e743\u670814\u65e5",tags:[{label:"event",permalink:"/blog/tags/event"},{label:"addEventListener",permalink:"/blog/tags/add-event-listener"},{label:"useCapture",permalink:"/blog/tags/use-capture"},{label:"propagation",permalink:"/blog/tags/propagation"}],readingTime:.57,hasTruncateMarker:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"\u7a0d\u5fae\u8a18\u9304\u4e00\u4e0b addEventListener useCapture \u7684\u6548\u679c\u3002",image:"https://vdustr.dev/asset-2022/03-14-add-event-listener-use-capture/og.png",authors:["ViPro"],tags:["event","addEventListener","useCapture","propagation"]},prevItem:{title:"Responsive Diamond Grid \ud83d\udc8e",permalink:"/blog/2022/03/15/responsive-diamond-grid"},nextItem:{title:"EOLs in Textarea",permalink:"/blog/2022/03/13/eols-in-textarea"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7a0d\u5fae\u8a18\u9304\u4e00\u4e0b ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture"},(0,a.kt)("inlineCode",{parentName:"a"},"addEventListener()")," ",(0,a.kt)("inlineCode",{parentName:"a"},"useCapture"))," \u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://vdustr.dev/asset-2022/03-14-add-event-listener-use-capture/og.png",alt:"addEventListener() useCapture"})),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/usecapture-8tdyr9?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"useCapture",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCapture")," \u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u7684\u4e8b\u4ef6\u6703\u5148\u89f8\u767c\uff0c\u7236\u5c64\u7684 listener \u8f03\u5b50\u5c64\u5148\u89f8\u767c\uff1b\u7d50\u675f\u4e86\u4e4b\u5f8c\u624d\u6703\u958b\u59cb\u89f8\u767c ",(0,a.kt)("inlineCode",{parentName:"p"},"useCapture")," \u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u7684\u4e8b\u4ef6\uff0c\u5b50\u5c64\u7684 listener \u8f03\u7236\u5c64\u5148\u89f8\u767c\u3002\u4ee5\u4e0a\u6574\u4e32\u4e8b\u4ef6\u5192\u6ce1\u90fd\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"event.stopPropagation()")," \u505c\u6b62\u3002"),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture"},"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture")))}d.isMDXComponent=!0}}]);