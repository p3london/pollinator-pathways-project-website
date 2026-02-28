import client from "@/../tina/__generated__/client";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const { footer, nav } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/blog">
      {isPreviewEnabled ? (
        <PageClient
          query={res.query}
          variables={res.variables}
          data={res.data}
        />
      ) : (
        <PageServer data={res.data} />
      )}
    </LayoutRoot>
  );
}

export async function generateStaticParams() {
  const blogEntries = await fetchBlogList();
  return blogEntries.map(({ filename }) => ({ params: { filename } }));
}
