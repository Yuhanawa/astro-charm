import { getCollection } from "astro:content";

export async function getPostEntries() {
  const entries = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return entries;
}
export async function getPostStaticPaths() {
  const entries = await getPostEntries();
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export async function getSpecialEntries() {
  const entries = await getCollection("specials", ({ data }) => {
    return import.meta.env.PROD ? !data.disabled : true;
  });
  return entries;
}
export async function getSpecialStaticPaths() {
  const entries = await getSpecialEntries();
  return entries.map((entry) => ({
    params: { slug: entry.slug, special: entry.slug },
    props: { entry },
  }));
}

export async function getCategoriesStaticPaths() {
  const entries = await getPostEntries();
  const categories = new Set(entries.map((entry) => entry.data.category));
  return Array.from(categories).map((category) => ({
    params: { category },
  }));
}
export async function getPostEntriesByCategory(category: string) {
  const entries = await getPostEntries();
  return entries.filter((entry) => entry.data.category === category);
}

export async function getTagStaticPaths() {
  const entries = await getPostEntries();
  const tags = new Set(entries.flatMap((entry) => entry.data.tags ?? []));
  return Array.from(tags).map((tag) => ({
    params: { tag },
  }));
}
export async function getPostEntriesByTag(tag: string) {
  const entries = await getPostEntries();
  return entries.filter((entry) => entry.data.tags?.includes(tag));
}
