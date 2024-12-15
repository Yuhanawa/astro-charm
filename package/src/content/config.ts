import { z, defineCollection } from "astro:content";
import { iconStringOrLightDarkOrWithStates } from "../../index";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date(),
    updated: z.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    hidden: z.boolean().default(false),
  }),
});

const specialsCollection = defineCollection({
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
