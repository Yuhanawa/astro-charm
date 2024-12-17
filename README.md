# Astro Charm

A astro theme use [`Astro Theme Provider`](https://github.com/astrolicious/astro-theme-provider)

## WIP

![screenshot-2024-12-04](docs/screenshot-2024-12-04.png "screenshot-2024-12-04")

[Live Demo](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis/https-astro-charm-vercel-app/5i3rnbmbpd)


## Install

1. Create an empty Astro project(if has, skip):

```bash
pnpm create astro@latest my-website --template minimal -y
```

2. Add the theme to your project:

<!-- ```bash
pnpm astro add astro-charm
``` -->

```bash
pnpm add astro-charm
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
    }),
  ],
});
```

<details>
  <summary>Other way(WIP, not recommend)</summary>

edit your `astro.config.ts`

```ts
import { defineConfig } from "astro/config";
import astroCharm from "astro-charm";

export default defineConfig({
  integrations: [astroCharm()],
});
```

and run

```bash
pnpm create astro-theme@latest init astro-charm
```

</details>

4. Enjoy it!

## TODO

- [ ] upgrade to Astro v5
- [ ] guide docs
- [x] code copy button
- [x] better code block
- [x] youtube and bilibili video component
- [x] search
- [x] category and tag page
- [ ] init command
- [x] live demo
- [ ] customize side
- [x] dark mode
- [ ] comments
- [ ] sitemap
- [ ] analytics
  - [x] now can use custom script instead temporary
- [x] support mobile

# very thankful

The source of inspiration is chanshiyu's blog.

When creating this theme, many other excellent projects were referenced.
