// Components
import { PageTitle } from "@/components/page-title";
import Spacer from "@/components/spacer";
import PrimaryButtonLink from "@/components/primary-button-link";
import { ButtonLink } from "@/components/primary-button-link";
// Types
import { PropsWithChildren } from "react";
// Styles
import s from "./page.module.css";

const RESOURCE_PDF_LINKS = [
  {
    title: "Info Flyer PDF - English",
    url: "/uploads/resources/general-info-flyer-english.pdf",
  },
  {
    title: "Plant Guide PDF - English",
    url: "/uploads/resources/open-plant-guide-english.pdf",
  },
  {
    title: "Info Flyer PDF - French",
    url: "/uploads/resources/general-info-flyer-french.pdf",
  },
  {
    title: "Plant Guide PDF - French",
    url: "/uploads/resources/open-plant-guide-french.pdf",
  },
  {
    title: "Info Flyer PDF - Spanish",
    url: "/uploads/resources/general-info-flyer-spanish.pdf",
  },
  {
    title: "Plant Guide PDF - Spanish",
    url: "/uploads/resources/open-plant-guide-spanish.pdf",
  },
];

export default function ResourcesPage({ data, serverProps }: $TSFixMe) {
  const { pageTitle, subtitle, files } = data.resourcesPage;
  return (
    <>
      <Spacer h="2rem" />
      <PageTitle>{pageTitle}</PageTitle>
      {typeof subtitle === "string" && subtitle !== "" ? (
        <p className={s.subtitle}>{subtitle}</p>
      ) : null}
      <Spacer h="2rem" />
      {Array.isArray(files) && files.length > 0 ? (
        <div className={s.fileLinks}>
          {files.map((fileEntry: $TSFixMe, index) => {
            const { name, file } = fileEntry;
            return (
              <FileLink key={index} url={file}>
                {name}
              </FileLink>
            );
          })}
        </div>
      ) : null}
      {/*<pre>
        <code>{JSON.stringify(files, null, 2)}</code>
      </pre>*/}
    </>
  );
}

function FileLink({ url, children }: PropsWithChildren<{ url: string }>) {
  const icon = "/uploads/Site-wide/icon-file.png";
  return (
    <ButtonLink styleVariant="primary" href={url} target="_blank">
      <span className={s.fileLink_iconAndText}>
        <img className={s.fileLink_buttonIcon} src={icon} alt="" />
        {children}
      </span>
    </ButtonLink>
  );
}
