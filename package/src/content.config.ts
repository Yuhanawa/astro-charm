import { z, defineCollection } from "astro:content";
import { iconStringOrLightDarkOrWithStates } from "../index";

const postCollection = defineCollection({
  // loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      published: z.date(),
      updated: z.date().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: image()
        .optional()
        .or(
          z.object({
            skip: z.string(),
          }),
        ),
      draft: z.boolean().default(false),
      hidden: z.boolean().default(false),
    }),
});

const specialsCollection = defineCollection({
  // loader: glob({ base: "./src/content/specials", pattern: "**/*.{md,mdx}" }),
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // not show, only for SEO
    icon: iconStringOrLightDarkOrWithStates,
    index: z.number().default(0),
    published: z.date().optional(),
    updated: z.date().optional(),
    disabled: z.boolean().default(false),
    hidden: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postCollection,
  specials: specialsCollection,
};
