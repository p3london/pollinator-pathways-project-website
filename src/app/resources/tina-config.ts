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
      name: "otherCitiesTitle",
      label: "Other Cities Title",
      required: false,
    },
    {
      type: "string",
      name: "otherCitiesSubtitle",
      label: "Other Cities Subtitle",
      required: false,
    },
    {
      list: true,
      type: "object",
      label: "Other Cities",
      name: "otherCitiesList",
      ui: {
        itemProps: (item) => ({ label: item?.name }),
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Image",
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
    {
      type: "string",
      name: "blogsTitle",
      label: "Blogs Title",
      required: false,
    },
    {
      type: "string",
      name: "blogsSubtitle",
      label: "Blogs Subtitle",
      required: false,
    },
    {
      list: true,
      type: "object",
      label: "Blogs List",
      name: "blogReferenceList",
      ui: {
        itemProps: (item) => {
          // Get last segment of the path after `/`,
          // without using `path.basename`, cause we're in the browser
          const filename = item?.blogReference?.split("/").pop();
          // Remove file extension from the filename
          const basename = filename?.split(".").slice(0, -1).join(".");
          return { label: basename };
        },
      },
      fields: [
        {
          type: "reference",
          label: "Blog Post",
          name: "blogReference",
          collections: ["blog"],
          required: true,
        },
      ],
    },
  ],
};
