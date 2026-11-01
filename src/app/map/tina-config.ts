// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
  return await client.queries.mapPage({ relativePath: "map.json" });
}

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const tinaConfigMap: Collection = {
  label: "Map Page",
  name: "mapPage",
  path: "content/map",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => `/map`,
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
      required: true,
    },
    {
      type: "string",
      label: "Subheading",
      name: "subheading",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      label: "Google Maps ID",
      name: "googleMapsId",
      description:
        "The `mid` value from the Google My Maps link, e.g. https://www.google.com/maps/d/viewer?mid=<ID>",
      required: true,
    },
    {
      type: "string",
      label: "Participate Heading",
      name: "participateHeading",
      required: true,
    },
    {
      type: "string",
      label: "Participate Subheading",
      name: "participateSubheading",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      label: "Participate Button Text",
      name: "participateButtonText",
      required: true,
    },
    {
      type: "string",
      label: "Participate Button URL",
      name: "participateButtonUrl",
      required: true,
    },
  ],
};
