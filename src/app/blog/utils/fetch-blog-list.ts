import client from "@/../tina/__generated__/client";
import getTinaMarkdownExcerpt from "./get-tina-markdown-excerpt";

export async function fetchBlogList() {
  /**
   * TODO: implement pagination. Since 2020, there have been
   * 30 blog entries. We can probably wait to implement pagination
   * until we have more than 50 blog entries.
   */
  const blogListData = await client.queries.blogConnection({
    sort: "date",
    last: 50,
  });
  if (!blogListData?.data?.blogConnection?.edges) {
    throw new Error("Failed to fetch blog list data");
  }

  const blogEntries = [];
  for (const blogEntry of blogListData.data.blogConnection.edges) {
    const blogNode = blogEntry?.node;
    if (!blogNode) {
      throw new Error("Failed to grab node off blog entry");
    }
    const { title, date, author, coverImage, coverImageAlt, body } = blogNode;
    // Grab an excerpt from the body
    const bodyExcerpt = getTinaMarkdownExcerpt(body, 140);

    const { filename } = blogNode._sys;
    blogEntries.push({
      title,
      date,
      author,
      filename,
      coverImage,
      coverImageAlt,
      bodyExcerpt,
    });
  }

  return blogEntries;
}
