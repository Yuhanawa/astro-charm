# Astro Charm

Beautiful and easy-to-use blog theme

[more information](https://github.com/Yuhanawa/astro-charm/)

screenshot-2024-12-27

<div style="display:flex; justify-content:center; gap:10px;">
  <img title="screenshot-2024-12-27-light" src="https://github.com/Yuhanawa/astro-charm/raw/main/docs/screenshot-2024-12-27-light.png" alt="screenshot-2024-12-27-light">
  <img title="screenshot-2024-12-27-dark" src="https://github.com/Yuhanawa/astro-charm/raw/main/docs/screenshot-2024-12-27-dark.png" alt="screenshot-2024-12-27-dark">
</div>

[Live Demo](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)

Note: The image on the right in the `Live Demo` is not part of the Charm theme

## Features

- Built with Astro v5
- Desktop and Mobile support
- High PageSpeed score
  - 100! [Report from Dec 26, 2024](https://pagespeed.web.dev/analysis/https-astro-charm-vercel-app/6oyuwuk8kl)
  - view new [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)
- Category and Tag page
- Dark mode
- Code Block
- Search
- Comments (giscus)
- Google Analytics
- Sitemap
- RSS
- Custom

## How to use

1. Run the following command to create a new project with `astro-charm` theme.

```bash
pnpm create astro-theme@latest with-theme astro-charm
```

2. Into your project and Install `@iconify-json/simple-icons` and `@iconify-json/solar`.

```bash
pnpm add @iconify-json/simple-icons
pnpm add @iconify-json/solar
```

3. Modify config and enjoy it!

Note: you need to add `site` to `astro.config.ts` file.

To learn more, see: [Config](#config)

<details>
  <summary>Install to existing project</summary>

1. Install `astro-charm`, `@iconify-json/simple-icons` and `@iconify-json/solar` to your project.

```bash
pnpm astro add astro-charm
pnpm add @iconify-json/simple-icons
pnpm add @iconify-json/solar
```

2. Modify `astro.config.ts` file, you can use following command to modify it.

```bash
pnpm create astro-theme@latest init astro-charm
```

Or you can modify it manually.

```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  prefetch: true,
  site: "<your-site-url>",

  integrations: [
    charm({
      config: {
        lang: "en",
        title: "Charm Theme",
        description: "A beautiful blog theme for Astro",
        side: {
          title: "Charm Theme",
          sub: "A blog theme for Astro",
          bio: "Cupidatat ex id eiusmod aute do labore ea minim eu fugiat Lorem fugiat adipisicing.",
        },
        // more config
      },
    }),
  ],
});
```

</details>

[more information](https://github.com/Yuhanawa/astro-charm/)
