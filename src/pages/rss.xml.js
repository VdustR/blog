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
    description: "寫給仍在動手的人。技術筆記、實驗與程式碼。",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/${post.id}/`,
    })),
    customData: "<language>zh-Hant</language>",
  });
}
