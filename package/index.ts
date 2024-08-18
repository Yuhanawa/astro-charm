import defineTheme from "astro-theme-provider";
import { z } from "astro/zod";

export default defineTheme({
  name: "charm",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    side: z.object({
      title: z.string(),
      sub: z.string(),
      bio: z.string(),
      nav: z
        .array(
          z.object({
            title: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        )
        .nonempty()
        .min(1)
        .default([
          {
            title: "Home",
            link: "/",
            icon: "home",
          },
          {
            title: "Projects",
            link: "/projects",
            icon: "project",
          },
          {
            title: "About",
            link: "/about",
            icon: "user",
          },
        ]),
      footer: z
        .array(
          z.object({
            title: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        )
        .nonempty()
        .min(1)
        .default([
          {
            title: "Twitter",
            link: "https://x.com/",
            icon: "twitter",
          },
          {
            title: "GitHub",
            link: "https://github.com/",
            icon: "github",
          },
        ]),
    }),
  }),
  imports: {
    "components/sides": "components/sides/**.astro",
  },
});
