"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5085],{2597:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,k=c["".concat(o,".").concat(g)]||c[g]||u[g]||p;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8967:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(4584),a=r(9229),p=(r(9496),r(2597)),i=["components"],l={description:"A imports transform unplugin.",image:"https://vdustr.dev/asset-2022/03-26-unplugin-transform-imports/og.png",authors:["ViPro"],tags:["esbuild","icon","import","lodash","rollup","transform","tree-shaking","unplugin","vite","webpack"]},o="unplugin-transform-imports",s={permalink:"/blog/2022/03/26/unplugin-transform-imports",source:"@site/blog/2022/03/26/unplugin-transform-imports.md",title:"unplugin-transform-imports",description:"A imports transform unplugin.",date:"2022-03-26T00:00:00.000Z",formattedDate:"2022\u5e743\u670826\u65e5",tags:[{label:"esbuild",permalink:"/blog/tags/esbuild"},{label:"icon",permalink:"/blog/tags/icon"},{label:"import",permalink:"/blog/tags/import"},{label:"lodash",permalink:"/blog/tags/lodash"},{label:"rollup",permalink:"/blog/tags/rollup"},{label:"transform",permalink:"/blog/tags/transform"},{label:"tree-shaking",permalink:"/blog/tags/tree-shaking"},{label:"unplugin",permalink:"/blog/tags/unplugin"},{label:"vite",permalink:"/blog/tags/vite"},{label:"webpack",permalink:"/blog/tags/webpack"}],readingTime:3.185,truncated:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://vdustr.dev/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],frontMatter:{description:"A imports transform unplugin.",image:"https://vdustr.dev/asset-2022/03-26-unplugin-transform-imports/og.png",authors:["ViPro"],tags:["esbuild","icon","import","lodash","rollup","transform","tree-shaking","unplugin","vite","webpack"]},nextItem:{title:"g2d",permalink:"/blog/2022/03/22/gitignore-to-dockerignore"}},m={authorsImageUrls:[void 0]},u=[{value:"Slow Startup in Development Environment",id:"slow-startup-in-development-environment",level:2},{value:"Tree Shaking",id:"tree-shaking",level:2},{value:"unplugin-transform-imports",id:"unplugin-transform-imports",level:2}],c={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"A imports transform unplugin."),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://vdustr.dev/asset-2022/03-26-unplugin-transform-imports/og.png",alt:"unplugin-transform-imports banner"})),(0,p.kt)("h2",{id:"slow-startup-in-development-environment"},"Slow Startup in Development Environment"),(0,p.kt)("p",null,"\u4e4b\u524d\u6709\u767c\u751f ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," \u555f\u52d5\u6642\u9593\u8d85\u9577\u7684\u72c0\u6cc1\uff0c\u7d93\u597d\u53cb ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yezhi780625"},"yezhi780625")," \u8abf\u67e5\u5728\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/TeamWertarbyte/mdi-material-ui"},(0,p.kt)("inlineCode",{parentName:"a"},"mdi-material-ui"))," \u7684\u6642\u5019\u96d6\u7136\u4f7f\u7528 ESM \u53ef\u4ee5 tree shaking\uff0c\u4f46\u5176\u5be6 webpack \u5728\u9019\u4e4b\u524d\u9084\u662f\u6703\u82b1\u5927\u91cf\u6642\u9593\u8f09\u5165\u548c bundle\u3002 \u5f8c\u4f86\u6930\u5b50\u4e5f\u627e\u5230\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://mui.com/guides/minimizing-bundle-size/#development-environment"},"MUI \u7684\u5b98\u7db2\u4e5f\u6709\u63cf\u8ff0\u5230\u76f8\u540c\u7684\u554f\u984c")," :"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Development bundles can contain the full library which can lead to slower startup times. This is especially noticeable if you import from @mui/icons-material. Startup times can be approximately 6x slower than without named imports from the top-level API.")),(0,p.kt)("p",null,"\u800c MUI \u5b98\u65b9\u4e5f\u63d0\u4f9b\u4e86\u5169\u7a2e\u89e3\u6cd5\uff0c\u4e00\u7a2e\u5c31\u662f\u5c07\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import { Button, TextField } from "@mui/material";\n')),(0,p.kt)("p",null,"\u6539\u5beb\u70ba\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import Button from "@mui/material/Button";\nimport TextField from "@mui/material/TextField";\n')),(0,p.kt)("p",null,"\u53e6\u4e00\u500b\u65b9\u6cd5\u5247\u662f\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/umijs/babel-plugin-import"},(0,p.kt)("inlineCode",{parentName:"a"},"babel-plugin-import"))," \u3002"),(0,p.kt)("h2",{id:"tree-shaking"},"Tree Shaking"),(0,p.kt)("p",null,"\u9664\u4e86\u555f\u52d5\u7de9\u6162\u7684\u554f\u984c\u4e4b\u5916\uff0c\u53e6\u4e00\u500b\u5e38\u898b\u554f\u984c\u5247\u662f\u50cf\u67d0\u4e9b libraries \u4e26\u6c92\u6709\u63d0\u4f9b ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html"},"ESM")," \u56e0\u800c\u7121\u6cd5 tree shaking\u3002"),(0,p.kt)("p",null,"\u6240\u8b02\u7684 Tree shaking \u53ef\u4ee5\u7c21\u55ae\u7406\u89e3\u6210\u5728 build distribution \u6642\u53ea\u6703\u52a0\u5165\u6709\u5f15\u7528\u5230\u7684\u90e8\u5206\uff0c\u5176\u9918\u7684\u4e0d\u6703\u52a0\u5165 bundle \u88e1\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.")),(0,p.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u53ef\u4ee5\u53c3\u8003\u9019\u88e1:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"},"mdn web docs - Tree shaking")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/tree-shaking/"},"webpack - Tree Shaking")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://rollupjs.org/guide/en/#tree-shaking"},"rollup.js - Tree-Shaking"))),(0,p.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u50cf\u9019\u6a23\u7684\u5f15\u7528\u65b9\u5f0f\u662f\u6703\u5c07 lodash \u6574\u5305\u8f09\u9032\u4f86\u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import { merge } from "lodash";\n')),(0,p.kt)("p",null,"\u6709\u4e0b\u5217\u5e7e\u7a2e\u89e3\u6c7a\u65b9\u5f0f\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6539\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/lodash-es"},(0,p.kt)("inlineCode",{parentName:"a"},"lodash-es"))," \u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/lodash/babel-plugin-lodash"},(0,p.kt)("inlineCode",{parentName:"a"},"babel-plugin-lodash"))," \u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/umijs/babel-plugin-import"},(0,p.kt)("inlineCode",{parentName:"a"},"babel-plugin-import"))," \u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6539\u8b8a\u5f15\u7528\u65b9\u5f0f\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import merge from "lodash/merge";\n')),(0,p.kt)("p",{parentName:"li"},"\u4f60\u751a\u81f3\u53ef\u4ee5\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-restricted-imports"},"eslint \u7981\u6b62\u76f4\u63a5\u5f15\u7528 ",(0,p.kt)("inlineCode",{parentName:"a"},'"lodash"'))," \uff0c\u800c\u7576\u6709\u8a2d\u7f6e\u4e0a\u5217\u7684\u65b9\u6cd5\u6642\u4e5f\u53ef\u4ee5\u5957\u7528\u76f8\u53cd\u7684\u8a2d\u5b9a\u3002"),(0,p.kt)("p",{parentName:"li"},"\u4f46\u9019\u7a2e\u65b9\u5f0f\u4e0d\u9069\u5408\u50cf ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/phosphor-icons/phosphor-react"},"phosphor-react")," \u9019\u7a2e\u53ea\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"main.js")," \u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"type.d.ts")," \u7684 library\uff0c\u76f4\u63a5\u5f15\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"phosphor-react/dist/")," \u5167\u7684\u6a94\u6848\u6703\u53d6\u4e0d\u5230\u578b\u5225\u3002\u5982\u679c\u60a8\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/vitejs/vite"},"vite")," \u7684\u8a71\u5012\u662f\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"phosphor-react/src/")," \u4e0b\u7684\u6a94\u6848\uff0c\u548c webpack \u4e0d\u540c vite \u9810\u8a2d\u4e26\u6c92\u6709\u5c07 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/")," exclude \u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u88e1\u9762\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".tsx")," \u3002"))),(0,p.kt)("h2",{id:"unplugin-transform-imports"},"unplugin-transform-imports"),(0,p.kt)("p",null,"\u53c3\u8003\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/umijs/babel-plugin-import"},(0,p.kt)("inlineCode",{parentName:"a"},"babel-plugin-import"))," \u7684\u505a\u6cd5\u6211\u5be6\u4f5c\u4e86\u4e00\u500b ",(0,p.kt)("inlineCode",{parentName:"p"},"unplugin-transform-imports")," \u3002"),(0,p.kt)("p",null,"\u56e0\u70ba\u57fa\u65bc ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/unjs/unplugin"},"unplugin")," \u6240\u4ee5\u7406\u8ad6\u4e0a\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4f7f\u7528\u5728\u57fa\u65bc ",(0,p.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", ",(0,p.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup"),", ",(0,p.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),", ",(0,p.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," \u7684\u74b0\u5883\u3002\u53e6\u5916 ",(0,p.kt)("inlineCode",{parentName:"p"},"transformImports()")," function \u80fd\u7368\u7acb\u88ab\u4f7f\u7528\uff0c\u4e26\u652f\u63f4 typescript \u548c ESM\u3002"),(0,p.kt)("p",null,"\u53e6\u5916\u4e5f\u63d0\u4f9b\u4e86\u5e7e\u500b\u7bc4\u4f8b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-craco"},"craco")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite"},"vite-react")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite-vue"},"vite-vue")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite-svelte"},"vite-svelte"))),(0,p.kt)("p",null,"\u5176\u4e2d craco \u7684\u7bc4\u4f8b\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm start")," \u7684\u6642\u9593\u5c31\u80fd\u5f9e 22427 ms \u512a\u5316\u5230 3313 ms (AMD Ryzen 9 5900HS) \uff1b Distribution \u7684\u9ad4\u7a4d\u4e5f\u5f9e 1.6M \u6e1b\u5c11\u5230 980K \u3002\u6b64\u5916\u50cf\u4e0a\u8ff0\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/phosphor-icons/phosphor-react"},"phosphor-react")," \u4e5f\u80fd\u5728 IDE \u6b63\u5e38\u53d6\u5f97 type \u537b\u4e0d\u5f71\u97ff startup time \u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"unplugin-transform-imports")," \u7684\u9023\u7d50\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"NPM: ",(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/unplugin-transform-imports"},"https://www.npmjs.com/package/unplugin-transform-imports")),(0,p.kt)("li",{parentName:"ul"},"GitHub: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/VdustR/unplugin-transform-imports"},"https://github.com/VdustR/unplugin-transform-imports"))))}g.isMDXComponent=!0}}]);