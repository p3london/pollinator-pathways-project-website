import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";

export default async function Page() {
  const { footer, nav } = await getSitewideData();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/connect">
      <PageServer />
    </LayoutRoot>
  );
}
