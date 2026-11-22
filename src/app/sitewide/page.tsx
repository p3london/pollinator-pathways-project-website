import client from "@/lib/tina-client";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";

export const metadata = {
  title: "Sitewide Content",
  description: "Edit site-wide content and preview changes.",
  // Prevent search indexing, this page is meant for site editors only.
  robots: { index: false },
};

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page() {
  /**
   * TODO: avoid publishing this page in production, unless editing...
   * Could probably hook in to `isEditable` to achieve this.
   * Or, could maybe put `no-index` stuff on this page instead?
   */
  const res = await client.queries.sitewide({ relativePath: "sitewide.json" });
  const isEditable = getIsEditableDeployment();
  // Note that `LayoutRoot` is used _within_ the component.
  return (
    <>
      {isEditable ? <PageClient tina={res} /> : <PageServer data={res.data} />}
    </>
  );
}
