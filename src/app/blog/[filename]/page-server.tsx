import PagePlaceholder from "@/components/page-placeholder/page";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import s from "./blog-entry.module.css";
import { Placeholder } from "@/components/placeholder";

export default function PageServer({ data }: { data: $TSFixMe }) {
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
      {/* <Placeholder name="Breadcrumbs">
				<div className={s.breadcrumbs}>
					<Link className={s.breadcrumbItemLinked} href={`/blog`}>{`Blog`}</Link>
					<div className={s.breadcrumbItemDivider}>{`/`}</div>
					<div className={s.breadcrumbItemUnlinked}>{title}</div>
				</div>
			</Placeholder> */}
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
        <TinaMarkdown content={body} />
      </div>
    </>
  );
}
