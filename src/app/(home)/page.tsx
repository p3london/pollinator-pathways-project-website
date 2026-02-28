// Utilities
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
// Layout
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
// Tina query
import { tinaQuery } from "./tina-config";
// Page components
import { PageWithTinaHook } from "./page-with-tina-hook";
import PageComponent from "./page-component";

/**
 * Render the PageComponent component with data from the given Tina query.
 * This tends to be pretty much identical for every page.
 *
 * If isEditable is true, we'll end up rendering the PageWithTinaHook component,
 * which is a wrapper around PageComponent that enables TinaCMS hooks. This
 * allows data to be edited in the CMS and reloaded on the client.
 *
 * If isEditable is false, we'll render the PageComponent directly, which is a
 * component that doesn't have any TinaCMS hooks. This static version of the
 * component can often be fully rendered on the server, improving performance
 * of the production deployment.
 */
export default async function Page() {
  const res = await tinaQuery();
  const { nav, footer } = await getSitewideData();
  const isEditable = getIsEditableDeployment();
  return (
    <LayoutRoot footer={footer} pathname="/" navBarItems={nav.items}>
      {isEditable ? (
        <PageWithTinaHook tina={res} />
      ) : (
        <PageComponent data={res.data} />
      )}
    </LayoutRoot>
  );
}
