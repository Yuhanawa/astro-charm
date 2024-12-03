import { defineConfig } from "astro/config";
import Charm from "charm";

import pageInsight from "astro-page-insight";

export default defineConfig({
  prefetch: true,

  integrations: [
    Charm({
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
      overrides: {},
    }),
    pageInsight(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
        },
      },
    },
  },
});
