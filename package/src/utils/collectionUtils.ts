import { getCollection } from "astro:content";

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

export async function getSpecialsEntries() {
  const entries = await getCollection("specials", ({ data }) => {
    return import.meta.env.PROD ? !data.disabled : true;
  });
  return entries;
}
export async function getSpecialsStaticPaths() {
  const entries = await getSpecialsEntries();
  return entries.map((entry) => ({
    params: { slug: entry.slug, special: entry.slug },
    props: { entry },
  }));
}
