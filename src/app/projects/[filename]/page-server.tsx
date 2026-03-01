// Components
import { MarkdownContent } from "@/components/markdown-content";
// Styles
import s from "./project-entry.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { PageTitle } from "@/components/page-title";
import { ProjectQuery } from "../../../../tina/__generated__/types";
import { ImageGrid } from "@/components/image-grid";
import Spacer from "@/components/spacer";

export default function PageServer({ data }: { data: ProjectQuery }) {
  const { body, coverImage, coverImageAlt, title, images } = data.project;

  const hasBodyContent =
    body !== null && Array.isArray(body.children) && body.children.length > 0;
  return (
    <div className={s.root}>
      <Spacer h="2rem" />
      <PageTitle>{title}</PageTitle>
      <Spacer h="2rem" />

      {coverImage ? (
        <div className={s.coverImageContainer}>
          <img
            className={s.coverImage}
            src={coverImage}
            alt={coverImageAlt || ""}
          />
        </div>
      ) : null}
      {hasBodyContent ? (
        <div className={s.projectBody}>
          <MarkdownContent content={body} />
        </div>
      ) : null}
      <Spacer h="2rem" />
      {Array.isArray(images) ? (
        <div className={s.projectImages}>
          <ImageGrid images={images} />
        </div>
      ) : null}
      <Spacer h="8rem" />
    </div>
  );
}
