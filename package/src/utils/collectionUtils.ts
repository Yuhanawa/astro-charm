import { getCollection } from "astro:content";
import { defineCollection, reference, z } from "astro:content";

export async function getPostsEntries() {
  const entries = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return entries;
}
export async function getPostsStaticPaths() {
  const entries = await getPostsEntries();
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
