import fs from "fs";
import path from "path";
import { gatherSitemapUrls } from "./gather-sitemap-urls.mjs";

const PATH_CWD = process.cwd();
const PATH_SITEMAPS = path.join(PATH_CWD, "old-sitemaps");
const PATH_SITEMAP_PAGES = path.join(PATH_SITEMAPS, "pages-sitemap.xml");
const PATH_SITEMAP_BLOG_POSTS = path.join(
  PATH_SITEMAPS,
  "blog-posts-sitemap.xml"
);
const PATH_SITEMAP_BLOG_CATEGORIES = path.join(
  PATH_SITEMAPS,
  "blog-categories-sitemap.xml"
);

main();

async function main() {
  const urlsPages = await gatherSitemapUrls(PATH_SITEMAP_PAGES);
  const urlsBlogPosts = await gatherSitemapUrls(PATH_SITEMAP_BLOG_POSTS);
  const urlsBlogCategories = await gatherSitemapUrls(
    PATH_SITEMAP_BLOG_CATEGORIES
  );
  const urls = [...urlsPages, ...urlsBlogPosts, ...urlsBlogCategories];
  // Check that all URLs are returning appropriate status codes

  const urlResults = [];
  for (const url of urls) {
    if (!("loc" in url) || typeof url.loc !== "string") {
      console.log("Non-string URL...");
      console.log({ loc: url.loc });
      continue;
    }
    // Modify the URL (for now, testing script before actually moving site)
    const urlModified = url.loc.replace(
      "https://www.pollinatorpathwaysproject.com",
      "http://localhost:3000"
    );
    // Make a request to the URL, and retrieve the status code
    const response = await fetch(urlModified);
    const statusCode = response.status;
    if (statusCode !== 200) {
      console.log(`${statusCode} for ${urlModified}`);
    }
    urlResults.push({ url: urlModified, statusCode });
  }
  // Write the URL results to a file
  fs.writeFileSync(
    path.join(PATH_SITEMAPS, "url-results.json"),
    JSON.stringify(urlResults, null, 2),
    "utf8"
  );
}
