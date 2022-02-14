---
description: 在先前寫的 Example for Svelte + TS + Vite + MDsveX 時，存在使用 shiki 將 code 轉為 html ，再將 html 作為 svelte component 使用的需求……
image: https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png
authors: [ViPro]
tags:
  - svelte
  - shiki
  - html
  - escape
---

# HTML To Svelte

![HTML To Svelte](https://vdustr.dev/asset-2022/01-27-html-to-svelte/og.png)

在先前寫的 [Example for Svelte + TS + Vite + MDsveX](../../../2021/12/25/example-vite-svelte-markdown.md) 時，存在使用 [shiki](https://github.com/shikijs/shiki) 將 code 轉為 html ， [再將 html 作為 svelte component 使用](https://github.com/VdustR/example-vite-svelte-markdown/blob/2f218cd/vite.config.js#L14) 的需求……

<!--truncate-->

由於 shiki 產出的結果就是一堆 `<span />` 自然我不太需要擔心 html attributes ，當時的想法是只要將 html tags 的 innerText 都強制轉成 svelte 的字串就好了，於是使用了這樣的方法，讓他使用 svelte element ：

```ts
/**
 * Prevent removing leading and tailing spaces.
 * Transform `<div> foo </div>` into `<div>{' foo '}</div>`
 * @param {string} html
 */
function saveSvelteHtmlText(html) {
  return html.replace(/>( *[^<\n\r]+ *)</g, (match) => {
    const text = match.substring(1, match.length - 1);
    /**
     * We don't need escape text here but we have to transform it into a svelte
     * string.
     *
     * For example:
     *   <div> &lt;div&gt; </div>
     *   should be transformed to
     *   <div>{" <div> "}</div>
     */
    const unescapeText = unescape(text);
    return '>{"' + unescapeText.replace(/"/g, '\\"') + '"}<';
  });
}
```

本來還覺得因為是直接使用正規而不是使用 parser 一直感到很不安，還寫了一堆註解說明，後來想想既然都是 html 了為什麼不直接用 svelte 原生的 [`{@html ...}`](https://svelte.dev/docs#template-syntax-html) 就好了？

```ts
/**
 * @param {string} html
 */
function htmlToSvelte(html) {
  return `{@html \`${html.replace(/([`$])/g, "\\$1")}\`}`;
}
```

同理 React 也可以使用 [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) ， Vue 則使用 [`v-html`](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

原來的 repo 也修正了， [commit 請看這裡](https://github.com/VdustR/example-vite-svelte-markdown/commit/c790109)。

真的是有夠 87 🤪
