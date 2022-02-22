---
description: List item keys for transition components.
image: https://vdustr.dev/asset-2022/02-22-likftc/ogimage.png
authors: [ViPro]
tags:
  - animate
  - css
  - flip
  - javascript
  - likftc
  - move
  - spring
  - transition
  - typescript
  - vue
  - svelte
  - react
---

# likftc

寫了一個小 library: [likftc](https://vdustr.dev/likftc/)

List item keys for transition components.

支援 react, vue, svelte

[![likftc](https://vdustr.dev/asset-2022/02-22-likftc/ogimage.png)](https://vdustr.dev/likftc/)

<!--truncate-->

在玩 Svelte 的時候發現了一個現象， Svelte 的 [`animate:flip`](https://svelte.dev/docs#template-syntax-element-directives-animate-fn) 會和 [`transition:fn`](https://svelte.dev/docs#template-syntax-element-directives-transition-fn) 在 list item 快速變動時會發生衝突，造成某些 item 卡在不正確的地方。原因是在 component 的控制下， list item 是使用 key 來判斷是否使用同一個 DOM，無論是 framework 或 compiler 本身沒有將這件事情處理好，就有可能在 leaving (svelte 叫 outro) 時馬上又 render 相同 key 的 list item 時， component 又馬上拿同一個 dom 開始執行 entering (svelte 叫 intro) 的動畫，當這個動畫是使用 js 處理時就會打架。

範例看這裡: <https://vdustr.dev/likftc/svelte>

這個衝突只有在使用 js spring function 的時候發生，所以像 [Vue demo](https://vdustr.dev/likftc/vue) 中使用 css 動畫頂多也是直接瞬移而已，並不會出現特別奇怪的畫面，使用 [`likftc`](https://github.com/VdustR/likftc) 的話也只是已經進入 leaving 的 component 直接 fade out 而新的就直接 render 新的 list item ，我認為沒有像 [Svelte](https://vdustr.dev/likftc/svelte) 那麼必要。

範例看這裡: <https://vdustr.dev/likftc/vue>

React 的部分我使用 [React FLIP Toolkit](https://github.com/aholachek/react-flip-toolkit) 。情況比較特殊，他本身其實只有處理 FLIP 的部分，並沒有處理 entering 和 leaving，但他有提供 `onAppear` 和 `onExit` 等 event props 可以讓你在相對應的時間點對 element 執行其他行為。若使用 js 控制就會遇到和 svelte 類似的問題，這個問題甚至在 [官方範例](https://codesandbox.io/s/4q7qpkn8q0) 都可以快速切換重現 (先按 exitAndFlipThenEnter 然後在動畫結束之前馬上按 exitThenFlipThenEnter) 。 但如果只是像 [React demo](https://vdustr.dev/likftc/react/) 在 onAppear 和 onExit 直接使用 css (這裡使用 [Animate.css](https://animate.style/)) 而不使用 js 來控制的話感覺就比較沒差。

範例看這裡: <https://vdustr.dev/likftc/react>

如果還是想使用 React FLIP Toolkit spring function 的 entering 和 leaving 可以參考 [這裡](https://github.com/VdustR/likftc/blob/dd396932913177e64a7914a18bb159ee44885d14/packages/doc/src/lib/demo/react-flip-toolkit/With.tsx)。
