import client from "@/lib/tina-client";

import { notFound } from "next/navigation";
import { fetchProjectsList } from "../utils/fetch-projects-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
// Types
import type { Metadata, ResolvingMetadata } from "next";

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
    <LayoutRoot
      footer={footer}
      navBarItems={nav.items}
      pathname={`/projects/${filename}`}
    >
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
  if (!Array.isArray(projectEntries) || projectEntries.length === 0) {
    return [{ filename: "not-found" }];
  }
  const staticParams = projectEntries.map(({ filename }) => ({ filename }));
  return staticParams;
}

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export async function generateMetadata(
  { params }: { params: Promise<{ filename: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { filename } = await params;
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  // grab the blog data
  const res = await client.queries.project({ relativePath: `${filename}.md` });
  const { title } = res.data.project;
  return { title: title + METADATA_TITLE_SUFFIX };
}
