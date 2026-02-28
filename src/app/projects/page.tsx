// Components
import LayoutRoot from "@/components/layout-root";
import Spacer from "@/components/spacer";
import { PageTitle } from "@/components/page-title";
// ...
import getSitewideData from "@/lib/get-sitewide-data";
import { ProjectEntriesList } from "./components/project-entries-list";

export default async function Projects() {
  const { footer, nav } = await getSitewideData();
  return (
    <LayoutRoot footer={footer} pathname="/projects" navBarItems={nav.items}>
      <Spacer h="2rem" />
      <PageTitle>Projects</PageTitle>
      <Spacer h="1rem" />
      <ProjectEntriesList />
    </LayoutRoot>
  );
}
