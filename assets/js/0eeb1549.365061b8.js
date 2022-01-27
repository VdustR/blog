"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5870],{2597:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,v=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return h}});var r=n(2501),a=n(1525),l=(n(9496),n(2597)),o=["components"],i={description:"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026",image:"https://vdustr.github.io/asset-2022/01-27-html-to-svelte/og.png",authors:["ViPro"],tags:["svelte","shiki","html","escape"]},s="HTML To Svelte",p={permalink:"/blog/2022/01/27/html-to-svelte",source:"@site/blog/2022/01/27/html-to-svelte.md",title:"HTML To Svelte",description:"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026",date:"2022-01-27T00:00:00.000Z",formattedDate:"2022\u5e741\u670827\u65e5",tags:[{label:"svelte",permalink:"/blog/tags/svelte"},{label:"shiki",permalink:"/blog/tags/shiki"},{label:"html",permalink:"/blog/tags/html"},{label:"escape",permalink:"/blog/tags/escape"}],readingTime:1.59,truncated:!0,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://VdustR.github.io/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],nextItem:{title:"\u65b0 logo",permalink:"/blog/2022/01/13/new-logo"}},m={authorsImageUrls:[void 0]},c=[],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://vdustr.github.io/asset-2022/01-27-html-to-svelte/og.png",alt:"HTML To Svelte"})),(0,l.kt)("p",null,"\u5728\u5148\u524d\u5beb\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/blog/2021/12/25/example-vite-svelte-markdown"},"Example for Svelte + TS + Vite + MDsveX")," \u6642\uff0c\u5b58\u5728\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/shikijs/shiki"},"shiki")," \u5c07 code \u8f49\u70ba html \uff0c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-vite-svelte-markdown/blob/2f218cd/vite.config.js#L14"},"\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528")," \u7684\u9700\u6c42\u2026\u2026"),(0,l.kt)("p",null,"\u7531\u65bc shiki \u7522\u51fa\u7684\u7d50\u679c\u5c31\u662f\u4e00\u5806 ",(0,l.kt)("inlineCode",{parentName:"p"},"<span />")," \u81ea\u7136\u6211\u4e0d\u592a\u9700\u8981\u64d4\u5fc3 html attributes \uff0c \u7576\u6642\u7684\u60f3\u6cd5\u662f\u53ea\u8981\u5c07 html tags \u7684 innerText \u90fd\u5f37\u5236\u8f49\u6210 svelte \u7684\u5b57\u4e32\u5c31\u597d\u4e86\uff0c \u65bc\u662f\u4f7f\u7528\u4e86\u9019\u6a23\u7684\u65b9\u6cd5\uff0c \u8b93\u4ed6\u4f7f\u7528 svelte element \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Prevent removing leading and tailing spaces.\n * Transform `<div> foo </div>` into `<div>{' foo '}</div>`\n * @param {string} html\n */\nfunction saveSvelteHtmlText(html) {\n  return html.replace(/>( *[^<\\n\\r]+ *)</g, (match) => {\n    const text = match.substring(1, match.length - 1);\n    /**\n     * We don't need escape text here but we have to transform it into a svelte\n     * string.\n     *\n     * For example:\n     *   <div> &lt;div&gt; </div>\n     *   should be transformed to\n     *   <div>{\" <div> \"}</div>\n     */\n    const unescapeText = unescape(text);\n    return '>{\"' + unescapeText.replace(/\"/g, '\\\\\"') + '\"}<';\n  });\n}\n")),(0,l.kt)("p",null,"\u672c\u4f86\u9084\u89ba\u5f97\u56e0\u70ba\u662f\u76f4\u63a5\u4f7f\u7528\u6b63\u898f\u800c\u4e0d\u662f\u4f7f\u7528 parser \u4e00\u76f4\u611f\u5230\u5f88\u4e0d\u5b89\uff0c\u9084\u5beb\u4e86\u4e00\u5806\u8a3b\u89e3\u8aaa\u660e\uff0c\u5f8c\u4f86\u60f3\u60f3\u65e2\u7136\u90fd\u662f html \u4e86\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5\u7528 svelte \u539f\u751f\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#template-syntax-html"},(0,l.kt)("inlineCode",{parentName:"a"},"{@html ...}"))," \u5c31\u597d\u4e86\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * @param {string} html\n */\nfunction htmlToSvelte(html) {\n  return `{@html \\`${html.replace(/`/g, "\\\\`")}\\`}`;\n}\n')),(0,l.kt)("p",null,"\u540c\u7406 React \u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"},(0,l.kt)("inlineCode",{parentName:"a"},"dangerouslySetInnerHTML"))," \uff0c Vue \u5247\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/syntax.html#Raw-HTML"},(0,l.kt)("inlineCode",{parentName:"a"},"v-html")),"\u3002"),(0,l.kt)("p",null,"\u539f\u4f86\u7684 repo \u4e5f\u4fee\u6b63\u4e86\uff0c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-vite-svelte-markdown/commit/dad32b4d2034e12d996f2f3a5ddcbb7019b352c1"},"commit \u8acb\u770b\u9019\u88e1"),"\u3002"),(0,l.kt)("p",null,"\u771f\u7684\u662f\u6709\u5920 87 \ud83e\udd2a"))}h.isMDXComponent=!0}}]);