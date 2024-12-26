# Astro Charm

screenshot 2024-12-04
![screenshot-2024-12-04](docs/screenshot-2024-12-04.png "screenshot-2024-12-04")

[Live Demo](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)

Note: The image on the right in the `Live Demo` is not part of the Charm theme

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

## Features
- Built with Astro v5
- Desktop and Mobile support
- High PageSpeed score
- Category and Tag page
- Dark mode
- Code Block
- Search
- Google Analytics
- Sitemap
- RSS
- Custom

## TODO

- [ ] customize side
- [ ] comments
- [ ] reading time
