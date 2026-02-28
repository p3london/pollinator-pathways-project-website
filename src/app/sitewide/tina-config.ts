// Types
import type { Collection } from "tinacms";

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const sitewideTinaConfig: Collection = {
  label: "Site-wide",
  name: "sitewide",
  path: "content/sitewide",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => `/sitewide`,
  },
  fields: [
    {
      type: "object",
      label: "Navigation",
      name: "nav",
      required: true,
      fields: [
        {
          list: true,
          type: "object",
          label: "Items",
          name: "items",
          required: true,
          templates: [
            {
              label: "Link",
              name: "link",
              ui: { itemProps: (item) => ({ label: item?.label }) },
              fields: [
                {
                  type: "string",
                  label: "Text",
                  name: "label",
                  required: true,
                },
                {
                  type: "string",
                  label: "URL",
                  name: "href",
                  required: true,
                },
              ],
            },
            {
              label: "Dropdown",
              name: "dropdown",
              ui: { itemProps: (item) => ({ label: item?.label }) },
              fields: [
                {
                  type: "string",
                  label: "Text",
                  name: "label",
                  required: true,
                },
                {
                  list: true,
                  type: "object",
                  label: "Links",
                  name: "links",
                  required: true,
                  ui: { itemProps: (item) => ({ label: item?.label }) },
                  fields: [
                    {
                      type: "string",
                      label: "Text",
                      name: "label",
                      required: true,
                    },
                    {
                      type: "string",
                      label: "URL",
                      name: "href",
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "string",
          label: "Subscribe Heading",
          name: "subscribeHeading",
        },
        {
          type: "string",
          label: "Subscribe Placeholder",
          name: "subscribePlaceholder",
        },
        {
          list: true,
          type: "object",
          label: "Links",
          name: "links",
          ui: { itemProps: (item) => ({ label: item?.text }) },
          fields: [
            {
              type: "string",
              label: "Text",
              name: "text",
            },
            {
              type: "string",
              label: "URL",
              name: "url",
            },
            {
              type: "image",
              label: "Icon",
              name: "icon",
            },
            {
              type: "boolean",
              label: "Show Icon Only",
              name: "showIconOnly",
            },
          ],
        },
      ],
    },
  ],
};
