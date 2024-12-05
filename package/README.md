# Astro Charm
A astro theme use [`Astro Theme Provider`](https://github.com/astrolicious/astro-theme-provider)

[more information](https://github.com/Yuhanawa/astro-charm/)

## ‼️ WORK IN PROGRESS ‼️
## ‼️ WORK IN PROGRESS ‼️
## ‼️ WORK IN PROGRESS ‼️

## Install

1. Create an empty Astro project(if has, skip):

```bash
pnpm create astro@latest my-website --template minimal -y
```

2. Add the theme to your project:

```bash
pnpm astro add astro-charm
```

3. Config in your `astro.config.ts`:

```ts
import { defineConfig } from "astro/config";
import astroCharm from "astro-charm";

export default defineConfig({
    integrations: [
        astroCharm({
            config: {
                title: "Your Blog",
                description: "Your blog description",
                side: {
                    title: "Title",
                    sub: "Sub Title",
                    bio: "Bio",
                },
                // for more config, see `https://github.com/Yuhanawa/astro-charm/blob/main/package/index.ts#L55-L117`
            },
        })
    ],
});
```

4. Enjoy it!

[more information](https://github.com/Yuhanawa/astro-charm/)
