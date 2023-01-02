"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8244],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),v=o,g=m["".concat(s,".").concat(v)]||m[v]||u[v]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(5882),o=(r(959),r(7942));const l={description:"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026",image:"https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png",authors:["ViPro"],tags:["svelte","shiki","html","escape"]},a="HTML To Svelte",i={permalink:"/blog/2022/01/27/html-to-svelte",source:"@site/blog/2022/01/27/html-to-svelte.md",title:"HTML To Svelte",description:"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026",date:"2022-01-27T00:00:00.000Z",formattedDate:"2022\u5e741\u670827\u65e5",tags:[{label:"svelte",permalink:"/blog/tags/svelte"},{label:"shiki",permalink:"/blog/tags/shiki"},{label:"html",permalink:"/blog/tags/html"},{label:"escape",permalink:"/blog/tags/escape"}],readingTime:1.59,hasTruncateMarker:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026",image:"https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png",authors:["ViPro"],tags:["svelte","shiki","html","escape"]},prevItem:{title:"Forked rollup-plugin-rename-extensions",permalink:"/blog/2022/02/08/forked-rollup-plugin-rename-extensions"},nextItem:{title:"\u65b0 logo",permalink:"/blog/2022/01/13/new-logo"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png",alt:"HTML To Svelte"})),(0,o.kt)("p",null,"\u5728\u5148\u524d\u5beb\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/12/25/example-vite-svelte-markdown"},"Example for Svelte + TS + Vite + MDsveX")," \u6642\uff0c\u5b58\u5728\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shikijs/shiki"},"shiki")," \u5c07 code \u8f49\u70ba html \uff0c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-vite-svelte-markdown/blob/2f218cd/vite.config.js#L14"},"\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528")," \u7684\u9700\u6c42\u2026\u2026"))}m.isMDXComponent=!0}}]);