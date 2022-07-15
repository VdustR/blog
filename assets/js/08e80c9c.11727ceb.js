"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5002],{7942:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var a=r(959);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=p(r),v=l,d=g["".concat(s,".").concat(v)]||g[v]||c[v]||n;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(665),l=(r(959),r(7942));const n={description:"This is an example for importing Markdown files as Svelte components.",image:"https://vdustr.dev/asset-2021/12-25-example-vite-svelte-markdown/ogImage.png",authors:["ViPro"],tags:["markdown","demo","example","vscode","svelte","highlight","pnpm","md","sveltejs","vite","shiki","mdsvex","vitejs","shikijs","html-escaper"]},o="Example for Svelte + TS + Vite + MDsveX",i={permalink:"/blog/2021/12/25/example-vite-svelte-markdown",source:"@site/blog/2021/12/25/example-vite-svelte-markdown.md",title:"Example for Svelte + TS + Vite + MDsveX",description:"This is an example for importing Markdown files as Svelte components.",date:"2021-12-25T00:00:00.000Z",formattedDate:"2021\u5e7412\u670825\u65e5",tags:[{label:"markdown",permalink:"/blog/tags/markdown"},{label:"demo",permalink:"/blog/tags/demo"},{label:"example",permalink:"/blog/tags/example"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"svelte",permalink:"/blog/tags/svelte"},{label:"highlight",permalink:"/blog/tags/highlight"},{label:"pnpm",permalink:"/blog/tags/pnpm"},{label:"md",permalink:"/blog/tags/md"},{label:"sveltejs",permalink:"/blog/tags/sveltejs"},{label:"vite",permalink:"/blog/tags/vite"},{label:"shiki",permalink:"/blog/tags/shiki"},{label:"mdsvex",permalink:"/blog/tags/mdsvex"},{label:"vitejs",permalink:"/blog/tags/vitejs"},{label:"shikijs",permalink:"/blog/tags/shikijs"},{label:"html-escaper",permalink:"/blog/tags/html-escaper"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"This is an example for importing Markdown files as Svelte components.",image:"https://vdustr.dev/asset-2021/12-25-example-vite-svelte-markdown/ogImage.png",authors:["ViPro"],tags:["markdown","demo","example","vscode","svelte","highlight","pnpm","md","sveltejs","vite","shiki","mdsvex","vitejs","shikijs","html-escaper"]},prevItem:{title:"A TypeScript Fullstack GraphQL CodeGen Example",permalink:"/blog/2022/01/04/example-graphql-fullstack-codegen"},nextItem:{title:"Better Discord",permalink:"/blog/2021/12/21/better-discord"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u60f3\u5728 svelte \u4f7f\u7528 markdown, \u770b\u5230\u5df2\u7d93\u6709\u5927\u5927\u958b\u767c\u4e86\u500b\u5957\u4ef6\u53eb ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pngwn/mdsvex"},"MDsveX"),", \u7136\u800c\u5728\u4f7f\u7528\u7684\u6642\u5019\u4ecd\u7136\u8e29\u5230\u4e86\u4e00\u4e9b\u554f\u984c, \u5beb\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\u7d00\u9304\u4e00\u4e0b, \u5927\u90e8\u5206\u7684\u554f\u984c\u548c\u89e3\u6c7a\u65b9\u6cd5\u90fd\u5728 vite.config.js \u7684\u8a3b\u89e3\u88e1:"),(0,l.kt)("p",null,"\ud83d\udc49 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-vite-svelte-markdown"},"https://github.com/VdustR/example-vite-svelte-markdown")))}c.isMDXComponent=!0}}]);