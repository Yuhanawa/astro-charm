import { defineConfig } from "astro/config";
import charm from "astro-charm";

import pageInsight from "astro-page-insight";
import playformCompress from "@playform/compress";
import vercel from "@astrojs/vercel";

export default defineConfig({
  prefetch: true,
  site: "https://astro-charm.vercel.app/",

  output: "static",
  adapter: vercel(),

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
        licenseId: "CC0-1.0",
        giscus: {
          repo: "Yuhanawa/astro-charm",
          repoId: "R_kgDOMk98JQ",
          category: "Blog Post Comments",
          categoryId: "DIC_kwDOMk98Jc4CljB_",
        },
      },
      pages: {},
      overrides: {
        components: {
          // override components
          // ShootingStar: "./src/components/ShootingStar.astro",
        },
        custom: {
          // it will be added to the end of `<head>`.
          // CustomScriptComponent: "./src/components/CustomScriptComponent.astro",
        },
      },
    }),
    pageInsight(),
    playformCompress(),
  ],
});
