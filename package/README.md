# My Astro Theme!

This is my awesome Astro theme created using [`astro-theme-provider`](https://github.com/astrolicious/astro-theme-provider)!

### Install

1. Create an empty Astro project:

```sh
pnpm create astro@latest my-website --template minimal -y
```

2. Add the theme to your project:

```sh
pnpm astro add charm
```

### Configure

```ts
import { defineConfig } from "astro/config";
import myTheme from "charm";

export default defineConfig({
  integrations: [
    myTheme({
      config: {
        title: "Hey!",
        description: "This is my website!",
      },
    }),
  ],
});

```
