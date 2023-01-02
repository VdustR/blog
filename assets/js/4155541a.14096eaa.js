"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2481],{7942:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(959);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=l,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(g,a(a({ref:t},i),{},{components:r})):n.createElement(g,a({ref:t},i))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:l,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(5882),l=(r(959),r(7942));const o={description:"A spell checker for code!",image:"https://vdustr.dev/asset-2023/01-02-cspell/ogimage.png",authors:["ViPro"],tags:["cspell","ci","lint"]},a="cspell",c={permalink:"/blog/2023/01/02/cspell",source:"@site/blog/2023/01/02/cspell.md",title:"cspell",description:"A spell checker for code!",date:"2023-01-02T00:00:00.000Z",formattedDate:"2023\u5e741\u67082\u65e5",tags:[{label:"cspell",permalink:"/blog/tags/cspell"},{label:"ci",permalink:"/blog/tags/ci"},{label:"lint",permalink:"/blog/tags/lint"}],readingTime:3.48,hasTruncateMarker:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"A spell checker for code!",image:"https://vdustr.dev/asset-2023/01-02-cspell/ogimage.png",authors:["ViPro"],tags:["cspell","ci","lint"]},nextItem:{title:"gsvt - Git Semantic Version Tags",permalink:"/blog/2022/09/24/gsvt"}},p={authorsImageUrls:[void 0]},s=[],i={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A spell checker for code!")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://vdustr.dev/asset-2023/01-02-cspell/ogimage.png",alt:"cspell"})),(0,l.kt)("p",null,"2023 \u65b0\u5e74\u5feb\u6a02\uff01\u9023\u5047\u4f86\u4e00\u767c\uff5e"),(0,l.kt)("p",null,"\u5be6\u5728\u662f\u5f88\u8a0e\u53ad\u5728 repository \u88e1\u5beb\u932f\u5b57\uff0c ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"},"Code Spell Checker")," (\u4ee5\u4e0b\u7c21\u7a31 ",(0,l.kt)("a",{parentName:"p",href:"https://cspell.org/"},"cspell"),") \u662f\u6211\u5728 VSCode \u611b\u7528\u7684\u64f4\u5145\u5957\u4ef6\u4e4b\u4e00\u3002\u7136\u800c\u4e00\u76f4\u5230\u9019\u4efd\u65b0\u5de5\u4f5c\u624d\u5c07\u4ed6\u4f7f\u7528\u5230\u9ad8\u5ea6\u5354\u4f5c\u7684\u5c08\u6848\u88e1\uff0c\u4e5f\u6709\u4e00\u4e9b\u984d\u5916\u7684\u8a2d\u5b9a\u53ca\u7528\u6cd5\u4e0a\u7684\u5fc3\u5f97\u53ef\u4ee5\u5206\u4eab\u3002"))}u.isMDXComponent=!0}}]);