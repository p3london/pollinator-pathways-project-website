// Components
import { MarkdownContent } from "@/components/markdown-content";
// Styles
import s from "./blog-entry.module.css";
// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export default function PageServer({
  data,
}: {
  data: {
    blog: {
      author: string;
      body: TinaMarkdownContent | TinaMarkdownContent[];
      category: string;
      coverImage: string;
      coverImageDescription: string;
      date: string;
      title: string;
    };
  };
}) {
  const {
    author,
    body,
    category,
    coverImage,
    coverImageDescription,
    date,
    title,
  } = data.blog;
  const metadata = {
    author,
    date,
    category,
  };
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
        <div className={s.metadataDivider}>•</div>
        <div className={s.readingTime}>{`2 min read`}</div>
        {/* <pre style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
						<code>{JSON.stringify(metadata, null, 2)}</code>
					</pre> */}
      </div>
      <h1 className={s.pageTitle}>{title}</h1>
      {coverImage ? (
        <img
          className={s.coverImage}
          src={coverImage}
          alt={coverImageDescription}
        />
      ) : null}
      <div className={s.blogBody}>
        <MarkdownContent content={body} />
      </div>
    </>
  );
}
