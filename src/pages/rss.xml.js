import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("docs"))
    .filter((post) => post.id !== "index" && post.data.publishDate)
    .toSorted(
      (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
    );

  return rss({
    title: "VDUSTR",
    description: "一些雜七雜八的隨手筆記。",
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `${post.id}/`,
    })),
    customData: "<language>zh-Hant</language>",
  });
}
