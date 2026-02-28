import client from "@/../tina/__generated__/client";
import { fetchPhotosList } from "../utils/fetch-photos-list";
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
  const res = await client.queries.photos({ relativePath: `${filename}.json` });
  const { footer, nav } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/photos">
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
  const photoEntries = await fetchPhotosList();
  return photoEntries.map(({ filename }) => ({ params: { filename } }));
}
