"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2164],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(959);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=i(r),m=l,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(d,n(n({ref:t},c),{},{components:r})):a.createElement(d,n({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[g]="string"==typeof e?e:l,n[1]=p;for(var i=2;i<o;i++)n[i]=r[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(5882),l=(r(959),r(7942));const o={description:"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.",image:"https://vdustr.dev/asset-2022/01-04-example-graphql-fullstack-codegen/ogimage.png",authors:["ViPro"],tags:["react","graphql","typescript","apollo","vscode","visual-studio-code","workspace","monorepo","axios","gql","fullstack","codegen","pnpm","apollo-server","fastify","ts-node","graphql-code-generator","ts-node-dev","react-query"]},n="A TypeScript Fullstack GraphQL CodeGen Example",p={permalink:"/blog/2022/01/04/example-graphql-fullstack-codegen",source:"@site/blog/2022/01/04/example-graphql-fullstack-codegen.md",title:"A TypeScript Fullstack GraphQL CodeGen Example",description:"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.",date:"2022-01-04T00:00:00.000Z",formattedDate:"2022\u5e741\u67084\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"graphql",permalink:"/blog/tags/graphql"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"apollo",permalink:"/blog/tags/apollo"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"visual-studio-code",permalink:"/blog/tags/visual-studio-code"},{label:"workspace",permalink:"/blog/tags/workspace"},{label:"monorepo",permalink:"/blog/tags/monorepo"},{label:"axios",permalink:"/blog/tags/axios"},{label:"gql",permalink:"/blog/tags/gql"},{label:"fullstack",permalink:"/blog/tags/fullstack"},{label:"codegen",permalink:"/blog/tags/codegen"},{label:"pnpm",permalink:"/blog/tags/pnpm"},{label:"apollo-server",permalink:"/blog/tags/apollo-server"},{label:"fastify",permalink:"/blog/tags/fastify"},{label:"ts-node",permalink:"/blog/tags/ts-node"},{label:"graphql-code-generator",permalink:"/blog/tags/graphql-code-generator"},{label:"ts-node-dev",permalink:"/blog/tags/ts-node-dev"},{label:"react-query",permalink:"/blog/tags/react-query"}],readingTime:.28,hasTruncateMarker:!1,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.",image:"https://vdustr.dev/asset-2022/01-04-example-graphql-fullstack-codegen/ogimage.png",authors:["ViPro"],tags:["react","graphql","typescript","apollo","vscode","visual-studio-code","workspace","monorepo","axios","gql","fullstack","codegen","pnpm","apollo-server","fastify","ts-node","graphql-code-generator","ts-node-dev","react-query"]},prevItem:{title:"Pocket",permalink:"/blog/2022/01/08/pocket"},nextItem:{title:"Example for Svelte + TS + Vite + MDsveX",permalink:"/blog/2021/12/25/example-vite-svelte-markdown"}},s={authorsImageUrls:[void 0]},i=[],c={toc:i};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u8a66\u4e86\u4e00\u4e0b GraphQL CodeGen \u7522\u751f react-query \u548c resolver type, node server \u53ef\u4ee5\u4fdd\u8b49\u56de\u61c9\u7684\u578b\u614b\u6b63\u78ba, react-query functions \u66f4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528, \u771f\u3109 4 \u8d85\u65b9\u4fbf\u7684 R~"),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c3\u8003\u9019\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-graphql-fullstack-codegen"},"https://github.com/VdustR/example-graphql-fullstack-codegen")))}g.isMDXComponent=!0}}]);