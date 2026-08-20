---
description: 自訂 term.ptt.cc 的主題。
image: https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/og.png
authors: [ViPro]
tags:
  - css
  - theme
  - color
  - palette
  - customization
  - pixel
  - retro
  - greasemonkey
  - tampermonkey
  - ptt
---

# PTT Custom Theme 🎨

自訂 [term.ptt.cc](https://term.ptt.cc) 的主題。

![term-ptt-custom-theme](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/og.png)

## 簡介

這篇文可以協助您自訂 [term.ptt.cc](https://term.ptt.cc) 主題。

<!--truncate-->

## 教學

請先安裝 [Tampermonkey](https://www.tampermonkey.net/) 或 [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) 。

以 Chrome Tampermonkey 為例，打開 Dashboard :

![Open Dashboard](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/steps/dashboard.png)

新增腳本:

![Create A Script](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/steps/create.png)

將 [教學](https://github.com/VdustR/term-ptt-custom-theme#usage) 的內容複製、貼上、存檔即可，打開新的 tab 就會套用新主題囉～色碼可以自行替換。

另外也提供了 [Goph Themes](https://github.com/VdustR/term-ptt-custom-theme#gogh) 的使用方式，同樣複製、貼上、存檔即可。 Theme Name 可以到 [這裡](https://mayccoll.github.io/Gogh/) 找喜歡的替換。

記得確認腳本是否啟用。

![Check active](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/steps/active.png)

另外我自己做了一個 [term-ptt-retro-theme](https://github.com/VdustR/term-ptt-retro-theme) ，馬上就用上昨天 po 的 [gruvbox.css](https://github.com/VdustR/gruvbox.css) 色票和 [Fusion Pixel Font](https://github.com/TakWolf/fusion-pixel-font) 像素字型。使用方式同樣直接複製、貼上、存檔即可。使用點陣字型須另外在右鍵設定選單中手動修改字型:

```
Fusion Pixel PTT,MingLiu,SymMingLiu,monospace
```

以下是成品：

![term-ptt-retro-theme](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/retro.png)

另外如果不喜歡預設字型的話，也可以使用 [jf open 粉圓](https://github.com/justfont/open-huninn-font) (需另外自行安裝，安裝新的字型之後需要重新啟動瀏覽器才能使用該字型) :

```
SymMingLiu,"jf-openhuninn-1.1",MingLiu,monospace
```

大部分中文字型只要放在 `SymMingLiu` 這個字型後面就可以使用了，缺點是英文、數字、符號等就不是同一個字型。

Goph Graph Theme + [jf open 粉圓](https://github.com/justfont/open-huninn-font) 範例:

![term-ptt-retro-theme](https://vdustr.github.io/asset-2022/04-08-term-ptt-custom-theme/graph.png)

如果您剛好有 GitHub 帳號也喜歡這個專案的話歡迎幫我按個星星～ 感謝 >"<

- [term-ptt-custom-theme](https://github.com/VdustR/term-ptt-custom-theme)
- [term-ptt-retro-theme](https://github.com/VdustR/term-ptt-retro-theme)

有任何疑問或是建議也歡迎使用任何可以聯絡得到我的方式一起交流～ 發 issue 也 ok ～

## Alternative

- [Petingo/PTT-Theme](https://github.com/Petingo/PTT-Theme)
