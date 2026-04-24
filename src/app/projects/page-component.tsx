// Components
import Spacer from "@/components/spacer";
import { PageTitle } from "@/components/page-title";
import { ProjectEntriesList } from "./components/project-entries-list";
import s from "./style.module.css";

export default function Projects({ data, serverProps }: $TSFixMe) {
  const { projectEntries } = serverProps;
  const {
    title,
    subtitle,
    currentProjectsTitle,
    currentProjectsSubtitle,
    pastProjectsTitle,
    pastProjectsSubtitle,
  } = data.projectsLanding;

  const currentProjectEntries = projectEntries.filter(
    (entry: $TSFixMe) => entry.projectStatus === "current"
  );
  const pastProjectEntries = projectEntries.filter(
    (entry: $TSFixMe) => entry.projectStatus === "past"
  );

  const hasStatusSections =
    currentProjectEntries.length > 0 && pastProjectEntries.length > 0;

  return (
    <>
      <Spacer h="2rem" />
      {hasStatusSections ? (
        <>
          <PageTitle>{currentProjectsTitle}</PageTitle>
          <ProjectsSection
            subtitle={currentProjectsSubtitle}
            projectEntries={currentProjectEntries}
          />
          <Spacer h="6rem" />
          <PageTitle e="h2">{pastProjectsTitle}</PageTitle>
          <ProjectsSection
            subtitle={pastProjectsSubtitle}
            projectEntries={pastProjectEntries}
          />
        </>
      ) : (
        <>
          <PageTitle>{title}</PageTitle>
          <ProjectsSection
            subtitle={subtitle}
            projectEntries={projectEntries}
          />
        </>
      )}
      <Spacer h="12rem" />
    </>
  );
}

function ProjectsSection({ subtitle, projectEntries }: $TSFixMe) {
  return (
    <>
      {typeof subtitle === "string" && subtitle !== "" ? (
        <p className={s.subtitle}>{subtitle}</p>
      ) : null}
      <Spacer h="2rem" />
      <ProjectEntriesList projectEntries={projectEntries} />
    </>
  );
}
