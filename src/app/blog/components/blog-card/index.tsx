import Link from "next/link";
import s from "./style.module.css";
import { PropsWithChildren } from "react";
import { BlogMetadata } from "../blog-metadata";
import Spacer from "@/components/spacer";

export function BlogCard({ entry }: { entry: $TSFixMe }) {
  const hasImage =
    typeof entry.coverImage === "string" && entry.coverImage !== "";
  //
  if (hasImage) {
    return (
      <Link href={`/blog/${entry.filename}`}>
        <Card>
          <CardSplit
            sectionOne={
              <div className={s.cardImageContainer}>
                <img src={entry.coverImage} alt={entry.coverImageAlt || ""} />
              </div>
            }
            sectionTwo={<BlogCardInfo entry={entry} />}
          />
        </Card>
      </Link>
    );
  } else {
    return (
      <Link href={`/blog/${entry.filename}`}>
        <Card>
          <BlogCardInfo entry={entry} />
        </Card>
      </Link>
    );
  }
}

function BlogCardInfo({ entry }: { entry: $TSFixMe }) {
  const { title, author, date } = entry;
  return (
    <div className={s.cardInfoContainer}>
      <div className={s.cardInfoMetadata}>
        <BlogMetadata metadata={{ author, date }} />
      </div>
      <Spacer h="8px" />
      <h2 className={s.cardTitle}>{title}</h2>
      {/* TODO: grab "description" text, excerpt from content */}
      {entry.shortDescription ? (
        <p className={s.cardExcerpt}>
          {entry.shortDescription}
          {[".", "!", "?"].includes(
            entry.shortDescription[entry.shortDescription.length - 1]
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
