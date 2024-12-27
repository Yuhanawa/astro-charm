import { getCollection } from "astro:content";

export async function getPostEntries(options?: { showHidden?: boolean }) {
  const entries = await getCollection(
    "posts",
    ({ data }) =>
      (!data.hidden || options?.showHidden) &&
      (import.meta.env.PROD ? data.draft !== true : true),
  );
  return entries.sort(
    (a, b) =>
      (b.data.updated ?? b.data.published).valueOf() -
      (a.data.updated ?? a.data.published).valueOf(),
  );
}
export async function getPostStaticPaths() {
  const entries = await getPostEntries({ showHidden: true });
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export async function getSpecialEntries(options?: { showHidden?: boolean }) {
  const entries = await getCollection(
    "specials",
    ({ data }) =>
      (import.meta.env.PROD ? !data.disabled : true) &&
      (!data.hidden || options?.showHidden),
  );
  return entries.sort(
    (a, b) =>
      (a.data.index ?? 0) - (b.data.index ?? 0) ||
      a.data.title.localeCompare(b.data.title),
  );
}
export async function getSpecialStaticPaths() {
  const entries = await getSpecialEntries({ showHidden: true });
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
