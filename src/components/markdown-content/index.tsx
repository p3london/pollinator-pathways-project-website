import clsx from "clsx";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import { ButtonLink } from "../primary-button-link";
// Styles
import s from "./markdown-content.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

function mdA(props: $TSFixMe) {
  const { type, title, url, _content_source, children, ...restProps } = props;
  const isPdfLink = url?.endsWith(".pdf");
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
