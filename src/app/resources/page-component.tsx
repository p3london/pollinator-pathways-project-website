// Components
import { PageTitle } from "@/components/page-title";
import Spacer from "@/components/spacer";
import { ButtonLink } from "@/components/primary-button-link";
import { AspectContainer } from "./components/aspect-container";
// Utils
import { parseYoutubeIdFromUrl } from "./utils/parse-youtube-id-from-url";
// Types
import { PropsWithChildren } from "react";
// Styles
import s from "./page.module.css";

export default function ResourcesPage({ data, serverProps }: $TSFixMe) {
  const { pageTitle, subtitle, files, videoSectionTitle, youtubeIds } =
    data.resourcesPage;

  const hasFiles = Array.isArray(files) && files.length > 0;
  const hasVideos =
    typeof videoSectionTitle === "string" &&
    videoSectionTitle !== "" &&
    Array.isArray(youtubeIds) &&
    youtubeIds.length > 0;
  return (
    <>
      <Spacer h="2rem" />
      <PageTitle>{pageTitle}</PageTitle>
      {typeof subtitle === "string" && subtitle !== "" ? (
        <p className={s.subtitle}>{subtitle}</p>
      ) : null}
      {hasFiles ? (
        <>
          <Spacer h="2rem" />
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
        </>
      ) : null}
      {hasVideos ? (
        <>
          <Spacer h="4rem" />
          <PageTitle e="h2">{videoSectionTitle}</PageTitle>
          <Spacer h="2rem" />
          <div className={s.videosContainer}>
            {youtubeIds.map((url, index) => (
              <AspectContainer key={index} aspectRatio={9 / 16}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${parseYoutubeIdFromUrl(
                    url
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </AspectContainer>
            ))}
          </div>
        </>
      ) : null}
      {/*<pre>
        <code>{JSON.stringify(files, null, 2)}</code>
      </pre>*/}
      <Spacer h="8rem" />
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
