// Tina CMS Client
import { slugifyForTina } from "../../lib/slugify-for-tina";
// Types
import type { Collection } from "tinacms";

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file.
 */
export const photoSectionsTinaConfig: Collection = {
  label: "Photos",
  name: "photos",
  path: "content/photos",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      label: "Images",
      name: "images",
      list: true,
    },
  ],
  ui: {
    allowedActions: {
      create: true,
      delete: true,
    },
    router: ({ document }) => `/photos/${document._sys.filename}`,
    filename: {
      // Disable slug editing, it causes more confusion than it's worth.
      // If we ever need to change the slug of a post, we can do so
      // manually... but it's rarely a good idea, because it breaks links.
      readonly: true,
      // Custom slugify function, default does not lower-case
      slugify: (values) => slugifyForTina(values?.title),
    },
  },
};
