// Components
import { MarkdownContent } from "@/components/markdown-content";
// Styles
import s from "./project-entry.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { PageTitle } from "@/components/page-title";

export default function PageServer({ data }: { data: $TSFixMe }) {
  const { body, coverImage, coverImageDescription, title } = data.project;
  return (
    <>
      <div className={s.pageTitle}>
        <PageTitle>{title}</PageTitle>
      </div>
      {coverImage ? (
        <img
          className={s.coverImage}
          src={coverImage}
          alt={coverImageDescription}
        />
      ) : null}
      <div className={s.projectBody}>
        <MarkdownContent content={body} />
      </div>
    </>
  );
}
