import { defineConfig } from "tinacms";
import { homePageTinaConfig } from "../src/app/(home)/tina-config";
import { faqPageTinaConfig } from "../src/app/faq/tina-config";
import { sitewideTinaConfig } from "../src/app/sitewide/tina-config";
import { tinaConfigBlog } from "@/app/blog/tina-config-blog";
import { tinaConfigProjects } from "@/app/projects/tina-config-projects";

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
      sitewideTinaConfig,
      tinaConfigBlog,
      tinaConfigProjects,
    ],
  },
});
