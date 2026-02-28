// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Utils
import { slugifyForTina } from "../../lib/slugify-for-tina";
// Types
import type { Collection } from "tinacms";

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const tinaConfigBlog: Collection = {
  name: "blog",
  label: "Blog",
  path: "content/blog",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image",
      required: false,
    },
    {
      type: "string",
      name: "coverImageAlt",
      label: "Cover Image Description",
      required: false,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      list: true,
      label: "Categories",
      options: [
        {
          value: "pollinators",
          label: "Pollinators",
        },
        {
          value: "recipes",
          label: "Recipes",
        },
        {
          value: "gardening",
          label: "Gardening",
        },
        {
          value: "flowers",
          label: "Flowers",
        },
        {
          value: "news",
          label: "News",
        },
        {
          value: "london",
          label: "London",
        },
      ],
      required: false,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => `/blog/${document._sys.filename}`,
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
