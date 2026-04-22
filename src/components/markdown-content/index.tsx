import clsx from "clsx";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Styles
import s from "./markdown-content.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export function MarkdownContent({
  content,
  className,
}: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
}) {
  return (
    <div className={clsx(s.root, className)}>
      <TinaMarkdown content={content} />
    </div>
  );
}
