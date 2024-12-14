import { defineConfig } from "astro/config";
import astroCharm from "astro-charm";

import pageInsight from "astro-page-insight";
import playformCompress from "@playform/compress";
import vercel from "@astrojs/vercel";

export default defineConfig({
  prefetch: true,
  site: "https://astro-charm.vercel.app/",

  output: "hybrid",
  adapter: vercel(),

  integrations: [
    astroCharm({
      config: {
        lang: "en",
        title: "My Awesome Theme",
        description: "My awesome theme is currently under construction!",
        side: {
          title: "Charm Theme",
          sub: "A theme for Astro",
          bio: "Cupidatat ex id eiusmod aute do labore ea minim eu fugiat Lorem fugiat adipisicing.",
        },
      },
      pages: {},
      overrides: {
        components: {
          // you can add custom script by overriding CustomScriptComponent,
          // it will be added to the end of `<head>`.
          // example:
          // CustomScriptComponent: "./src/components/CustomScriptComponent.astro",
        },
      },
    }),
    pageInsight(),
    playformCompress(),
  ],
});
