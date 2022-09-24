---
description: 透過 gsvt 懶人工具幫打 major, minor version tags 並發布 GitHub Actions。
image: https://vdustr.dev/asset-2022/09-24-gsvt/gsvt-cover.png
authors: [ViPro]
tags:
  - action
  - ci
  - cli
  - git
  - node
  - semantic
  - semver
  - version
---

# gsvt - Git Semantic Version Tags

> 久違的更新，內容有一部分都是 [GitHub Copilot](https://github.com/features/copilot) 跟 [Google Translate](https://translate.google.com/) 幫我寫的，阿斯~

與 npm 不同，某些服務（例如 GitHub Actions）默認情況下不會使用語義化版本標籤解析版本。 例如，我們可以使用 `npm install package@1` 安裝最新的 `1.x.x` 包，但我們不能使用 `actions/my-action@v1` 做同樣的事情。 我們必須指定確切的版本，例如 `actions/my-action@v1.3.5`。

![gsvt](https://vdustr.dev/asset-2022/09-24-gsvt/gsvt-cover.png)

<!--truncate-->

> We recommend creating releases using semantically versioned tags – for example, `v1.1.3` – and keeping major (`v1`) and minor (`v1.1`) tags current to the latest appropriate commit. For more information, see "[About custom actions](https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" and "[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning). -- [Releasing and maintaining actions - GitHub Docs](<https://docs.github.com/en/actions/creating-actions/releasing-and-maintaining-actions#:~:text=We%20recommend%20creating%20releases%20using%20semantically%20versioned%20tags%20%E2%80%93%20for%20example%2C%20v1.1.3%20%E2%80%93%20and%20keeping%20major%20(v1)%20and%20minor%20(v1.1)%20tags%20current%20to%20the%20latest%20appropriate%20commit.%20For%20more%20information%2C%20see%20%22About%20custom%20actions%22%20and%20%22About%20semantic%20versioning.>)

讓用戶在語義上使用該 GitHub Action 的方法是使用 `v1` 之類的主要版本和 `v1.1` 之類的次要版本創建標籤，但是手動創建這些標籤並不容易，所以我創建了這個工具來簡單地用一個命令解決這個問題。

使用方式很簡單，只要再 GitHub Action repository 下執行以下指令即可:

```sh
npx gsvt
npx gsvt patch
npx gsvt minor
npx gsvt major
npx gsvt v3.4.5
```

如此 `v3.4.5`, `v3.4`, `v3` 就自動打上了。

然後將 tags push 到 GitHub 上:

```sh
git push origin main --tags -f
```

接著到 GitHub 上的 release 頁面，點擊 `Draft a new release`，選擇剛剛打的 tag (`v3.4.5`)，就可以發布 release 了。 之後使用者便能透過 `v3.4.5`, `v3.4`, `v3` 來使用這個 GitHub Action。

⚠️ 注意 `gsvt` 不支援 `v*.*.*` 以外的版本號格式。ㄅ欠

## Links

- Repository: [VdustR/gsvt](https://github.com/VdustR/gsvt)
- npm: [gsvt](https://www.npmjs.com/package/gsvt)
