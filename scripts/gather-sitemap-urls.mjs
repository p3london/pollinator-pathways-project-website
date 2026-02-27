import fs from "fs";

import { XMLParser } from "fast-xml-parser";
const xmlParser = new XMLParser();

/**
 * Given a path to a sitemap XML file, read in the XML file,
 * and gather all <url> entries from the provided sitemap file
 * as well as any separate <sitemap> entries referenced in the provided file.
 *
 * @param {string} sitemapPath
 */
export async function gatherSitemapUrls(sitemapPath) {
  // Parse the XML sitemap
  const xmlString = fs.readFileSync(sitemapPath);
  const xmlData = xmlParser.parse(xmlString);
  const sitemapUrls = xmlData.urlset.url;
  // Return the list of URLS
  return sitemapUrls;
}
