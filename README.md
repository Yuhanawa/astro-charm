# Astro Charm
A astro theme use [`Astro Theme Provider`](https://github.com/astrolicious/astro-theme-provider)

## ‼️ WORK IN PROGRESS ‼️
## ‼️ WORK IN PROGRESS ‼️
## ‼️ WORK IN PROGRESS ‼️

![screenshot-2024-12-04](docs/screenshot-2024-12-04.png "screenshot-2024-12-04")

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

## TODO

- [ ] upgrade to Astro v5
- [ ] guide docs
- [x] code copy button
- [x] better code block
- [x] youtube and bilibili video component
- [ ] search
- [ ] category and tag page
- [ ] init command
- [ ] live demo
- [ ] customize side
- [ ] dark mode
- [ ] comments
- [ ] sitemap
- [ ] analytics
  - [x] now can use custom script instead temporary

# very thankful

The source of inspiration is chanshiyu's blog, but now it cannot access.

When creating this theme, many other excellent projects were referenced.