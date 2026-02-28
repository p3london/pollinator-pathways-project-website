"use server";

// Third-party
import clsx from "clsx";
// Utils
import { fetchBlogList } from "../../utils/fetch-blog-list";
import Link from "next/link";
// Styles
import s from "./style.module.css";

export async function BlogEntriesList({ category }: { category: string }) {
  const allBlogEntries = await fetchBlogList();

  const blogEntries =
    category === "all"
      ? allBlogEntries
      : allBlogEntries.filter((entry) => {
          return (
            Array.isArray(entry.categories) &&
            entry.categories.includes(category)
          );
        });

  return (
    <>
      {/* Note: removed category display for now, not needed yet */}
      {/*<BlogCategoryLinks blogCategories={blogCategories} />*/}
      {blogEntries.length > 0 ? (
        <ul className={s.blogEntriesList}>
          {blogEntries.map((entry) => (
            <li key={entry.filename}>
              <Link href={`/blog/${entry.filename}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noEntries}>
          No blog entries found. <Link href="/blog">View all blog posts</Link>.
        </p>
      )}
    </>
  );
}
