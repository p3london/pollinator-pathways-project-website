import { defineConfig } from "tinacms";
import { photoSectionsTinaConfig } from "../src/app/photos/tina-config";
import { homePageTinaConfig } from "../src/app/(home)/tina-config";
import { faqPageTinaConfig } from "../src/app/faq/tina-config";
import { sitewideTinaConfig } from "../src/app/sitewide/tina-config";
import { slugifyForTina } from "../src/lib/slugify-for-tina";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  /**
   * See docs on content modeling for more info on
   * how to setup new content models:
   * https://tina.io/docs/schema/
   */
  schema: {
    collections: [
      faqPageTinaConfig,
      homePageTinaConfig,
      photoSectionsTinaConfig,
      sitewideTinaConfig,
      {
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
            name: "category",
            label: "Category",
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
            required: true,
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
      },
    ],
  },
});
