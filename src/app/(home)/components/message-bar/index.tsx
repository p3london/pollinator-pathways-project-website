import PrimaryButtonLink from "@/components/primary-button-link";
import { TinaMarkdownContent } from "tinacms/dist/rich-text";
import s from "./style.module.css";
import { MarkdownContent } from "@/components/markdown-content";

interface MessageBarContent {
  emoji: string;
  title: string;
  body: TinaMarkdownContent | TinaMarkdownContent[];
  links: {
    linkText: string;
    linkUrl: string;
  }[];
}

export default function MessageBar({
  emoji,
  title,
  body,
  links,
}: MessageBarContent) {
  return (
    <div className={s.root}>
      <div className={s.maxWidthContainer}>
        <div className={s.emoji}>{emoji}</div>
        <div className={s.textContainer}>
          <div className={s.title}>{title}</div>
          <MarkdownContent className={s.body} content={body} />
          {links && links.length > 0 ? (
            <div className={s.links}>
              {links.map((link, index) => (
                <PrimaryButtonLink
                  key={index}
                  className={s.link}
                  href={link.linkUrl}
                >
                  {link.linkText}
                </PrimaryButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
