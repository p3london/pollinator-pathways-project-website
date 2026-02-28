import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";

export default async function Page() {
  const { footer } = await getSitewideData();

  return (
    <LayoutRoot footer={footer} pathname="/connect">
      <PageServer />
    </LayoutRoot>
  );
}
