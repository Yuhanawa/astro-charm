---
title: テーマのカスタマイズ方法
description: CSSとコンポーネントのカスタマイズ
published: 2024-12-28
updated: 2025-02-02
tags: [Example]
category: customize
image: "../../../assets/customize_theme.svg"
hidden: true
---

## CSS

`src/styles/custom-charm.css` ファイルを追加するだけでカスタマイズ可能です

ライブデモで右側に表示されている画像は、`src/styles/custom-charm.css` を使用して追加されています

以下はライブデモで使用されている `src/styles/custom-charm.css` の例です：

```css
@media (width >= 52rem) {
  html.charm body {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      /* 画像出典: https://civitai.com/images/4176963 */
      background-image: url(./../assets/engagekiss.avif);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      z-index: -1;
    }
  }

  html.charm.dark body {
    &::before {
      filter: brightness(0.8);
    }
  }
}
```

## コンポーネント

### カスタムコンポーネントの追加

`custom` 設定を上書きすることでカスタムコンポーネントを追加できます。
これらのコンポーネントはデフォルトで空の状態になっているため、安全に上書きできます。

```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  integrations: [
    charm({
      config: {
        // ...
      },
      overrides: {
        custom: {
          CustomScriptComponent: "./src/components/CustomScriptComponent.astro",
          CustomPostHeaderTop: "./src/components/CustomPostHeaderTop.astro",
          CustomPostHeaderBottom: "./src/components/CustomPostHeaderBottom.astro",
          CustomPostFooterTop: "./src/components/CustomPostFooterTop.astro",
          CustomPostFooterBottom: "./src/components/CustomPostFooterBottom.astro",
        },
      },
    }),
  ],
});
```

#### CustomScriptComponent

`<head>` タグの末尾に追加され、
カスタムスクリプトやmetaタグの追加に使用できます。

#### CustomPostHeaderTop / CustomPostHeaderBottom

記事タイトルの上部/下部に表示されます

#### CustomPostFooterTop / CustomPostFooterBottom

著作権表示の上部/下部に表示されます

:::note
`config` で `licenseId` を指定しない場合、著作権表示領域は表示されません。
:::

### 組み込みコンポーネントの上書き

```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  integrations: [
    charm({
      config: {
        // ...
      },
      overrides: {
        components: {
            ShootingStar: "./src/components/ShootingStar.astro",
            // ...
        }
      },
    }),
  ],
});
```