import client from "@/../tina/__generated__/client";
import getTinaMarkdownExcerpt from "@/app/blog/utils/get-tina-markdown-excerpt";

export async function fetchProjectsList() {
  const projectsListData = await client.queries.projectConnection({
    last: 50,
  });

  if (!projectsListData?.data?.projectConnection?.edges) {
    throw new Error("Failed to fetch blog list data");
  }

  const projectEntries = [];
  for (const projectEntry of projectsListData.data.projectConnection.edges) {
    const projectNode = projectEntry?.node;
    if (!projectNode) {
      throw new Error("Failed to grab node off blog entry");
    }
    const {
      title,
      coverImage,
      coverImageAlt,
      date,
      body,
      projectStatus,
      shortDescription,
    } = projectNode;
    const { filename } = projectNode._sys;

    const bodyExcerpt = getTinaMarkdownExcerpt(body, 140);

    projectEntries.push({
      title,
      filename,
      date,
      coverImage,
      coverImageAlt,
      projectStatus,
      shortDescription: shortDescription ?? bodyExcerpt,
    });
  }

  return projectEntries;
}
