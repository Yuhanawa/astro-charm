import defineTheme from "astro-theme-provider";
import { z } from "astro/zod";

// The Charm theme uses `astro-icon`. For usage details, see: https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#iconify-icons
// By default, the Charm theme uses `@iconify-json/simple-icons` and `@iconify-json/solar`. You need to install these two packages.
export const iconStringOrLightDark = z.string().or(
  z.object({
    light: z.string(),
    dark: z.string(),
  }),
);
export const iconWithStates = z.object({
  default: iconStringOrLightDark,
  hover: iconStringOrLightDark,
  active: iconStringOrLightDark,
});
export const iconStringOrLightDarkOrWithStates =
  iconStringOrLightDark.or(iconWithStates);

export default defineTheme({
  name: "charm",
  schema: z.object({
    title: z.string(),
    titleSuffix: z.string().or(z.boolean()).default(true),
    description: z.string().optional(),
    author: z.string().optional(),
    placeholderImage: z.string().min(1).optional(),
    side: z.object({
      title: z.string(),
      sub: z.string(),
      bio: z.string(),
      navHome: z
        .object({
          title: z.string().default("Home"),
          link: z.string().default("/"),
          icon: iconStringOrLightDarkOrWithStates.default({
            default: "solar:file-text-broken",
            hover: "solar:file-smile-outline",
            active: "solar:file-smile-bold-duotone",
          }),
        })
        .default({}),
      footer: z
        .array(
          z.object({
            title: z.string(),
            link: z.string(),
            icon: iconStringOrLightDarkOrWithStates,
          }),
        )
        .min(1)
        .default([
          {
            title: "Twitter",
            link: "https://x.com/",
            icon: "simple-icons:twitter",
          },
          {
            title: "GitHub",
            link: "https://github.com/",
            icon: "simple-icons:github",
          },
        ]),
      navStyle: z
        .enum(["default", "only-icon", "only-title"])
        .default("default"),
      footerStyle: z
        .enum(["default", "only-icon", "only-title"])
        .default("default"),
    }),
  }),
  imports: {
    "components/sides": "components/sides/**.astro",
  },
});
