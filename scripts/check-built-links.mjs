import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const outputDirectory = "dist";
const basePath = "/blog/";

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });

const missingReferences = [];

for (const filePath of walk(outputDirectory).filter((file) =>
  file.endsWith(".html"),
)) {
  const html = readFileSync(filePath, "utf8");

  for (const match of html.matchAll(/(?:href|src)=["']([^"'#?]+)["']/g)) {
    const url = match[1];
    if (!url.startsWith(basePath)) continue;

    const relativePath = url.slice(basePath.length);
    let outputPath = join(outputDirectory, relativePath);

    if (url.endsWith("/") || !extname(outputPath)) {
      outputPath = join(outputPath, "index.html");
    }

    if (!existsSync(outputPath)) {
      missingReferences.push(`${filePath}: ${url}`);
    }
  }
}

const rss = readFileSync(join(outputDirectory, "rss.xml"), "utf8");
const invalidRssUrls = [
  ...rss.matchAll(
    /<(?:link|guid)[^>]*>(https:\/\/vdustr\.github\.io\/[^<]*)</g,
  ),
]
  .map((match) => match[1])
  .filter((url) => !url.startsWith("https://vdustr.github.io/blog/"));

if (missingReferences.length || invalidRssUrls.length) {
  console.error("Production output contains invalid internal URLs.");
  for (const reference of missingReferences)
    console.error(`- Missing: ${reference}`);
  for (const url of invalidRssUrls)
    console.error(`- Outside base path: ${url}`);
  process.exitCode = 1;
} else {
  console.log("Production output URLs are valid.");
}
