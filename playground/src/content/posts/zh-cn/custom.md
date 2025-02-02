---
title: 如何个性化主题
description: 自定义 CSS 和组件（Components）
published: 2024-12-28
updated: 2025-02-02
tags: [Example]
category: customize
image: "../../../assets/customize_theme.svg"
hidden: true
---

## CSS

只需添加 `src/styles/custom-charm.css` 文件即可

在 live demo 中，右侧图片正是通过 `src/styles/custom-charm.css` 添加的

以下是 live demo 中使用的 `src/styles/custom-charm.css`：

```css
@media (width >= 52rem) {
  html.charm body {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      /* 图片来自 https://civitai.com/images/4176963 */
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

## 组件（Components）

### 添加自定义组件

通过覆盖 `custom` 配置项可以添加自定义组件，
这些组件默认都是空的，因此可以放心地进行覆盖。

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

该组件会被插添加到 `<head>` 末尾，
可用于添加自定义脚本或 meta 标签。

#### CustomPostHeaderTop / CustomPostHeaderBottom

在文章标题的上方/下方显示

#### CustomPostFooterTop / CustomPostFooterBottom

在版权声明的上方/下方显示

:::note
如果在 `config` 中未指定 `licenseId`，版权声明区域将不会显示。
:::

### 覆盖内置组件

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