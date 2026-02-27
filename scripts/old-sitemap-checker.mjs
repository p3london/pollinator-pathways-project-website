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
  //
  // TODO: check that all URLs are returning appropriate status codes
  //
  // ... no URL should return `404`. For all known URLs documented in
  // the previous sitemap, should either have a page, so 200-ish response,
  // or should have a redirect in place, so 300-ish response.
  console.log({ urls });
}
