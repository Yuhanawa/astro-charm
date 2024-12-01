import { defineConfig } from "astro/config";
import Charm from "charm";

import pageInsight from "astro-page-insight";

import icon from "astro-icon";

export default defineConfig({
  prefetch: true,

  integrations: [
    Charm({
      config: {
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
    icon(),
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
