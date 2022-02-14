---
description: 臨時 fork 了 一個 repo 解決 rollup-plugin-typescript2 + @betit/rollup-plugin-rename-extensions 無法並存 tslib.js 和 tslib.cjs 的問題。
image: https://vdustr.dev/asset-2022/02-08-forked-rollup-plugin-rename-extensions/ogimage.png
authors: [ViPro]
tags:
  - rollup
  - npm
  - library
  - typescript
  - esm
  - cjs
---

# Forked rollup-plugin-rename-extensions

臨時 fork 了 一個 repo 解決 rollup-plugin-typescript2 + @betit/rollup-plugin-rename-extensions 無法並存 tslib.js 和 tslib.cjs 的問題。

![Forked rollup-plugin-rename-extensions](https://vdustr.dev/asset-2022/02-08-forked-rollup-plugin-rename-extensions/ogimage.png)

<!--truncate-->

在打包 library 時我並不喜歡使用像 [tsdx](https://github.com/jaredpalmer/tsdx) 等 bundle 的方式，而是比較喜歡 [preserveModules](https://rollupjs.org/guide/en/#outputpreservemodules) 保留原始結構，使用上能有更大的彈性。

目前為止 [`rollup-plugin-typescript2`](https://github.com/ezolenko/rollup-plugin-typescript2) 是我認為打包效果較好的工具，可以保留原始結構，也能生成結構一致的 `.d.ts`，並且對 [tslib](https://github.com/Microsoft/tslib) 進行 tree shaking 並放到 `_virtual/_tslib.js`。

基於某些工具對 esm 支援仍不是很完美，我想同時打包 .js (esm) 和 .cjs 時，找到了個不錯的 [@betit/rollup-plugin-rename-extensions](https://github.com/GiG/rollup-plugin-rename-extensions) 可以在 rollup build 時同時對副檔名進行調整，遺憾的是其依賴的 [@rollup/pluginutils createFilter](https://github.com/rollup/plugins/blob/6cd15b9/packages/pluginutils/src/createFilter.ts#L48) 並不支援 `\0tslib.js` 這種 `facadeModuleId` ，或是說根本是直接將之排除在外了，因此我 fork 了 [@vdustr/rollup-plugin-rename-extensions](https://github.com/vdustr/rollup-plugin-rename-extensions) 並加了一個 match option 來直接比對原始的 `facadeModuleId` 。

實際使用狀況的話可以參考[這裡](https://github.com/VdustR/likftc/blob/59b66c2/script/rollup.config.js#L43)。

最後，我認為這只是暫時性的解法，目前只是先讓他能達到預期的效果而已，應該有更好更簡單的做法，歡迎大家來 [Discord 群](http://ganhuaking.tw/) 一起交流。
