"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/02/22/likftc","metadata":{"permalink":"/blog/2022/02/22/likftc","source":"@site/blog/2022/02/22/likftc.md","title":"likftc","description":"List item keys for transition components.","date":"2022-02-22T00:00:00.000Z","formattedDate":"2022\u5e742\u670822\u65e5","tags":[{"label":"animate","permalink":"/blog/tags/animate"},{"label":"css","permalink":"/blog/tags/css"},{"label":"flip","permalink":"/blog/tags/flip"},{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"likftc","permalink":"/blog/tags/likftc"},{"label":"move","permalink":"/blog/tags/move"},{"label":"spring","permalink":"/blog/tags/spring"},{"label":"transition","permalink":"/blog/tags/transition"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"vue","permalink":"/blog/tags/vue"},{"label":"svelte","permalink":"/blog/tags/svelte"},{"label":"react","permalink":"/blog/tags/react"}],"readingTime":2.315,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"nextItem":{"title":"Forked rollup-plugin-rename-extensions","permalink":"/blog/2022/02/08/forked-rollup-plugin-rename-extensions"}},"content":"\u5beb\u4e86\u4e00\u500b\u5c0f library: [likftc](https://vdustr.dev/likftc/)\\n\\nList item keys for transition components.\\n\\n\u652f\u63f4 react, vue, svelte\\n\\n[![likftc](https://vdustr.dev/asset-2022/02-22-likftc/ogimage.png)](https://vdustr.dev/likftc/)\\n\\n\x3c!--truncate--\x3e\\n\\n\u5728\u73a9 Svelte \u7684\u6642\u5019\u767c\u73fe\u4e86\u4e00\u500b\u73fe\u8c61\uff0c Svelte \u7684 [`animate:flip`](https://svelte.dev/docs#template-syntax-element-directives-animate-fn) \u6703\u548c [`transition:fn`](https://svelte.dev/docs#template-syntax-element-directives-transition-fn) \u5728 list item \u5feb\u901f\u8b8a\u52d5\u6642\u6703\u767c\u751f\u885d\u7a81\uff0c\u9020\u6210\u67d0\u4e9b item \u5361\u5728\u4e0d\u6b63\u78ba\u7684\u5730\u65b9\u3002\u539f\u56e0\u662f\u5728 component \u7684\u63a7\u5236\u4e0b\uff0c list item \u662f\u4f7f\u7528 key \u4f86\u5224\u65b7\u662f\u5426\u4f7f\u7528\u540c\u4e00\u500b DOM\uff0c\u7121\u8ad6\u662f framework \u6216 compiler \u672c\u8eab\u6c92\u6709\u5c07\u9019\u4ef6\u4e8b\u60c5\u8655\u7406\u597d\uff0c\u5c31\u6709\u53ef\u80fd\u5728 leaving (svelte \u53eb outro) \u6642\u99ac\u4e0a\u53c8 render \u76f8\u540c key \u7684 list item \u6642\uff0c component \u53c8\u99ac\u4e0a\u62ff\u540c\u4e00\u500b dom \u958b\u59cb\u57f7\u884c entering (svelte \u53eb intro) \u7684\u52d5\u756b\uff0c\u7576\u9019\u500b\u52d5\u756b\u662f\u4f7f\u7528 js \u8655\u7406\u6642\u5c31\u6703\u6253\u67b6\u3002\\n\\n\u7bc4\u4f8b\u770b\u9019\u88e1: <https://vdustr.dev/likftc/svelte>\\n\\n\u9019\u500b\u885d\u7a81\u53ea\u6709\u5728\u4f7f\u7528 js spring function \u7684\u6642\u5019\u767c\u751f\uff0c\u6240\u4ee5\u50cf [Vue demo](https://vdustr.dev/likftc/vue) \u4e2d\u4f7f\u7528 css \u52d5\u756b\u9802\u591a\u4e5f\u662f\u76f4\u63a5\u77ac\u79fb\u800c\u5df2\uff0c\u4e26\u4e0d\u6703\u51fa\u73fe\u7279\u5225\u5947\u602a\u7684\u756b\u9762\uff0c\u4f7f\u7528 [`likftc`](https://github.com/VdustR/likftc) \u7684\u8a71\u4e5f\u53ea\u662f\u5df2\u7d93\u9032\u5165 leaving \u7684 component \u76f4\u63a5 fade out \u800c\u65b0\u7684\u5c31\u76f4\u63a5 render \u65b0\u7684 list item \uff0c\u6211\u8a8d\u70ba\u6c92\u6709\u50cf [Svelte](https://vdustr.dev/likftc/svelte) \u90a3\u9ebc\u5fc5\u8981\u3002\\n\\n\u7bc4\u4f8b\u770b\u9019\u88e1: <https://vdustr.dev/likftc/vue>\\n\\nReact \u7684\u90e8\u5206\u6211\u4f7f\u7528 [React FLIP Toolkit](https://github.com/aholachek/react-flip-toolkit) \u3002\u60c5\u6cc1\u6bd4\u8f03\u7279\u6b8a\uff0c\u4ed6\u672c\u8eab\u5176\u5be6\u53ea\u6709\u8655\u7406 FLIP \u7684\u90e8\u5206\uff0c\u4e26\u6c92\u6709\u8655\u7406 entering \u548c leaving\uff0c\u4f46\u4ed6\u6709\u63d0\u4f9b `onAppear` \u548c `onExit` \u7b49 event props \u53ef\u4ee5\u8b93\u4f60\u5728\u76f8\u5c0d\u61c9\u7684\u6642\u9593\u9ede\u5c0d element \u57f7\u884c\u5176\u4ed6\u884c\u70ba\u3002\u82e5\u4f7f\u7528 js \u63a7\u5236\u5c31\u6703\u9047\u5230\u548c svelte \u985e\u4f3c\u7684\u554f\u984c\uff0c\u9019\u500b\u554f\u984c\u751a\u81f3\u5728 [\u5b98\u65b9\u7bc4\u4f8b](https://codesandbox.io/s/4q7qpkn8q0) \u90fd\u53ef\u4ee5\u5feb\u901f\u5207\u63db\u91cd\u73fe (\u5148\u6309 exitAndFlipThenEnter \u7136\u5f8c\u5728\u52d5\u756b\u7d50\u675f\u4e4b\u524d\u99ac\u4e0a\u6309 exitThenFlipThenEnter) \u3002 \u4f46\u5982\u679c\u53ea\u662f\u50cf [React demo](https://vdustr.dev/likftc/react/) \u5728 onAppear \u548c onExit \u76f4\u63a5\u4f7f\u7528 css (\u9019\u88e1\u4f7f\u7528 [Animate.css](https://animate.style/)) \u800c\u4e0d\u4f7f\u7528 js \u4f86\u63a7\u5236\u7684\u8a71\u611f\u89ba\u5c31\u6bd4\u8f03\u6c92\u5dee\u3002\\n\\n\u7bc4\u4f8b\u770b\u9019\u88e1: <https://vdustr.dev/likftc/react>\\n\\n\u5982\u679c\u9084\u662f\u60f3\u4f7f\u7528 React FLIP Toolkit spring function \u7684 entering \u548c leaving \u53ef\u4ee5\u53c3\u8003 [\u9019\u88e1](https://github.com/VdustR/likftc/blob/dd396932913177e64a7914a18bb159ee44885d14/packages/doc/src/lib/demo/react-flip-toolkit/With.tsx)\u3002"},{"id":"/2022/02/08/forked-rollup-plugin-rename-extensions","metadata":{"permalink":"/blog/2022/02/08/forked-rollup-plugin-rename-extensions","source":"@site/blog/2022/02/08/forked-rollup-plugin-rename-extensions.md","title":"Forked rollup-plugin-rename-extensions","description":"\u81e8\u6642 fork \u4e86 \u4e00\u500b repo \u89e3\u6c7a rollup-plugin-typescript2 + @betit/rollup-plugin-rename-extensions \u7121\u6cd5\u4e26\u5b58 tslib.js \u548c tslib.cjs \u7684\u554f\u984c\u3002","date":"2022-02-08T00:00:00.000Z","formattedDate":"2022\u5e742\u67088\u65e5","tags":[{"label":"rollup","permalink":"/blog/tags/rollup"},{"label":"npm","permalink":"/blog/tags/npm"},{"label":"library","permalink":"/blog/tags/library"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"esm","permalink":"/blog/tags/esm"},{"label":"cjs","permalink":"/blog/tags/cjs"}],"readingTime":1.485,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"likftc","permalink":"/blog/2022/02/22/likftc"},"nextItem":{"title":"HTML To Svelte","permalink":"/blog/2022/01/27/html-to-svelte"}},"content":"\u81e8\u6642 fork \u4e86 \u4e00\u500b repo \u89e3\u6c7a rollup-plugin-typescript2 + @betit/rollup-plugin-rename-extensions \u7121\u6cd5\u4e26\u5b58 tslib.js \u548c tslib.cjs \u7684\u554f\u984c\u3002\\n\\n[![Forked rollup-plugin-rename-extensions](https://vdustr.dev/asset-2022/02-08-forked-rollup-plugin-rename-extensions/ogimage.png)](https://github.com/vdustr/rollup-plugin-rename-extensions)\\n\\n[Repo \u9ede\u9019\u88e1](https://github.com/vdustr/rollup-plugin-rename-extensions)\\n\\n\x3c!--truncate--\x3e\\n\\n\u5728\u6253\u5305 library \u6642\u6211\u4e26\u4e0d\u559c\u6b61\u4f7f\u7528\u50cf [tsdx](https://github.com/jaredpalmer/tsdx) \u7b49 bundle \u7684\u65b9\u5f0f\uff0c\u800c\u662f\u6bd4\u8f03\u559c\u6b61 [preserveModules](https://rollupjs.org/guide/en/#outputpreservemodules) \u4fdd\u7559\u539f\u59cb\u7d50\u69cb\uff0c\u4f7f\u7528\u4e0a\u80fd\u6709\u66f4\u5927\u7684\u5f48\u6027\u3002\\n\\n\u76ee\u524d\u70ba\u6b62 [`rollup-plugin-typescript2`](https://github.com/ezolenko/rollup-plugin-typescript2) \u662f\u6211\u8a8d\u70ba\u6253\u5305\u6548\u679c\u8f03\u597d\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u4fdd\u7559\u539f\u59cb\u7d50\u69cb\uff0c\u4e5f\u80fd\u751f\u6210\u7d50\u69cb\u4e00\u81f4\u7684 `.d.ts`\uff0c\u4e26\u4e14\u5c0d [tslib](https://github.com/Microsoft/tslib) \u9032\u884c tree shaking \u4e26\u653e\u5230 `_virtual/_tslib.js`\u3002\\n\\n\u57fa\u65bc\u67d0\u4e9b\u5de5\u5177\u5c0d esm \u652f\u63f4\u4ecd\u4e0d\u662f\u5f88\u5b8c\u7f8e\uff0c\u6211\u60f3\u540c\u6642\u6253\u5305 .js (esm) \u548c .cjs \u6642\uff0c\u627e\u5230\u4e86\u500b\u4e0d\u932f\u7684 [@betit/rollup-plugin-rename-extensions](https://github.com/GiG/rollup-plugin-rename-extensions) \u53ef\u4ee5\u5728 rollup build \u6642\u540c\u6642\u5c0d\u526f\u6a94\u540d\u9032\u884c\u8abf\u6574\uff0c\u907a\u61be\u7684\u662f\u5176\u4f9d\u8cf4\u7684 [@rollup/pluginutils createFilter](https://github.com/rollup/plugins/blob/6cd15b9/packages/pluginutils/src/createFilter.ts#L48) \u4e26\u4e0d\u652f\u63f4 `\\\\0tslib.js` \u9019\u7a2e `facadeModuleId` \uff0c\u6216\u662f\u8aaa\u6839\u672c\u662f\u76f4\u63a5\u5c07\u4e4b\u6392\u9664\u5728\u5916\u4e86\uff0c\u56e0\u6b64\u6211 fork \u4e86 [@vdustr/rollup-plugin-rename-extensions](https://github.com/vdustr/rollup-plugin-rename-extensions) \u4e26\u52a0\u4e86\u4e00\u500b match option \u4f86\u76f4\u63a5\u6bd4\u5c0d\u539f\u59cb\u7684 `facadeModuleId` \u3002\\n\\n\u5be6\u969b\u4f7f\u7528\u72c0\u6cc1\u7684\u8a71\u53ef\u4ee5\u53c3\u8003[\u9019\u88e1](https://github.com/VdustR/likftc/blob/59b66c2/script/rollup.config.js#L43)\u3002\\n\\n\u6700\u5f8c\uff0c\u6211\u8a8d\u70ba\u9019\u53ea\u662f\u66ab\u6642\u6027\u7684\u89e3\u6cd5\uff0c\u76ee\u524d\u53ea\u662f\u5148\u8b93\u4ed6\u80fd\u9054\u5230\u9810\u671f\u7684\u6548\u679c\u800c\u5df2\uff0c\u61c9\u8a72\u6709\u66f4\u597d\u66f4\u7c21\u55ae\u7684\u505a\u6cd5\uff0c\u6b61\u8fce\u5927\u5bb6\u4f86 [Discord \u7fa4](http://ganhuaking.tw/) \u4e00\u8d77\u4ea4\u6d41\u3002"},{"id":"/2022/01/27/html-to-svelte","metadata":{"permalink":"/blog/2022/01/27/html-to-svelte","source":"@site/blog/2022/01/27/html-to-svelte.md","title":"HTML To Svelte","description":"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026","date":"2022-01-27T00:00:00.000Z","formattedDate":"2022\u5e741\u670827\u65e5","tags":[{"label":"svelte","permalink":"/blog/tags/svelte"},{"label":"shiki","permalink":"/blog/tags/shiki"},{"label":"html","permalink":"/blog/tags/html"},{"label":"escape","permalink":"/blog/tags/escape"}],"readingTime":1.59,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"Forked rollup-plugin-rename-extensions","permalink":"/blog/2022/02/08/forked-rollup-plugin-rename-extensions"},"nextItem":{"title":"\u65b0 logo","permalink":"/blog/2022/01/13/new-logo"}},"content":"![HTML To Svelte](https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png)\\n\\n\u5728\u5148\u524d\u5beb\u7684 [Example for Svelte + TS + Vite + MDsveX](../../../2021/12/25/example-vite-svelte-markdown.md) \u6642\uff0c\u5b58\u5728\u4f7f\u7528 [shiki](https://github.com/shikijs/shiki) \u5c07 code \u8f49\u70ba html \uff0c [\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528](https://github.com/VdustR/example-vite-svelte-markdown/blob/2f218cd/vite.config.js#L14) \u7684\u9700\u6c42\u2026\u2026\\n\\n\x3c!--truncate--\x3e\\n\\n\u7531\u65bc shiki \u7522\u51fa\u7684\u7d50\u679c\u5c31\u662f\u4e00\u5806 `<span />` \u81ea\u7136\u6211\u4e0d\u592a\u9700\u8981\u64d4\u5fc3 html attributes \uff0c\u7576\u6642\u7684\u60f3\u6cd5\u662f\u53ea\u8981\u5c07 html tags \u7684 innerText \u90fd\u5f37\u5236\u8f49\u6210 svelte \u7684\u5b57\u4e32\u5c31\u597d\u4e86\uff0c\u65bc\u662f\u4f7f\u7528\u4e86\u9019\u6a23\u7684\u65b9\u6cd5\uff0c\u8b93\u4ed6\u4f7f\u7528 svelte element \uff1a\\n\\n```ts\\n/**\\n * Prevent removing leading and tailing spaces.\\n * Transform `<div> foo </div>` into `<div>{\' foo \'}</div>`\\n * @param {string} html\\n */\\nfunction saveSvelteHtmlText(html) {\\n  return html.replace(/>( *[^<\\\\n\\\\r]+ *)</g, (match) => {\\n    const text = match.substring(1, match.length - 1);\\n    /**\\n     * We don\'t need escape text here but we have to transform it into a svelte\\n     * string.\\n     *\\n     * For example:\\n     *   <div> &lt;div&gt; </div>\\n     *   should be transformed to\\n     *   <div>{\\" <div> \\"}</div>\\n     */\\n    const unescapeText = unescape(text);\\n    return \'>{\\"\' + unescapeText.replace(/\\"/g, \'\\\\\\\\\\"\') + \'\\"}<\';\\n  });\\n}\\n```\\n\\n\u672c\u4f86\u9084\u89ba\u5f97\u56e0\u70ba\u662f\u76f4\u63a5\u4f7f\u7528\u6b63\u898f\u800c\u4e0d\u662f\u4f7f\u7528 parser \u4e00\u76f4\u611f\u5230\u5f88\u4e0d\u5b89\uff0c\u9084\u5beb\u4e86\u4e00\u5806\u8a3b\u89e3\u8aaa\u660e\uff0c\u5f8c\u4f86\u60f3\u60f3\u65e2\u7136\u90fd\u662f html \u4e86\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5\u7528 svelte \u539f\u751f\u7684 [`{@html ...}`](https://svelte.dev/docs#template-syntax-html) \u5c31\u597d\u4e86\uff1f\\n\\n```ts\\n/**\\n * @param {string} html\\n */\\nfunction htmlToSvelte(html) {\\n  return `{@html \\\\`${html.replace(/([`$])/g, \\"\\\\\\\\$1\\")}\\\\`}`;\\n}\\n```\\n\\n\u540c\u7406 React \u4e5f\u53ef\u4ee5\u4f7f\u7528 [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) \uff0c Vue \u5247\u4f7f\u7528 [`v-html`](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)\u3002\\n\\n\u539f\u4f86\u7684 repo \u4e5f\u4fee\u6b63\u4e86\uff0c [commit \u8acb\u770b\u9019\u88e1](https://github.com/VdustR/example-vite-svelte-markdown/commit/c790109)\u3002\\n\\n\u771f\u7684\u662f\u6709\u5920 87 \ud83e\udd2a"},{"id":"/2022/01/13/new-logo","metadata":{"permalink":"/blog/2022/01/13/new-logo","source":"@site/blog/2022/01/13/new-logo.md","title":"\u65b0 logo","description":"\u7e7c 2019/01 \u4e4b\u5f8c, \u4e45\u9055\u5730\u66f4\u65b0\u4e86 Logo","date":"2022-01-13T00:00:00.000Z","formattedDate":"2022\u5e741\u670813\u65e5","tags":[{"label":"logo","permalink":"/blog/tags/logo"}],"readingTime":0.305,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"HTML To Svelte","permalink":"/blog/2022/01/27/html-to-svelte"},"nextItem":{"title":"Pocket","permalink":"/blog/2022/01/08/pocket"}},"content":"![Round Icon](https://vdustr.dev/brand/2022-01/round.png)\\n\\n\u7e7c 2019/01 \u4e4b\u5f8c, \u4e45\u9055\u5730\u66f4\u65b0\u4e86 Logo\\n\\n\x3c!--truncate--\x3e\\n\\n## Tech\\n\\n- Editors:\\n  - [LibreSprite](https://github.com/LibreSprite/LibreSprite)\\n  - [Gravit](https://designer.gravit.io)\\n- Palette: db32\\n- Font: [ark-pixel-12px-latin](https://github.com/TakWolf/ark-pixel-font)\\n- Converters:\\n  - [ConvertICO.com](https://convertico.com)\\n  - [text-to-svg](https://github.com/shrhdk/text-to-svg)\\n  - [pixel-perfect-svg](https://github.com/kagof/pixel-perfect-svg)\\n\\n\u53e6\u5916 Docusaurus Palette \u4f7f\u7528 [Swatcher](https://swatcherapp.com):\\n\\n- h dif: -7\\n- s dif: -10\\n- b dif: 6\\n\\n## Source\\n\\n<https://github.com/VdustR/brand/tree/main/2022-01>\\n\\n## License\\n\\nCC0"},{"id":"/2022/01/08/pocket","metadata":{"permalink":"/blog/2022/01/08/pocket","source":"@site/blog/2022/01/08/pocket.md","title":"Pocket","description":"\ud83d\udc40 Stay awhile and listen..","date":"2022-01-08T00:00:00.000Z","formattedDate":"2022\u5e741\u67088\u65e5","tags":[{"label":"pocket","permalink":"/blog/tags/pocket"},{"label":"star","permalink":"/blog/tags/star"},{"label":"repository","permalink":"/blog/tags/repository"},{"label":"github","permalink":"/blog/tags/github"},{"label":"bookmarks","permalink":"/blog/tags/bookmarks"},{"label":"svelte","permalink":"/blog/tags/svelte"}],"readingTime":0.275,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"\u65b0 logo","permalink":"/blog/2022/01/13/new-logo"},"nextItem":{"title":"A TypeScript Fullstack GraphQL CodeGen Example","permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen"}},"content":"[![pocket](https://vdustr.dev/asset-2022/01-08-pocket/og.png)](https://vdustr.dev/pocket)\\n\\n\u6700\u8fd1\u958b\u59cb\u5617\u8a66\u7528 [Svelte](https://svelte.dev/) \u5beb\u4e00\u4e9b\u6771\u897f, \u505a\u4e86\u9019\u500b\u9801\u9762, \u4e3b\u8981\u662f\u653e\u4e00\u4e9b \ud83d\udd16 \u66f8\u7c64\u548c [\u81ea\u5df1 \u2b50 \u7684 Repositories](https://github.com/VdustR?tab=stars) \uff0c \u65b9\u4fbf\u641c\u5c0b\u7528\u3002\\n\\n\u66f8\u7c64\u7684\u90e8\u5206\u6703\u9678\u7e8c\u6574\u7406\u88dc\u4e0a\u3002\\n\\n\ud83d\udc49 <https://vdustr.dev/pocket>"},{"id":"/2022/01/04/example-graphql-fullstack-codegen","metadata":{"permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen","source":"@site/blog/2022/01/04/example-graphql-fullstack-codegen.md","title":"A TypeScript Fullstack GraphQL CodeGen Example","description":"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.","date":"2022-01-04T00:00:00.000Z","formattedDate":"2022\u5e741\u67084\u65e5","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"graphql","permalink":"/blog/tags/graphql"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"apollo","permalink":"/blog/tags/apollo"},{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"visual-studio-code","permalink":"/blog/tags/visual-studio-code"},{"label":"workspace","permalink":"/blog/tags/workspace"},{"label":"monorepo","permalink":"/blog/tags/monorepo"},{"label":"axios","permalink":"/blog/tags/axios"},{"label":"gql","permalink":"/blog/tags/gql"},{"label":"fullstack","permalink":"/blog/tags/fullstack"},{"label":"codegen","permalink":"/blog/tags/codegen"},{"label":"pnpm","permalink":"/blog/tags/pnpm"},{"label":"apollo-server","permalink":"/blog/tags/apollo-server"},{"label":"fastify","permalink":"/blog/tags/fastify"},{"label":"ts-node","permalink":"/blog/tags/ts-node"},{"label":"graphql-code-generator","permalink":"/blog/tags/graphql-code-generator"},{"label":"ts-node-dev","permalink":"/blog/tags/ts-node-dev"},{"label":"react-query","permalink":"/blog/tags/react-query"}],"readingTime":0.28,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"Pocket","permalink":"/blog/2022/01/08/pocket"},"nextItem":{"title":"Example for Svelte + TS + Vite + MDsveX","permalink":"/blog/2021/12/25/example-vite-svelte-markdown"}},"content":"\u6700\u8fd1\u8a66\u4e86\u4e00\u4e0b GraphQL CodeGen \u7522\u751f react-query \u548c resolver type, node server \u53ef\u4ee5\u4fdd\u8b49\u56de\u61c9\u7684\u578b\u614b\u6b63\u78ba, react-query functions \u66f4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528, \u771f\u3109 4 \u8d85\u65b9\u4fbf\u7684 R~\\n\\n\u53ef\u4ee5\u53c3\u8003\u9019\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b: <https://github.com/VdustR/example-graphql-fullstack-codegen>"},{"id":"/2021/12/25/example-vite-svelte-markdown","metadata":{"permalink":"/blog/2021/12/25/example-vite-svelte-markdown","source":"@site/blog/2021/12/25/example-vite-svelte-markdown.md","title":"Example for Svelte + TS + Vite + MDsveX","description":"This is an example for importing Markdown files as Svelte components.","date":"2021-12-25T00:00:00.000Z","formattedDate":"2021\u5e7412\u670825\u65e5","tags":[{"label":"markdown","permalink":"/blog/tags/markdown"},{"label":"demo","permalink":"/blog/tags/demo"},{"label":"example","permalink":"/blog/tags/example"},{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"svelte","permalink":"/blog/tags/svelte"},{"label":"highlight","permalink":"/blog/tags/highlight"},{"label":"pnpm","permalink":"/blog/tags/pnpm"},{"label":"md","permalink":"/blog/tags/md"},{"label":"sveltejs","permalink":"/blog/tags/sveltejs"},{"label":"vite","permalink":"/blog/tags/vite"},{"label":"shiki","permalink":"/blog/tags/shiki"},{"label":"mdsvex","permalink":"/blog/tags/mdsvex"},{"label":"vitejs","permalink":"/blog/tags/vitejs"},{"label":"shikijs","permalink":"/blog/tags/shikijs"},{"label":"html-escaper","permalink":"/blog/tags/html-escaper"}],"readingTime":0.345,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"A TypeScript Fullstack GraphQL CodeGen Example","permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen"},"nextItem":{"title":"Better Discord","permalink":"/blog/2021/12/21/better-discord"}},"content":"\u60f3\u5728 svelte \u4f7f\u7528 markdown, \u770b\u5230\u5df2\u7d93\u6709\u5927\u5927\u958b\u767c\u4e86\u500b\u5957\u4ef6\u53eb [MDsveX](https://github.com/pngwn/mdsvex), \u7136\u800c\u5728\u4f7f\u7528\u7684\u6642\u5019\u4ecd\u7136\u8e29\u5230\u4e86\u4e00\u4e9b\u554f\u984c, \u5beb\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\u7d00\u9304\u4e00\u4e0b, \u5927\u90e8\u5206\u7684\u554f\u984c\u548c\u89e3\u6c7a\u65b9\u6cd5\u90fd\u5728 vite.config.js \u7684\u8a3b\u89e3\u88e1:\\n\\n\ud83d\udc49 <https://github.com/VdustR/example-vite-svelte-markdown>"},{"id":"/2021/12/21/better-discord","metadata":{"permalink":"/blog/2021/12/21/better-discord","source":"@site/blog/2021/12/21/better-discord.md","title":"Better Discord","description":"\u8b93 Discord \u66f4\u7f8e\u66f4\u597d\u7528\u7684\u5de5\u5177","date":"2021-12-21T00:00:00.000Z","formattedDate":"2021\u5e7412\u670821\u65e5","tags":[{"label":"discord","permalink":"/blog/tags/discord"},{"label":"plugin","permalink":"/blog/tags/plugin"},{"label":"theme","permalink":"/blog/tags/theme"}],"readingTime":2.795,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://vdustr.dev/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"Example for Svelte + TS + Vite + MDsveX","permalink":"/blog/2021/12/25/example-vite-svelte-markdown"},"nextItem":{"title":"Podman in WSL2","permalink":"/blog/2021/09/20/podman-in-wsl2"}},"content":":::info\\n\u9019\u7bc7\u540c\u6642\u767c\u4f48\u5728 [\u8523\u5e79\u8a71\u8edf\u9ad4](https://ganhuaking.tw/blog/2021/12/11/better-discord/)\\n:::\\n\\nBetter Discord \u662f\u500b\u80fd\u8b93 Discord \u9ad8\u5ea6\u5ba2\u88fd\u7684\u597d\u7528\u5de5\u5177\uff0c \u6709\u5ee3\u5927\u7684\u793e\u7fa4\u7dad\u8b77\u8a31\u591a\u597d\u7528\u7684 Plugins \u548c Themes\uff0c \u4f7f\u7528\u8005\u53ef\u4ee5\u4f9d\u7167\u81ea\u5df1\u7684\u559c\u597d\u642d\u914d\u8abf\u6574\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u5b89\u88dd\\n\\n\u9996\u5148\u5148\u5230 [Better Discord](https://betterdiscord.app/) \u5b98\u7db2 \u4e0b\u8f09\u4e26\u5b89\u88dd\uff0c\\n\\n## \u5b89\u88dd PluginRepo\\n\\n\u5b89\u88dd\u5b8c\u6210\u5f8c Discord \u4e0d\u9700\u8981\u91cd\u555f\uff0c \u9ede\u64ca ![User Settings](https://ganhuaking.tw/asset-2021/12-11-better-discord/userSettings.png) \u5f8c\u7406\u8ad6\u4e0a\u6703\u51fa\u73fe\u4e00\u500b Better Discord \u7684\u5340\u584a\uff1a\\n\\n![Plugins](https://ganhuaking.tw/asset-2021/12-11-better-discord/plugins.png)\\n\\n\u63a5\u8457\u9032\u5165 Plugins \u9801\u9762\u4e26\u9ede\u64ca [Open Plugins Folder](https://ganhuaking.tw/asset-2021/12-11-better-discord/openPluginsFolder.png) \uff0c\u5230 [\u9019\u88e1](https://betterdiscord.app/plugins?filter=repo) \u4e0b\u8f09 [PluginRepo](https://betterdiscord.app/plugin/PluginRepo) \u7684 `.js` \u6a94\u5f8c\u653e\u9032\u525b\u525b\u7684\u76ee\u9304 ( [ThemeRepo](https://betterdiscord.app/plugin/ThemeRepo) \u4e5f\u53ef\u4ee5\u9806\u4fbf )\uff0c \u7136\u5f8c\u56de\u5230 Plugins \u9801\u9762\u5c07 PluginRepo \u555f\u7528\uff1a\\n\\n![Enable PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/enablePluginRepo.png)\\n\\n\u63a5\u8457\u6703\u770b\u5230\u8a2d\u5b9a\u9801\u9762\u5de6\u5074\u9078\u55ae\u591a\u4e86 PluginRepo \u7684\u9805\u76ee\uff1a\\n\\n![PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/pluginRepo.png)\\n\\n\u9032\u5165\u4e4b\u5f8c\u5c31\u53ef\u4ee5\u9078\u64c7\u81ea\u5df1\u559c\u6b61\u7684 plugins \u5b89\u88dd\u5566\uff5e ( Theme \u540c\u7406\u4f46\u662f\u662f\u4f7f\u7528 ThemeRepo)\u3002 \u4f9d\u7167 Downloads \u6216 Stars \u6392\u5e8f\u524d\u5e7e\u500b\u90fd\u6eff\u597d\u7528\u7684\uff0c \u7576\u7136\u4e5f\u6709\u53ef\u80fd\u4e5f\u6709\u907a\u73e0\u7b49\u5f85\u5927\u5bb6\u53bb\u767c\u6398\u4e86\uff01\\n\\n## Custom CSS\\n\\n\u53e6\u5916\u9664\u4e86\u5957\u7528 Theme \u4e5f\u53ef\u4ee5\u5728 Custom CSS \u7684\u5730\u65b9\u8abf\u6574\u4ecb\u9762\uff0c \u4f8b\u5982\u53ef\u4ee5\u50cf\u9019\u6a23\u8abf\u6574\u5b57\u578b\uff1a\\n\\n```css\\n:root {\\n  --font-primary: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-display: \'Victor Mono\', \'jf-openhuninn-1.1\', Ginto, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-code: \'Victor Mono\', \'jf-openhuninn-1.1\', Consolas, \'Andale Mono WT\',\\n    \'Andale Mono\', \'Lucida Console\', \'Lucida Sans Typewriter\',\\n    \'DejaVu Sans Mono\', \'Bitstream Vera Sans Mono\', \'Liberation Mono\',\\n    \'Nimbus Mono L\', Monaco, \'Courier New\', Courier, monospace;\\n  --font-headline: \'Victor Mono\', \'jf-openhuninn-1.1\', Ginto Nord, Ginto, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-korean: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Apple SD Gothic Neo\', \'NanumBarunGothic\', \'\ub9d1\uc740 \uace0\ub515\', \'Malgun Gothic\',\\n    Gulim, \uad74\ub9bc, Dotum, \ub3cb\uc6c0, \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  --font-japanese: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney, Hiragino Sans, \'\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3\',\\n    \'Hiragino Kaku Gothic ProN\', \'\u30e1\u30a4\u30ea\u30aa\', Meiryo, Osaka, \'MS PGothic\', \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-chinese-simplified: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Microsoft YaHei New\', \u5fae\u8f6f\u96c5\u9ed1, \'Microsoft Yahei\', \'Microsoft JhengHei\',\\n    \u5b8b\u4f53, SimSun, \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  --font-chinese-traditional: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Microsoft JhengHei\', \u5fae\u8edf\u6b63\u9ed1\u9ad4, \'Microsoft JhengHei UI\',\\n    \'Microsoft YaHei\', \u5fae\u8edf\u96c5\u9ed1, \u5b8b\u4f53, SimSun, \'Helvetica Neue\', Helvetica,\\n    Arial, sans-serif;\\n}\\n```\\n\\n\u64c5\u9577\u524d\u7aef\u7684\u670b\u53cb\u5011\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5728 Discord \u6309 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> ( Mac OS \u5247\u662f <kbd>Command\u2318</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> ) \u4f86\u770b style\u3002\\n\\n\u6700\u5f8c\u7d50\u679c\u5c31\u80fd\u8b8a\u50cf\u9019\u6a23\u5b50\u5566~\\n\\n![final](https://ganhuaking.tw/asset-2021/12-11-better-discord/final.png)\\n\\n- Theme - [DarkMatter](https://betterdiscord.app/theme/Dark%20Matter)\\n- Fonts\\n  - [Victor Mono](https://rubjo.github.io/victor-mono/)\\n  - [open \u7c89\u5713](https://justfont.com/huninn/)\\n\\n\u6211\u81ea\u5df1\u6709\u9047\u5230 Enable Transparency \u958b\u555f\u6642 [PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/) \u7684 [FancyZones](https://docs.microsoft.com/en-us/windows/powertoys/fancyzones) \u7121\u6cd5\u6b63\u78ba\u5b9a\u4f4d\u7684\u5c0f\u554f\u984c\uff0c \u95dc\u6389\u5c31\u6c92\u4e8b\u4e86\u3002\\n\\n\u53e6\u5916 Better Discord \u4e5f\u6709\u4ed6\u5011\u81ea\u5df1\u7684 [Discord Server](https://discord.com/invite/0Tmfo5ZbORCRqbAd) \u3002"},{"id":"/2021/09/20/podman-in-wsl2","metadata":{"permalink":"/blog/2021/09/20/podman-in-wsl2","source":"@site/blog/2021/09/20/podman-in-wsl2.md","title":"Podman in WSL2","description":"3 \u5206\u9418 \u8ddf podman \u7576\u597d\u670b\u53cb","date":"2021-09-20T00:00:00.000Z","formattedDate":"2021\u5e749\u670820\u65e5","tags":[{"label":"podman","permalink":"/blog/tags/podman"},{"label":"podman-compose","permalink":"/blog/tags/podman-compose"},{"label":"container","permalink":"/blog/tags/container"},{"label":"wsl2","permalink":"/blog/tags/wsl-2"},{"label":"windows","permalink":"/blog/tags/windows"},{"label":"fish","permalink":"/blog/tags/fish"}],"readingTime":0.765,"truncated":true,"authors":[{"name":"ViPro"}],"prevItem":{"title":"Better Discord","permalink":"/blog/2021/12/21/better-discord"},"nextItem":{"title":"Migrate to Docusaurus v2","permalink":"/blog/2021/04/01/move-to-docusaurus"}},"content":"3 \u5206\u9418 \u8ddf podman \u7576\u597d\u670b\u53cb\\n\\n\x3c!-- truncate --\x3e\\n\\n## Install WSL2\\n\\n\ud83d\udc49 [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)\\n\\n## Install Ubuntu (Optional)\\n\\n\ud83d\udc49 [Get Ubuntu - Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6)\\n\\n## Install podman\\n\\n\ud83d\udc49 [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)\\n\\n## Install podman-compose\\n\\nInstall python3 and pip:\\n\\n```bash\\nsudo apt-get -y install python3 python3-venv python3-pip\\npip3 install podman-compose\\n```\\n\\nNotice that you have to add `~/.local/bin` to `PATH`\\n\\n### Integrate podman-compose and fish\\n\\nInstall the latest fish shell for [`fish_add_path`](https://fishshell.com/docs/current/cmds/fish_add_path.html) if your fish is < `3.3.0`:\\n\\n```bash\\n# Check version\\n$ fish -v\\nfish, version 3.3.1\\n\\n$ sudo apt-add-repository ppa:fish-shell/release-3\\n$ sudo apt-get update\\n$ sudo apt-get install fish\\n```\\n\\nCheck the [official document](https://fishshell.com/) if you use another distribution.\\n\\nAdd into `~/.config/fish/config.fish`:\\n\\n```bash\\nfish_add_path ~/.local/bin\\n```\\n\\n## Reference\\n\\n- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)\\n- [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)"},{"id":"/2021/04/01/move-to-docusaurus","metadata":{"permalink":"/blog/2021/04/01/move-to-docusaurus","source":"@site/blog/2021/04/01/move-to-docusaurus.md","title":"Migrate to Docusaurus v2","description":"This is my first post on Docusaurus 2.","date":"2021-04-01T00:00:00.000Z","formattedDate":"2021\u5e744\u67081\u65e5","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.145,"truncated":true,"authors":[{"name":"ViPro"}],"prevItem":{"title":"Podman in WSL2","permalink":"/blog/2021/09/20/podman-in-wsl2"}},"content":"I migrated my site to Docusaurus v2.\\n\\n\x3c!--truncate--\x3e\\n\\n\u525b\u597d\u4eca\u5929\u611a\u4eba\u7bc0\u3002\u4e4b\u5f8c\u6703\u958b\u59cb\u5728\u9019\u908a\u5beb\u958b\u767c\u7d00\u9304\u5427\uff01"}]}')}}]);