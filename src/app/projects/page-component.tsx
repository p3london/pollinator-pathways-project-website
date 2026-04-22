// Components
import Spacer from "@/components/spacer";
import { PageTitle } from "@/components/page-title";
import { ProjectEntriesList } from "./components/project-entries-list";
import s from "./style.module.css";

export default function Projects({ data, serverProps }: $TSFixMe) {
  const { projectEntries } = serverProps;
  const { title, subtitle } = data.projectsLanding;

  return (
    <>
      <Spacer h="2rem" />
      <PageTitle>{title}</PageTitle>
      {typeof subtitle === "string" && subtitle !== "" ? (
        <p className={s.subtitle}>{subtitle}</p>
      ) : null}
      <Spacer h="2rem" />
      <ProjectEntriesList projectEntries={projectEntries} />
    </>
  );
}
