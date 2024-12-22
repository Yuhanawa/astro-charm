# Astro Charm

![screenshot-2024-12-04](docs/screenshot-2024-12-04.png "screenshot-2024-12-04")

[Live Demo](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis/https-astro-charm-vercel-app/5i3rnbmbpd)

## How to use

```bash
pnpm create astro-theme@latest with-theme astro-charm
```

and into the project

```bash
pnpm add @iconify-json/simple-icons
pnpm add @iconify-json/solar
```

Enjoy it!

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

</details>

## Config

see: <https://github.com/Yuhanawa/astro-charm/blob/main/package/index.ts#L55-L117>

## TODO

- [x] upgrade to Astro v5
- [ ] guide docs
- [x] code copy button
- [x] better code block
- [x] youtube and bilibili video component
- [x] search
- [x] category and tag page
- [x] init command
- [x] live demo
- [ ] customize side
- [x] dark mode
- [ ] comments
- [x] sitemap
- [x] google analytics
- [x] custom script
- [ ] custom content in post page
- [ ] custom background image
- [x] support mobile
- [ ] RSS
- [ ] image in home page
- [ ] reading time