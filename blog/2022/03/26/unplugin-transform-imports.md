---
description: A imports transform unplugin.
image: https://vdustr.dev/asset-2022/03-26-unplugin-transform-imports/og.png
authors: [ViPro]
tags:
  - esbuild
  - icon
  - import
  - lodash
  - rollup
  - transform
  - tree-shaking
  - unplugin
  - vite
  - webpack
---

# unplugin-transform-imports

A imports transform unplugin.

![unplugin-transform-imports banner](https://vdustr.dev/asset-2022/03-26-unplugin-transform-imports/og.png)

<!--truncate-->

## Slow Startup in Development Environment

之前有發生 [create-react-app](https://github.com/facebook/create-react-app) 啟動時間超長的狀況，經好友 [yezhi780625](https://github.com/yezhi780625) 調查在使用 [`mdi-material-ui`](https://github.com/TeamWertarbyte/mdi-material-ui) 的時候雖然使用 ESM 可以 tree shaking，但其實 webpack 在這之前還是會花大量時間載入和 bundle。 後來椰子也找到了 [MUI 的官網也有描述到相同的問題](https://mui.com/guides/minimizing-bundle-size/#development-environment) :

> Development bundles can contain the full library which can lead to slower startup times. This is especially noticeable if you import from @mui/icons-material. Startup times can be approximately 6x slower than without named imports from the top-level API.

而 MUI 官方也提供了兩種解法，一種就是將：

```ts
import { Button, TextField } from "@mui/material";
```

改寫為：

```ts
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
```

另一個方法則是使用 [`babel-plugin-import`](https://github.com/umijs/babel-plugin-import) 。

## Tree Shaking

除了啟動緩慢的問題之外，另一個常見問題則是像某些 libraries 並沒有提供 [ESM](https://nodejs.org/api/esm.html) 因而無法 tree shaking。

所謂的 Tree shaking 可以簡單理解成在 build distribution 時只會加入有引用到的部分，其餘的不會加入 bundle 裡。

> Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

想了解更多可以參考這裡:

- [mdn web docs - Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
- [webpack - Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [rollup.js - Tree-Shaking](https://rollupjs.org/guide/en/#tree-shaking)

舉例來說，像這樣的引用方式是會將 lodash 整包載進來的：

```ts
import { merge } from "lodash";
```

有下列幾種解決方式：

- 改用 [`lodash-es`](https://www.npmjs.com/package/lodash-es) 。
- 使用 [`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash) 。
- 使用 [`babel-plugin-import`](https://github.com/umijs/babel-plugin-import) 。
- 改變引用方式：

  ```ts
  import merge from "lodash/merge";
  ```

  你甚至可以在 [eslint 禁止直接引用 `"lodash"`](https://eslint.org/docs/rules/no-restricted-imports) ，而當有設置上列的方法時也可以套用相反的設定。

  但這種方式不適合像 [phosphor-react](https://github.com/phosphor-icons/phosphor-react) 這種只有 `main.js` 有 `type.d.ts` 的 library，直接引用 `phosphor-react/dist/` 內的檔案會取不到型別。如果您使用 [vite](https://github.com/vitejs/vite) 的話倒是可以直接引用 `phosphor-react/src/` 下的檔案，和 webpack 不同 vite 預設並沒有將 `node_modules/` exclude 因此可以直接引用裡面的 `.tsx` 。

## unplugin-transform-imports

參考了 [`babel-plugin-import`](https://github.com/umijs/babel-plugin-import) 的做法我實作了一個 `unplugin-transform-imports` 。

因為基於 [unplugin](https://github.com/unjs/unplugin) 所以理論上可以很容易地使用在基於 [Vite](https://vitejs.dev/), [Rollup](https://rollupjs.org/), [Webpack](https://webpack.js.org/), [esbuild](https://esbuild.github.io/) 的環境。另外 `transformImports()` function 能獨立被使用，並支援 typescript 和 ESM。

另外也提供了幾個範例：

- [craco](https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-craco)
- [vite-react](https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite)
- [vite-vue](https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite-vue)
- [vite-svelte](https://github.com/VdustR/unplugin-transform-imports/tree/d6cc11a/packages/demo-vite-svelte)

其中 craco 的範例下 `pnpm start` 的時間就能從 22427 ms 優化到 3313 ms (AMD Ryzen 9 5900HS) ； Distribution 的體積也從 1.6M 減少到 980K 。此外像上述的 [phosphor-react](https://github.com/phosphor-icons/phosphor-react) 也能在 IDE 正常取得 type 卻能有更短的 startup time 。

以下是 `unplugin-transform-imports` 的連結：

- NPM: <https://www.npmjs.com/package/unplugin-transform-imports>
- GitHub: <https://github.com/VdustR/unplugin-transform-imports>
