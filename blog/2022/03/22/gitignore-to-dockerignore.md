---
description: Transform .gitignore to .dockerignore.
image: https://vdustr.github.io/asset-2022/03-22-gitignore-to-dockerignore/og.png
authors: [ViPro]
tags:
  - git
  - gitignore
  - docker
  - dockerignore
  - container
---

# g2d

Transform .gitignore to .dockerignore.

![g2d banner](https://vdustr.github.io/asset-2022/03-22-gitignore-to-dockerignore/og.png)

<!--truncate-->

`.gitignore` 和 `.dockerignore` 在路徑上其實是有一些差異的，如下列表：

| `.gitignore` | `.dockerignore` |
| ------------ | --------------- |
| `!/foo`      | `!foo`          |
| `!foo`       | `!**/foo`       |
| `/foo`       | `foo`           |
| `foo`        | `**/foo`        |

因此我基本上不會直接把 `.gitignore` 當作 `.dockerignore` 來使用，雖然好像還有 [其他差異](https://zzz.buzz/2018/05/23/differences-of-rules-between-gitignore-and-dockerignore/) ，但至少路徑是相對容易解決而且明顯的。在這之前其實就有人寫了一個 [`gitignore-to-dockerignore`](https://www.npmjs.com/package/gitignore-to-dockerignore)，但由於判斷換行的方式導致它無法保留 `CR` (Carriage Return aka `\r`)，這在 [`macOS.gitignore`](https://github.com/github/gitignore/blob/2bb963b/Global/macOS.gitignore#L7) 裡有使用到：

```bash title=".gitignore"
# Icon must end with two \r
Icon^M
```

這會導致一般的 `Icon` 路徑也被 ignored，因此無論是 `.gitignore` 或 `.dockerignore` 都應將其保留。

大概在 2021 年 9 月的時候寫了一個 [deno 版本的 g2d](https://github.com/VdustR/g2d) 並提供 binaries 和 container image ，現在則將它移植到 node 並額外提供 [online 版](https://vdustr.github.io/g2d.js/online/)，可以直接透過線上編輯或上傳 `.gitignore` 並預覽、複製、下載 `.dockerignore`。

- 👉 [g2d Official Site](https://vdustr.github.io/g2d.js/)
- 🚀 [g2d Online](https://vdustr.github.io/g2d.js/online/)
- 🦕 [deno g2d](https://vdustr.github.io/g2d.js/deno/)
