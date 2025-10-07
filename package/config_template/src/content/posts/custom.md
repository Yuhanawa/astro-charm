---
title: How to customize the theme
description: customize the CSS and components
published: 2024-12-28
updated: 2025-02-02
tags: [Example]
category: customize
image: "../../assets/customize_theme.svg"
---

## CSS

Just add `src/styles/custom-charm.css`

In this live demo, the image on the right was added by `src/styles/custom-charm.css`

Here is the `src/styles/custom-charm.css` for the live demo:
```css
@media (width >= 52rem) {
  html.charm body {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      /* image from https://civitai.com/images/4176963 */
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

## Components

### Add custom components

You can add custom components by overriding `custom`, 
These components are empty by default, so you can safely override them.

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

It will be added to the end of `<head>`,
you can use it to add custom scripts or meta tags.

#### CustomPostHeaderTop, CustomPostHeaderBottom

Display above and below the title

#### CustomPostFooterTop, CustomPostFooterBottom

Display above and below the License

:::note
If you do not specify `licenseId` in `config`, the License area will not be displayed.
:::

### Override components

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