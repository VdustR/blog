---
description: 雖然有點晚了，但最近才比較有空稍微試玩了一下，寫了兩個小 repo ，有些小小心得在這裡紀錄一下。
image: https://vdustr.dev/asset-2022/02-25-svelte-first-impression/og.png
authors: [ViPro]
tags:
  - review
  - svelte
---

# Svelte 3 個人初體驗心得

雖然有點晚了，但最近才比較有空稍微試玩了一下，寫了兩個小 repo ，有些小小心得紀錄在這裡。

![Svelte First Impression](https://vdustr.dev/asset-2022/02-25-svelte-first-impression/og.png)

<!--truncate-->

## 優點

為什麼會想嘗試 Svelte 3?

### 好懂好上手

基本上 [官方教學](https://svelte.dev/tutorial) 跑過一次就差不多了，互動式寫得令人非常容易理解運作方式。

另外作者 [Rich Harris](https://twitter.com/Rich_Harris) 的 [Rethinking reactivity](https://youtu.be/AdNJ3fydeao) 分享設計理念的影片也非常值得一看。當中我很喜歡這句話：

![Frameworks are not tools for organising your code, They are tools for organising your mind.](https://vdustr.dev/asset-2022/02-25-svelte-first-impression/framework.png)

我個人認為 React hooks, Vue composition API, Svelte 3 在寫法上有一定的相似之處，我不清楚這種開發方式是否有什麼具體的專有名詞。

我自己在寫 React 的時候有一些特別在意的事:

- Render 的時候會一直重複做多餘的事情，這點在 [Rich Harris](https://twitter.com/Rich_Harris) 的 [Rethinking reactivity](https://youtu.be/AdNJ3fydeao) 裡也有提到。這個問題 React 未來有機會透過 sformer 被解決 ([黃玄 - React without memo](https://youtu.be/lGEMwh32soc)) 。
- 依賴 [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/0dedfcc/packages/eslint-plugin-react-hooks) ，寫起來相對囉嗦。像是 `useEffect` 如果是要監聽特定幾個值是否改變，使用 usePrevious compare 效能就差，寫起來也醜；使用 `eslint-disable-next-line` 維護上就會比較麻煩，可能需求上有調整就會漏東漏西而產生 side effect ，而我也很討厭 disable eslint rules。

如果要我推坑的話我會如何簡介 Svelte 3?

- 直接改值就是改 state，使用起來非常直覺，本身像是在寫 js 但也完全不是在寫 js 。可以說 svelte 本身就是一種獨樹一格卻又像 js 的語言，透過 Svelte 這個 compiler 編譯成真正的 js 給瀏覽器執行。[官方自已也是說 svelte 是 compiler](https://svelte.dev/blog/virtual-dom-is-pure-overhead#where-does-the-overhead-come-from)：

  > This is almost exactly the update code that Svelte generates. Unlike traditional UI frameworks, Svelte is a compiler that knows at build time how things could change in your app, rather than waiting to do the work at run time.

- `$:` 大概就像無腦版的 useMemo / computed + useEffect / watch
- 寫起來很爽
- 寫起來很爽
- 寫起來很爽

### 內建 store

- [`svelte/store`](https://svelte.dev/docs#run-time-svelte-store) 簡單好用。在 `.svelte` 裡也可以直接透過 [`$` prefix](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values) 的方式取值，非常直覺。
- `derived()` 其實就像 `$:`。

### 內建 spring animate /

內建 [FLIP](https://aerotwist.com/blog/flip-your-animations/) move [animate](https://svelte.dev/docs#run-time-svelte-animate) 和 [transition](https://svelte.dev/docs#run-time-svelte-transition)。

使用的時候要注意目前 list item 有些小問題，詳細情況和 demo 可以參考我寫的 [likftc](../22/likftc.md) ，不確定官方未來會不會做其他修正。

## Start kit

- SPA: [Vite](https://github.com/vitejs/vite)
- SSR / SSG: [SvelteKit](https://github.com/sveltejs/kit)
- Markdown: [MDsveX](https://github.com/pngwn/MDsveX)

## Issues

說了這麼多優點，其實也是有遇到一些問題的。期待未來都可以解決，畢竟 Svelte 開發體驗非常優越！

### Svelte Kit 未內建 sitemap

可以用: [bartholomej/svelte-sitemap](https://github.com/bartholomej/svelte-sitemap)

使用方式很簡單在使用 Svelte Kit 的 repository 的跟目錄下直接下指令就可以了:

```bash
npx svelte-sitemap --domain https://example.com
```

### Generating `.d.ts`

要包 library 時會用到。 Svelte compiler 本身無法 generate `.d.ts` 。

官方的 language-tools 其實有內建 [emitDts](https://github.com/sveltejs/language-tools/blob/6ef2442/packages/svelte2tsx/src/emitDts.ts) 但還沒有寫成文件。使用方式也很簡單：

```ts
import { emitDts } from "svelte2tsx";

const require = createRequire(import.meta.url);

await emitDts({
  declarationDir: "/your/dist",
  svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
  libRoot: "/your/src",
});
```

目前無法直接整合 rollup，必須另外寫個 node script 執行。

### 尚不支援 Generic Parameter Defaults

目前 [Generics 仍在 RFC](https://github.com/sveltejs/rfcs/pull/38) 。

```ts
type T = $$Generic<boolean>; // extends boolean
```

效果類似:

```ts
function MyFunctionComponent<T extends boolean>() {
  // ...
}

class MyClassComponent<T extends boolean> {
  // ...
}
```

尚不支援 [generic parameter defaults](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults) , 我也把這個問題反應給該 PR 的作者了([TypeScript: Explicitly Typing Props/Slots/Events + Generics #38](https://github.com/sveltejs/rfcs/pull/38#issuecomment-1039834806))。

### Component 可能不容易包得很彈性

Element Directives 無法輕易直接轉移到 Component (會直接被 svelte 擋下來)。如果要讓 component 彈性很大的話不能像 react 那麼好處理。

`$$restProps` / `$$props` 也不能像 react 可以那麼容易透過取得 `ComponentProps<>` 來繼承 children 的 prop types 。

### Custom hooks

因為 Svelte compiler 並不支援 `.js` / `.ts`，所以 Svelte 的功能 (主要是 [`$:`](https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive) 和 [`$ prefix`](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values)) 並無法像 react 或 vue 那樣輕易無痛地將部分功能區塊輕易地抽出做成 custom hooks 。目前看到比較建議的做法 ([How to Implement Custom React Hooks in Svelte](https://gradientdescent.de/custom-hooks/#Mypreferredsolution)) 而我也認同的是使用 `let:` directive，如此一來就可以避免 `.js` 或 `.ts` 無法使用 Svelte 特殊語法的問題，但結構上其實還是不像 react / vue custom hooks 那麼漂亮，太複雜的情境可能會出現包很多層的狀況。

Vue 的 Reactivity Transform 因為有 compile `.js` / `.ts` 而且寫法就是原生的 js 所以就不用擔心這個問題，但個人認為 [Retaining Reactivity Across Function Boundaries](https://vuejs.org/guide/extras/reactivity-sform.html#retaining-reactivity-across-function-boundaries) 其實更難維護，所以 Vue 的話我可能會使用一般的 `ref()`， [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) 還是需要觀望一下。

## 個人結論

綜合以上，我自己可能會在小巧、不需要包太多 component 、大多使用 vanilla elements 就能解決的靜態網站可以考慮使用 SvelteKit ；需要複雜功能的 app 應該還是會優先選擇 React 或 Vue ，尤其是拓展性 React 是相對簡單暴力的，但也仍然很期待 Svelte 未來的發展。
