"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/01/27/html-to-svelte","metadata":{"permalink":"/blog/2022/01/27/html-to-svelte","source":"@site/blog/2022/01/27/html-to-svelte.md","title":"HTML To Svelte","description":"\u5728\u5148\u524d\u5beb\u7684 Example for Svelte + TS + Vite + MDsveX \u6642\uff0c\u5b58\u5728\u4f7f\u7528 shiki \u5c07 code \u8f49\u70ba html \uff0c\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528\u7684\u9700\u6c42\u2026\u2026","date":"2022-01-27T00:00:00.000Z","formattedDate":"2022\u5e741\u670827\u65e5","tags":[{"label":"svelte","permalink":"/blog/tags/svelte"},{"label":"shiki","permalink":"/blog/tags/shiki"},{"label":"html","permalink":"/blog/tags/html"},{"label":"escape","permalink":"/blog/tags/escape"}],"readingTime":1.59,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"nextItem":{"title":"\u65b0 logo","permalink":"/blog/2022/01/13/new-logo"}},"content":"![HTML To Svelte](https://vdustr.github.io/asset-2022/01-27-html-to-svelte/og.png)\\n\\n\u5728\u5148\u524d\u5beb\u7684 [Example for Svelte + TS + Vite + MDsveX](../../../2021/12/25/example-vite-svelte-markdown.md) \u6642\uff0c\u5b58\u5728\u4f7f\u7528 [shiki](https://github.com/shikijs/shiki) \u5c07 code \u8f49\u70ba html \uff0c [\u518d\u5c07 html \u4f5c\u70ba svelte component \u4f7f\u7528](https://github.com/VdustR/example-vite-svelte-markdown/blob/2f218cd/vite.config.js#L14) \u7684\u9700\u6c42\u2026\u2026\\n\\n\x3c!--truncate--\x3e\\n\\n\u7531\u65bc shiki \u7522\u51fa\u7684\u7d50\u679c\u5c31\u662f\u4e00\u5806 `<span />` \u81ea\u7136\u6211\u4e0d\u592a\u9700\u8981\u64d4\u5fc3 html attributes \uff0c \u7576\u6642\u7684\u60f3\u6cd5\u662f\u53ea\u8981\u5c07 html tags \u7684 innerText \u90fd\u5f37\u5236\u8f49\u6210 svelte \u7684\u5b57\u4e32\u5c31\u597d\u4e86\uff0c \u65bc\u662f\u4f7f\u7528\u4e86\u9019\u6a23\u7684\u65b9\u6cd5\uff0c \u8b93\u4ed6\u4f7f\u7528 svelte element \uff1a\\n\\n```ts\\n/**\\n * Prevent removing leading and tailing spaces.\\n * Transform `<div> foo </div>` into `<div>{\' foo \'}</div>`\\n * @param {string} html\\n */\\nfunction saveSvelteHtmlText(html) {\\n  return html.replace(/>( *[^<\\\\n\\\\r]+ *)</g, (match) => {\\n    const text = match.substring(1, match.length - 1);\\n    /**\\n     * We don\'t need escape text here but we have to transform it into a svelte\\n     * string.\\n     *\\n     * For example:\\n     *   <div> &lt;div&gt; </div>\\n     *   should be transformed to\\n     *   <div>{\\" <div> \\"}</div>\\n     */\\n    const unescapeText = unescape(text);\\n    return \'>{\\"\' + unescapeText.replace(/\\"/g, \'\\\\\\\\\\"\') + \'\\"}<\';\\n  });\\n}\\n```\\n\\n\u672c\u4f86\u9084\u89ba\u5f97\u56e0\u70ba\u662f\u76f4\u63a5\u4f7f\u7528\u6b63\u898f\u800c\u4e0d\u662f\u4f7f\u7528 parser \u4e00\u76f4\u611f\u5230\u5f88\u4e0d\u5b89\uff0c\u9084\u5beb\u4e86\u4e00\u5806\u8a3b\u89e3\u8aaa\u660e\uff0c\u5f8c\u4f86\u60f3\u60f3\u65e2\u7136\u90fd\u662f html \u4e86\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5\u7528 svelte \u539f\u751f\u7684 [`{@html ...}`](https://svelte.dev/docs#template-syntax-html) \u5c31\u597d\u4e86\uff1f\\n\\n```ts\\n/**\\n * @param {string} html\\n */\\nfunction htmlToSvelte(html) {\\n  return `{@html \\\\`${html.replace(/`/g, \\"\\\\\\\\`\\")}\\\\`}`;\\n}\\n```\\n\\n\u540c\u7406 React \u4e5f\u53ef\u4ee5\u4f7f\u7528 [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) \uff0c Vue \u5247\u4f7f\u7528 [`v-html`](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)\u3002\\n\\n\u539f\u4f86\u7684 repo \u4e5f\u4fee\u6b63\u4e86\uff0c [commit \u8acb\u770b\u9019\u88e1](https://github.com/VdustR/example-vite-svelte-markdown/commit/dad32b4d2034e12d996f2f3a5ddcbb7019b352c1)\u3002\\n\\n\u771f\u7684\u662f\u6709\u5920 87 \ud83e\udd2a"},{"id":"/2022/01/13/new-logo","metadata":{"permalink":"/blog/2022/01/13/new-logo","source":"@site/blog/2022/01/13/new-logo.md","title":"\u65b0 logo","description":"\u7e7c 2019/01 \u4e4b\u5f8c, \u4e45\u9055\u5730\u66f4\u65b0\u4e86 Logo","date":"2022-01-13T00:00:00.000Z","formattedDate":"2022\u5e741\u670813\u65e5","tags":[{"label":"logo","permalink":"/blog/tags/logo"}],"readingTime":0.305,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"HTML To Svelte","permalink":"/blog/2022/01/27/html-to-svelte"},"nextItem":{"title":"Pocket","permalink":"/blog/2022/01/08/pocket"}},"content":"![Round Icon](https://vdustr.github.io/brand/2022-01/round.png)\\n\\n\u7e7c 2019/01 \u4e4b\u5f8c, \u4e45\u9055\u5730\u66f4\u65b0\u4e86 Logo\\n\\n\x3c!--truncate--\x3e\\n\\n## Tech\\n\\n- Editors:\\n  - [LibreSprite](https://github.com/LibreSprite/LibreSprite)\\n  - [Gravit](https://designer.gravit.io)\\n- Palette: db32\\n- Font: [ark-pixel-12px-latin](https://github.com/TakWolf/ark-pixel-font)\\n- Converters:\\n  - [ConvertICO.com](https://convertico.com)\\n  - [text-to-svg](https://github.com/shrhdk/text-to-svg)\\n  - [pixel-perfect-svg](https://github.com/kagof/pixel-perfect-svg)\\n\\n\u53e6\u5916 Docusaurus Palette \u4f7f\u7528 [Swatcher](https://swatcherapp.com):\\n\\n- h dif: -7\\n- s dif: -10\\n- b dif: 6\\n\\n## Source\\n\\n<https://github.com/VdustR/brand/tree/main/2022-01>\\n\\n## License\\n\\nCC0"},{"id":"/2022/01/08/pocket","metadata":{"permalink":"/blog/2022/01/08/pocket","source":"@site/blog/2022/01/08/pocket.md","title":"Pocket","description":"\ud83d\udc40 Stay awhile and listen..","date":"2022-01-08T00:00:00.000Z","formattedDate":"2022\u5e741\u67088\u65e5","tags":[{"label":"pocket","permalink":"/blog/tags/pocket"},{"label":"star","permalink":"/blog/tags/star"},{"label":"repository","permalink":"/blog/tags/repository"},{"label":"github","permalink":"/blog/tags/github"},{"label":"bookmarks","permalink":"/blog/tags/bookmarks"},{"label":"svelte","permalink":"/blog/tags/svelte"}],"readingTime":0.275,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"\u65b0 logo","permalink":"/blog/2022/01/13/new-logo"},"nextItem":{"title":"A TypeScript Fullstack GraphQL CodeGen Example","permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen"}},"content":"[![pocket](https://vdustr.github.io/asset-2022/01-08-pocket/og.png)](https://vdustr.github.io/pocket)\\n\\n\u6700\u8fd1\u958b\u59cb\u5617\u8a66\u7528 [Svelte](https://svelte.dev/) \u5beb\u4e00\u4e9b\u6771\u897f, \u505a\u4e86\u9019\u500b\u9801\u9762, \u4e3b\u8981\u662f\u653e\u4e00\u4e9b \ud83d\udd16 \u66f8\u7c64\u548c [\u81ea\u5df1 \u2b50 \u7684 Repositories](https://github.com/VdustR?tab=stars) \uff0c \u65b9\u4fbf\u641c\u5c0b\u7528\u3002\\n\\n\u66f8\u7c64\u7684\u90e8\u5206\u6703\u9678\u7e8c\u6574\u7406\u88dc\u4e0a\u3002\\n\\n\ud83d\udc49 <https://vdustr.github.io/pocket>"},{"id":"/2022/01/04/example-graphql-fullstack-codegen","metadata":{"permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen","source":"@site/blog/2022/01/04/example-graphql-fullstack-codegen.md","title":"A TypeScript Fullstack GraphQL CodeGen Example","description":"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.","date":"2022-01-04T00:00:00.000Z","formattedDate":"2022\u5e741\u67084\u65e5","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"graphql","permalink":"/blog/tags/graphql"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"apollo","permalink":"/blog/tags/apollo"},{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"visual-studio-code","permalink":"/blog/tags/visual-studio-code"},{"label":"workspace","permalink":"/blog/tags/workspace"},{"label":"monorepo","permalink":"/blog/tags/monorepo"},{"label":"axios","permalink":"/blog/tags/axios"},{"label":"gql","permalink":"/blog/tags/gql"},{"label":"fullstack","permalink":"/blog/tags/fullstack"},{"label":"codegen","permalink":"/blog/tags/codegen"},{"label":"pnpm","permalink":"/blog/tags/pnpm"},{"label":"apollo-server","permalink":"/blog/tags/apollo-server"},{"label":"fastify","permalink":"/blog/tags/fastify"},{"label":"ts-node","permalink":"/blog/tags/ts-node"},{"label":"graphql-code-generator","permalink":"/blog/tags/graphql-code-generator"},{"label":"ts-node-dev","permalink":"/blog/tags/ts-node-dev"},{"label":"react-query","permalink":"/blog/tags/react-query"}],"readingTime":0.28,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"Pocket","permalink":"/blog/2022/01/08/pocket"},"nextItem":{"title":"Example for Svelte + TS + Vite + MDsveX","permalink":"/blog/2021/12/25/example-vite-svelte-markdown"}},"content":"\u6700\u8fd1\u8a66\u4e86\u4e00\u4e0b GraphQL CodeGen \u7522\u751f react-query \u548c resolver type, node server \u53ef\u4ee5\u4fdd\u8b49\u56de\u61c9\u7684\u578b\u614b\u6b63\u78ba, react-query functions \u66f4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528, \u771f\u3109 4 \u8d85\u65b9\u4fbf\u7684 R~\\n\\n\u53ef\u4ee5\u53c3\u8003\u9019\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b: <https://github.com/VdustR/example-graphql-fullstack-codegen>"},{"id":"/2021/12/25/example-vite-svelte-markdown","metadata":{"permalink":"/blog/2021/12/25/example-vite-svelte-markdown","source":"@site/blog/2021/12/25/example-vite-svelte-markdown.md","title":"Example for Svelte + TS + Vite + MDsveX","description":"This is an example for importing Markdown files as Svelte components.","date":"2021-12-25T00:00:00.000Z","formattedDate":"2021\u5e7412\u670825\u65e5","tags":[{"label":"markdown","permalink":"/blog/tags/markdown"},{"label":"demo","permalink":"/blog/tags/demo"},{"label":"example","permalink":"/blog/tags/example"},{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"svelte","permalink":"/blog/tags/svelte"},{"label":"highlight","permalink":"/blog/tags/highlight"},{"label":"pnpm","permalink":"/blog/tags/pnpm"},{"label":"md","permalink":"/blog/tags/md"},{"label":"sveltejs","permalink":"/blog/tags/sveltejs"},{"label":"vite","permalink":"/blog/tags/vite"},{"label":"shiki","permalink":"/blog/tags/shiki"},{"label":"mdsvex","permalink":"/blog/tags/mdsvex"},{"label":"vitejs","permalink":"/blog/tags/vitejs"},{"label":"shikijs","permalink":"/blog/tags/shikijs"},{"label":"html-escaper","permalink":"/blog/tags/html-escaper"}],"readingTime":0.345,"truncated":false,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"A TypeScript Fullstack GraphQL CodeGen Example","permalink":"/blog/2022/01/04/example-graphql-fullstack-codegen"},"nextItem":{"title":"Better Discord","permalink":"/blog/2021/12/21/better-discord"}},"content":"\u60f3\u5728 svelte \u4f7f\u7528 markdown, \u770b\u5230\u5df2\u7d93\u6709\u5927\u5927\u958b\u767c\u4e86\u500b\u5957\u4ef6\u53eb [MDsveX](https://github.com/pngwn/mdsvex), \u7136\u800c\u5728\u4f7f\u7528\u7684\u6642\u5019\u4ecd\u7136\u8e29\u5230\u4e86\u4e00\u4e9b\u554f\u984c, \u5beb\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\u7d00\u9304\u4e00\u4e0b, \u5927\u90e8\u5206\u7684\u554f\u984c\u548c\u89e3\u6c7a\u65b9\u6cd5\u90fd\u5728 vite.config.js \u7684\u8a3b\u89e3\u88e1:\\n\\n\ud83d\udc49 <https://github.com/VdustR/example-vite-svelte-markdown>"},{"id":"/2021/12/21/better-discord","metadata":{"permalink":"/blog/2021/12/21/better-discord","source":"@site/blog/2021/12/21/better-discord.md","title":"Better Discord","description":"\u8b93 Discord \u66f4\u7f8e\u66f4\u597d\u7528\u7684\u5de5\u5177","date":"2021-12-21T00:00:00.000Z","formattedDate":"2021\u5e7412\u670821\u65e5","tags":[{"label":"discord","permalink":"/blog/tags/discord"},{"label":"plugin","permalink":"/blog/tags/plugin"},{"label":"theme","permalink":"/blog/tags/theme"}],"readingTime":2.795,"truncated":true,"authors":[{"name":"ViPro","title":"A lazy FE Developer \ud83d\udc08\u200d\u2b1b","url":"https://VdustR.github.io/","imageURL":"https://github.com/VdustR.png","key":"ViPro"}],"prevItem":{"title":"Example for Svelte + TS + Vite + MDsveX","permalink":"/blog/2021/12/25/example-vite-svelte-markdown"},"nextItem":{"title":"Podman in WSL2","permalink":"/blog/2021/09/20/podman-in-wsl2"}},"content":":::info\\n\u9019\u7bc7\u540c\u6642\u767c\u4f48\u5728 [\u8523\u5e79\u8a71\u8edf\u9ad4](https://ganhuaking.tw/blog/2021/12/11/better-discord/)\\n:::\\n\\nBetter Discord \u662f\u500b\u80fd\u8b93 Discord \u9ad8\u5ea6\u5ba2\u88fd\u7684\u597d\u7528\u5de5\u5177\uff0c \u6709\u5ee3\u5927\u7684\u793e\u7fa4\u7dad\u8b77\u8a31\u591a\u597d\u7528\u7684 Plugins \u548c Themes\uff0c \u4f7f\u7528\u8005\u53ef\u4ee5\u4f9d\u7167\u81ea\u5df1\u7684\u559c\u597d\u642d\u914d\u8abf\u6574\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u5b89\u88dd\\n\\n\u9996\u5148\u5148\u5230 [Better Discord](https://betterdiscord.app/) \u5b98\u7db2 \u4e0b\u8f09\u4e26\u5b89\u88dd\uff0c\\n\\n## \u5b89\u88dd PluginRepo\\n\\n\u5b89\u88dd\u5b8c\u6210\u5f8c Discord \u4e0d\u9700\u8981\u91cd\u555f\uff0c \u9ede\u64ca ![User Settings](https://ganhuaking.tw/asset-2021/12-11-better-discord/userSettings.png) \u5f8c\u7406\u8ad6\u4e0a\u6703\u51fa\u73fe\u4e00\u500b Better Discord \u7684\u5340\u584a\uff1a\\n\\n![Plugins](https://ganhuaking.tw/asset-2021/12-11-better-discord/plugins.png)\\n\\n\u63a5\u8457\u9032\u5165 Plugins \u9801\u9762\u4e26\u9ede\u64ca [Open Plugins Folder](https://ganhuaking.tw/asset-2021/12-11-better-discord/openPluginsFolder.png) \uff0c\u5230 [\u9019\u88e1](https://betterdiscord.app/plugins?filter=repo) \u4e0b\u8f09 [PluginRepo](https://betterdiscord.app/plugin/PluginRepo) \u7684 `.js` \u6a94\u5f8c\u653e\u9032\u525b\u525b\u7684\u76ee\u9304 ( [ThemeRepo](https://betterdiscord.app/plugin/ThemeRepo) \u4e5f\u53ef\u4ee5\u9806\u4fbf )\uff0c \u7136\u5f8c\u56de\u5230 Plugins \u9801\u9762\u5c07 PluginRepo \u555f\u7528\uff1a\\n\\n![Enable PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/enablePluginRepo.png)\\n\\n\u63a5\u8457\u6703\u770b\u5230\u8a2d\u5b9a\u9801\u9762\u5de6\u5074\u9078\u55ae\u591a\u4e86 PluginRepo \u7684\u9805\u76ee\uff1a\\n\\n![PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/pluginRepo.png)\\n\\n\u9032\u5165\u4e4b\u5f8c\u5c31\u53ef\u4ee5\u9078\u64c7\u81ea\u5df1\u559c\u6b61\u7684 plugins \u5b89\u88dd\u5566\uff5e ( Theme \u540c\u7406\u4f46\u662f\u662f\u4f7f\u7528 ThemeRepo)\u3002 \u4f9d\u7167 Downloads \u6216 Stars \u6392\u5e8f\u524d\u5e7e\u500b\u90fd\u6eff\u597d\u7528\u7684\uff0c \u7576\u7136\u4e5f\u6709\u53ef\u80fd\u4e5f\u6709\u907a\u73e0\u7b49\u5f85\u5927\u5bb6\u53bb\u767c\u6398\u4e86\uff01\\n\\n## Custom CSS\\n\\n\u53e6\u5916\u9664\u4e86\u5957\u7528 Theme \u4e5f\u53ef\u4ee5\u5728 Custom CSS \u7684\u5730\u65b9\u8abf\u6574\u4ecb\u9762\uff0c \u4f8b\u5982\u53ef\u4ee5\u50cf\u9019\u6a23\u8abf\u6574\u5b57\u578b\uff1a\\n\\n```css\\n:root {\\n  --font-primary: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-display: \'Victor Mono\', \'jf-openhuninn-1.1\', Ginto, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-code: \'Victor Mono\', \'jf-openhuninn-1.1\', Consolas, \'Andale Mono WT\',\\n    \'Andale Mono\', \'Lucida Console\', \'Lucida Sans Typewriter\',\\n    \'DejaVu Sans Mono\', \'Bitstream Vera Sans Mono\', \'Liberation Mono\',\\n    \'Nimbus Mono L\', Monaco, \'Courier New\', Courier, monospace;\\n  --font-headline: \'Victor Mono\', \'jf-openhuninn-1.1\', Ginto Nord, Ginto, \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-korean: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Apple SD Gothic Neo\', \'NanumBarunGothic\', \'\ub9d1\uc740 \uace0\ub515\', \'Malgun Gothic\',\\n    Gulim, \uad74\ub9bc, Dotum, \ub3cb\uc6c0, \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  --font-japanese: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney, Hiragino Sans, \'\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3\',\\n    \'Hiragino Kaku Gothic ProN\', \'\u30e1\u30a4\u30ea\u30aa\', Meiryo, Osaka, \'MS PGothic\', \'Helvetica Neue\',\\n    Helvetica, Arial, sans-serif;\\n  --font-chinese-simplified: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Microsoft YaHei New\', \u5fae\u8f6f\u96c5\u9ed1, \'Microsoft Yahei\', \'Microsoft JhengHei\',\\n    \u5b8b\u4f53, SimSun, \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  --font-chinese-traditional: \'Victor Mono\', \'jf-openhuninn-1.1\', Whitney,\\n    \'Microsoft JhengHei\', \u5fae\u8edf\u6b63\u9ed1\u9ad4, \'Microsoft JhengHei UI\',\\n    \'Microsoft YaHei\', \u5fae\u8edf\u96c5\u9ed1, \u5b8b\u4f53, SimSun, \'Helvetica Neue\', Helvetica,\\n    Arial, sans-serif;\\n}\\n```\\n\\n\u64c5\u9577\u524d\u7aef\u7684\u670b\u53cb\u5011\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5728 Discord \u6309 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> ( Mac OS \u5247\u662f <kbd>Command\u2318</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> ) \u4f86\u770b style\u3002\\n\\n\u6700\u5f8c\u7d50\u679c\u5c31\u80fd\u8b8a\u50cf\u9019\u6a23\u5b50\u5566~\\n\\n![final](https://ganhuaking.tw/asset-2021/12-11-better-discord/final.png)\\n\\n- Theme - [DarkMatter](https://betterdiscord.app/theme/Dark%20Matter)\\n- Fonts\\n  - [Victor Mono](https://rubjo.github.io/victor-mono/)\\n  - [open \u7c89\u5713](https://justfont.com/huninn/)\\n\\n\u6211\u81ea\u5df1\u6709\u9047\u5230 Enable Transparency \u958b\u555f\u6642 [PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/) \u7684 [FancyZones](https://docs.microsoft.com/en-us/windows/powertoys/fancyzones) \u7121\u6cd5\u6b63\u78ba\u5b9a\u4f4d\u7684\u5c0f\u554f\u984c\uff0c \u95dc\u6389\u5c31\u6c92\u4e8b\u4e86\u3002\\n\\n\u53e6\u5916 Better Discord \u4e5f\u6709\u4ed6\u5011\u81ea\u5df1\u7684 [Discord Server](https://discord.com/invite/0Tmfo5ZbORCRqbAd) \u3002"},{"id":"/2021/09/20/podman-in-wsl2","metadata":{"permalink":"/blog/2021/09/20/podman-in-wsl2","source":"@site/blog/2021/09/20/podman-in-wsl2.md","title":"Podman in WSL2","description":"3 \u5206\u9418 \u8ddf podman \u7576\u597d\u670b\u53cb","date":"2021-09-20T00:00:00.000Z","formattedDate":"2021\u5e749\u670820\u65e5","tags":[{"label":"podman","permalink":"/blog/tags/podman"},{"label":"podman-compose","permalink":"/blog/tags/podman-compose"},{"label":"container","permalink":"/blog/tags/container"},{"label":"wsl2","permalink":"/blog/tags/wsl-2"},{"label":"windows","permalink":"/blog/tags/windows"},{"label":"fish","permalink":"/blog/tags/fish"}],"readingTime":0.765,"truncated":true,"authors":[{"name":"ViPro"}],"prevItem":{"title":"Better Discord","permalink":"/blog/2021/12/21/better-discord"},"nextItem":{"title":"Migrate to Docusaurus v2","permalink":"/blog/2021/04/01/move-to-docusaurus"}},"content":"3 \u5206\u9418 \u8ddf podman \u7576\u597d\u670b\u53cb\\n\\n\x3c!-- truncate --\x3e\\n\\n## Install WSL2\\n\\n\ud83d\udc49 [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)\\n\\n## Install Ubuntu (Optional)\\n\\n\ud83d\udc49 [Get Ubuntu - Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6)\\n\\n## Install podman\\n\\n\ud83d\udc49 [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)\\n\\n## Install podman-compose\\n\\nInstall python3 and pip:\\n\\n```bash\\nsudo apt-get -y install python3 python3-venv python3-pip\\npip3 install podman-compose\\n```\\n\\nNotice that you have to add `~/.local/bin` to `PATH`\\n\\n### Integrate podman-compose and fish\\n\\nInstall the latest fish shell for [`fish_add_path`](https://fishshell.com/docs/current/cmds/fish_add_path.html) if your fish is < `3.3.0`:\\n\\n```bash\\n# Check version\\n$ fish -v\\nfish, version 3.3.1\\n\\n$ sudo apt-add-repository ppa:fish-shell/release-3\\n$ sudo apt-get update\\n$ sudo apt-get install fish\\n```\\n\\nCheck the [official document](https://fishshell.com/) if you use another distribution.\\n\\nAdd into `~/.config/fish/config.fish`:\\n\\n```bash\\nfish_add_path ~/.local/bin\\n```\\n\\n## Reference\\n\\n- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)\\n- [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)"},{"id":"/2021/04/01/move-to-docusaurus","metadata":{"permalink":"/blog/2021/04/01/move-to-docusaurus","source":"@site/blog/2021/04/01/move-to-docusaurus.md","title":"Migrate to Docusaurus v2","description":"This is my first post on Docusaurus 2.","date":"2021-04-01T00:00:00.000Z","formattedDate":"2021\u5e744\u67081\u65e5","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.145,"truncated":true,"authors":[{"name":"ViPro"}],"prevItem":{"title":"Podman in WSL2","permalink":"/blog/2021/09/20/podman-in-wsl2"}},"content":"I migrated my site to Docusaurus v2.\\n\\n\x3c!--truncate--\x3e\\n\\n\u525b\u597d\u4eca\u5929\u611a\u4eba\u7bc0\u3002\u4e4b\u5f8c\u6703\u958b\u59cb\u5728\u9019\u908a\u5beb\u958b\u767c\u7d00\u9304\u5427\uff01"}]}')}}]);