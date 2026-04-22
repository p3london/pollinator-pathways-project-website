// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
  return await client.queries.connectPage({ relativePath: "connect.json" });
}

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const tinaConfigConnect: Collection = {
  label: "Connect Page",
  name: "connectPage",
  path: "content/connect",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => `/connect`,
  },
  fields: [
    {
      type: "string",
      label: "Main Heading",
      name: "mainHeading",
    },
    {
      type: "string",
      label: "Main Text",
      name: "mainText",
    },
    {
      required: true,
      type: "object",
      label: "Main Link",
      name: "mainLink",
      ui: { itemProps: (item) => ({ label: item?.text }) },
      fields: [
        {
          type: "string",
          label: "Text",
          name: "text",
          required: true,
        },
        {
          type: "string",
          label: "URL",
          name: "url",
          required: true,
        },
        {
          type: "image",
          label: "Icon",
          name: "icon",
          required: true,
        },
      ],
    },
    {
      type: "string",
      label: "Volunteer Heading",
      name: "volunteerHeading",
    },
    {
      type: "string",
      label: "Volunteer Text",
      name: "volunteerText",
    },
    {
      list: true,
      required: true,
      type: "object",
      label: "Volunteer Opportunities",
      name: "volunteerOpportunities",
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          required: true,
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          required: true,
        },
        {
          type: "string",
          label: "Link Text",
          name: "linkText",
          required: false,
        },
        {
          type: "string",
          label: "Link URL",
          name: "linkUrl",
          required: false,
        },
      ],
    },
  ],
};
