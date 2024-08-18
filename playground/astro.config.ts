import { defineConfig } from "astro/config";
import Charm from "charm";

import pageInsight from "astro-page-insight";

export default defineConfig({
	integrations: [
		Charm({
			config: {
				title: "My Awesome Theme",
				description: "My awesome theme is currently under construction!",
				side:{
					title: "Charm Theme",
					sub: "A theme for Astro",
					bio: "Cupidatat ex id eiusmod aute do labore ea minim eu fugiat Lorem fugiat adipisicing.",
				}
			},
			pages: {

			},
			overrides: {
				
			}
		}),
		pageInsight(),
	],
});
