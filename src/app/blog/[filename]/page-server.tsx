// Components
import { MarkdownContent } from "@/components/markdown-content";
// Styles
import s from "./blog-entry.module.css";
// Types
import type { BlogQuery } from "../../../../tina/__generated__/types";
import { PageTitle } from "@/components/page-title";
import Spacer from "@/components/spacer";

export default function PageServer({ data }: { data: BlogQuery }) {
  const { author, body, coverImage, coverImageAlt, date, title } = data.blog;
  const metadata = { author, date };
  // Format the date as `Month DD, YYYY`
  const dateObject = new Date(metadata.date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className={s.metadata}>
        <div className={s.author}>
          <div className={s.authorIcon}>🌻</div>
          <div className={s.authorName}>{metadata.author}</div>
        </div>
        <div className={s.metadataDivider}>•</div>
        <div className={s.date}>{formattedDate}</div>
        {/* TODO: actually implement reading time */}
        {/*<div className={s.metadataDivider}>•</div>*/}
        {/*<div className={s.readingTime}>{`2 min read`}</div>*/}
      </div>
      <div className={s.pageTitleContainer}>
        <PageTitle>{title}</PageTitle>
      </div>

      {typeof coverImage === "string" && coverImage !== "" ? (
        <div className={s.coverImageContainer}>
          <img
            className={s.coverImage}
            src={coverImage}
            alt={coverImageAlt || ""}
          />
        </div>
      ) : null}
      <div className={s.blogBody}>
        <MarkdownContent content={body} />
      </div>
    </>
  );
}
