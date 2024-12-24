import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import config from "charm:config";
import { getPostEntries } from "../utils/collectionUtils";

export const GET: APIRoute = async function GET(context) {
  const entries = await getPostEntries();

  if (config.rss === false) {
    return new Response("RSS feed is disabled", { status: 404 });
  }

  return rss({
    title: config.title,
    description: config.description ?? "",
    site: context.site ?? "#",
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.updated || entry.data.published,
      description: entry.data.description,
      link: `/posts/${entry.slug}`,
    })),
  });
};
