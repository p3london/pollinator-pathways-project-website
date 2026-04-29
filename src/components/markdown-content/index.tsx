import clsx from "clsx";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import { ButtonLink } from "../primary-button-link";
// Styles
import s from "./markdown-content.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { stringFromTinaAst } from "@/app/projects/utils/string-from-tina-ast";

function mdA(props: $TSFixMe) {
  const { type, title, url, _content_source, children, ...restProps } = props;
  // Get text from children
  const childAstNodes = children.props?.content;
  const text = stringFromTinaAst({ type: "root", children: childAstNodes });
  // Determine if it's a PDF link based on both URL and text
  // NOTE: alternative might be to only let "link alone in paragraph"
  // be a PDF link, since these links don't display well inline...
  // But this seems fine for now, and author control is a little more direct.
  const isPdfLink = url?.endsWith(".pdf") && text?.endsWith(".pdf");

  if (isPdfLink) {
    const icon = "/uploads/Site-wide/icon-file.png";
    return (
      <ButtonLink
        {...restProps}
        styleVariant="primary"
        href={url}
        target="_blank"
      >
        <span className={s.mdA_iconAndText}>
          <img className={s.mdA_buttonIcon} src={icon} alt="" />
          {children}
        </span>
      </ButtonLink>
    );
  } else {
    return (
      <a {...restProps} href={url} className={s.mdA}>
        {children}
      </a>
    );
  }
}

const markdownComponentMapping = {
  a: mdA,
};

export function MarkdownContent({
  content,
  className,
}: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
}) {
  return (
    <div className={clsx(s.root, className)}>
      <TinaMarkdown content={content} components={markdownComponentMapping} />
    </div>
  );
}
