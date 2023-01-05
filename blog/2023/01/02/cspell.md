---
description: A spell checker for code!
image: https://vdustr.dev/asset-2023/01-02-cspell/ogimage.png
authors: [ViPro]
tags:
  - cspell
  - ci
  - lint
---

# cspell

> A spell checker for code!

![cspell](https://vdustr.dev/asset-2023/01-02-cspell/ogimage.png)

2023 新年快樂！連假來一發～

實在是很討厭在 repository 裡寫錯字， [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) (以下簡稱 [cspell](https://cspell.org/)) 是我在 VSCode 愛用的擴充套件之一。然而一直到這份新工作才將他使用到高度協作的專案裡，也有一些額外的設定及用法上的心得可以分享。

<!--truncate-->

## Repository Configuration

cspell 本身除了 Visual Studio Code extension 外，也有提供 CLI 可以使用，因此建議將設定自 `/.vscode/settings.json` 移至 `/cspell.json`。可以透過 <kbd>ctrl / ⌘</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> 輸入 `cspell` 找到:

> Spell: Create a CSpell Configuration File.

![cspell](https://vdustr.dev/asset-2023/01-02-cspell/create-config.png)

然後再選擇 `cspell.json`.

以下是推薦的設定：

```json
{
  // 包含 dot files
  "enableGlobDot": true,
  // 檢查所有檔案
  "files": ["**"],
  // 要忽略的檔案。以下是範例，您可以自行調整。
  // `.gitignore` 所列的檔案會被自動忽略所以不需要在這裡列出。
  "ignorePaths": ["/.git", "/.gitignore", "/package-lock.json"],
  // 略過路徑匹配 `.gitignore` 所列 globs 的檔案
  "useGitignore": true,
  // 因為合併字像是 `autofix`, `typecheck` 等等很常出現所以建議開啟。
  "allowCompoundWords": true,
  // 對所有檔案類型啟用, 預設如 `.env` 這類的 `ini` 檔不會被檢查
  "enableFiletypes": ["*"],
  // 僅檢查拉丁字。 某些字如 `ภาษาไทย` 基於某種原因會被 cspell 判斷為錯字。
  "includeRegExpList": ["[\u0020-\u024F]"],
  // 被我們承認的額外單字都加在這裡
  "words": []
}
```

設定完之後直接執行以下語法就可以檢查了：

```
npm exec cspell
yarn cspell
pnpm exec cspell
```

## Git hooks

可以搭配 [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged):

```ts
// lint-staged.config.js
const config = {
  "**": "cspell lint --no-must-find-files",
};

module.exports = config;
```

如果您的設定是在其他位置的話請參考上述設定調整， `husky` 及 `lint-staged` 如何設定在這裡就不另外贅述。

## GitHub Actions

我們在公司專案使用這個 action: [streetsidesoftware/cspell-action](https://github.com/streetsidesoftware/cspell-action) 。 感謝 [Joseph](https://github.com/Joseph7451797) 。

## In Document

有些字可以被允許在單一文件中而不需要被全域加入，建議使用以下語法：

```ts
// cSpell:words autofix typecheck
```

如果該字本身不具意義只是單純的 dummy data，可以使用下列語法：

```ts
const directions = "wsad"; // cSpell:disable-line

// cSpell:disable-next-line
const directions = "wsad";

// cSpell:disable
const dummy1 = "qwerqwer";
const dummy2 = "asdfasdf";
const dummy3 = "zxcvzxcv";
// cSpell:enable
```

但也有一些限制，像是 `package.json` 一般情況就無法加入註解。

## Tips

- 集中 dummy data，再由其他檔案 import 使用。或是使用 [Faker](https://fakerjs.dev/), [Chance](https://github.com/chancejs/chancejs) 這類的套件產生資料。但我個人傾向使用前者，諸如測試等情況隨機產生資料會讓測試結果不可預期。
- 為測試 overflow 有時會刻意輸入長字串， `pneumonoultramicroscopicsilicovolcanoconiosis` (火山矽肺症) 在一些情況很好用，但因為很長，同樣建議宣告一次，再由其他檔案 import 使用。

## Reference

- [CSpell](https://cspell.org/)
- [Visual Studio Code - Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
