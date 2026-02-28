import { TinaMarkdown } from "tinacms/dist/rich-text";
// Styles
import s from "./markdown-content.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export function MarkdownContent({
  content,
}: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}) {
  return (
    <div className={s.root}>
      <TinaMarkdown content={content} />
    </div>
  );
}
