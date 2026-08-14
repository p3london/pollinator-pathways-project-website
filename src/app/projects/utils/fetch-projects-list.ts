import client from "@/../tina/__generated__/client";
import { getTinaMarkdownExcerpt } from "@/lib/get-tina-markdown-excerpt";

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
			dateString,
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
			dateString,
			coverImage,
			coverImageAlt,
			projectStatus,
			shortDescription: shortDescription || bodyExcerpt || "",
		});
	}

	// Sort projects by `date`
  projectEntries.sort((a, b) => {
    const aDateSafe = typeof a.date === "string" ? new Date(a.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) : "0000";
    const bDateSafe = typeof b.date === "string" ? new Date(b.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) : "0000";
    const isABeforeB = aDateSafe < bDateSafe;
    const isBBeforeA = bDateSafe < aDateSafe;
    return isABeforeB ? -1 : isBBeforeA ? 1 : 0;
	}).reverse();

	return projectEntries;
}
