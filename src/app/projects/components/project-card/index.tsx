import Link from "next/link";
import s from "./style.module.css";
import { PropsWithChildren } from "react";
import { ProjectMetadata } from "../project-metadata";
import Spacer from "@/components/spacer";

export function ProjectCard({ entry }: { entry: $TSFixMe }) {
  const { coverImage, coverImageAlt } = entry;
  const hasImage = typeof coverImage === "string" && coverImage !== "";
  //
  if (hasImage) {
    return (
      <Link href={`/projects/${entry.filename}`}>
        <Card>
          <CardSplit
            sectionOne={<ProjectCardInfo entry={entry} />}
            sectionTwo={
              <div className={s.cardImageContainer}>
                <img src={coverImage} alt={coverImageAlt} />
              </div>
            }
          />
        </Card>
      </Link>
    );
  } else {
    return (
      <Link href={`/projects/${entry.filename}`}>
        <Card>
          <ProjectCardInfo entry={entry} />
        </Card>
      </Link>
    );
  }
}

function ProjectCardInfo({ entry }: { entry: $TSFixMe }) {
  const { title, date, shortDescription } = entry;
  const hasValidDate =
    typeof date === "string" && date !== "" && !isNaN(new Date(date).getTime());

  return (
    <div className={s.cardInfoContainer}>
      {hasValidDate ? (
        <>
          <div className={s.cardInfoMetadata}>
            <ProjectMetadata metadata={{ date }} />
          </div>
          <Spacer h="8px" />
        </>
      ) : null}

      <h2 className={s.cardTitle}>{title}</h2>

      {shortDescription ? (
        <p className={s.cardExcerpt}>
          {shortDescription}
          {[".", "!", "?"].includes(
            shortDescription[shortDescription.length - 1]
          )
            ? null
            : "…"}
        </p>
      ) : null}
      {/*<pre>
        <code>{JSON.stringify(entry, null, 2)}</code>
      </pre>*/}
    </div>
  );
}

function Card({ children }: PropsWithChildren<{}>) {
  return <div className={s.cardRoot}>{children}</div>;
}

function CardSplit({
  sectionOne,
  sectionTwo,
}: {
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
}) {
  return (
    <div className={s.cardSplit}>
      <div className={s.cardSplit_sectionOne}>{sectionOne}</div>
      <div className={s.cardSplit_sectionTwo}>{sectionTwo}</div>
    </div>
  );
}
