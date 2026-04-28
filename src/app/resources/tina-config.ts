// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
  return await client.queries.resourcesPage({
    relativePath: "resources-page.json",
  });
}

/**
 * Fetch data that does not need to be directly editable in TinaCMS
 */
// export async function getServerProps() {
//   const projectEntries = await fetchProjectsList();
//   return { projectEntries };
// }

export const tinaConfigResourcesPage: Collection = {
  name: "resourcesPage",
  label: "Resources Page",
  path: "content/resources-page",
  format: "json",
  ui: {
    allowedActions: {
      create: true,
      delete: true,
    },
    router: () => `/resources`,
  },
  fields: [
    {
      type: "string",
      name: "pageTitle",
      label: "Page Title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: false,
    },
    {
      list: true,
      type: "object",
      label: "Files",
      name: "files",
      required: true,
      ui: { itemProps: (item) => ({ label: item?.name }) },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
          required: true,
        },
        {
          type: "image",
          label: "File",
          name: "file",
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "videoSectionTitle",
      label: "Video Section Title",
      required: false,
    },
    {
      type: "string",
      name: "youtubeIds",
      label: "Youtube IDs",
      list: true,
      required: false,
    },
  ],
};
