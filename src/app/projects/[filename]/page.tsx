import client from "@/../tina/__generated__/client";

import { notFound } from "next/navigation";
import { fetchProjectsList } from "../utils/fetch-projects-list";
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
  let res;
  try {
    res = await client.queries.project({ relativePath: `${filename}.md` });
  } catch (err) {
    const errorString = String(err).toLowerCase();
    if (errorString.indexOf("unable to find record") !== -1) {
      notFound();
    } else {
      throw err;
    }
  }

  const { footer, nav } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/projects">
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
  const projectEntries = await fetchProjectsList();
  return projectEntries.map(({ filename }) => ({ params: { filename } }));
}
