// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Types
import type { Collection } from "tinacms";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
  return await client.queries.homepage({ relativePath: "home.json" });
}

/**

{
  emoji: "📅",
  title: "Join us for some event!",
  body: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "On this date, blah blah blah, pollinator species are responsible for 1 out of every 3 bites of food we eat. Pollination is a crucial process in the reproductive system of plants.",
          },
        ],
      },
    ],
  },
  links: [
    { linkText: "Link one", linkUrl: "https://www.example.com" },
    { linkText: "Link two", linkUrl: "https://www.example.com" },
  ],
},

 */

const messageBarFields = [
  {
    type: "string",
    label: "Emoji",
    name: "emoji",
    required: true,
  },
  {
    type: "string",
    label: "Title",
    name: "title",
    required: true,
  },
  {
    type: "rich-text",
    label: "Body",
    name: "body",
  },
];
/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file,
 * and returned by the `tinaQuery` function above.
 */
export const homePageTinaConfig: Collection = {
  label: "Home Page",
  name: "homepage",
  path: "content/home",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => `/`,
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      list: true,
      type: "object",
      label: "Message Bars",
      name: "messageBars",
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        {
          type: "string",
          label: "Emoji",
          name: "emoji",
          required: true,
        },
        {
          type: "string",
          label: "Title",
          name: "title",
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
        {
          list: true,
          type: "object",
          label: "Links",
          name: "links",
          ui: { itemProps: (item) => ({ label: item?.linkText }) },
          fields: [
            {
              type: "string",
              label: "Link Text",
              name: "linkText",
              required: true,
            },
            {
              type: "string",
              label: "Link URL",
              name: "linkUrl",
              required: true,
            },
          ],
        },
      ],
    },
    {
      list: true,
      type: "object",
      label: "Info Sections",
      name: "infoSections",
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "image",
          label: "Image",
          name: "image",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
        {
          type: "string",
          label: "Link Text",
          name: "linkText",
        },
        {
          type: "string",
          label: "Link URL",
          name: "linkUrl",
        },
      ],
    },
    {
      list: true,
      type: "object",
      label: "Calls To Action",
      name: "callsToAction",
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        {
          type: "image",
          label: "Icon",
          name: "iconSrc",
        },
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "string",
          label: "Link Text",
          name: "linkText",
        },
        {
          type: "string",
          label: "Link URL",
          name: "linkUrl",
        },
      ],
    },
    {
      type: "string",
      label: "Sponsors Heading",
      name: "sponsorsHeading",
    },
    {
      type: "string",
      label: "Sponsors Text",
      ui: {
        component: "textarea",
      },
      name: "sponsorsText",
    },
    {
      type: "object",
      label: "Sponsors",
      name: "sponsors",
      ui: { itemProps: (item) => ({ label: item?.name }) },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "image",
          label: "Logo",
          name: "logo",
        },
      ],
      list: true,
    },
  ],
};
