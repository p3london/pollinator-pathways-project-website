// Components
import { BlogCard } from "../blog-card";
// Styles
import s from "./style.module.css";

export function BlogEntriesList({
  category,
  allBlogEntries,
}: {
  category: string;
  allBlogEntries: $TSFixMe;
}) {
  const blogEntries =
    category === "all"
      ? allBlogEntries
      : allBlogEntries.filter((entry: $TSFixMe) => {
          return (
            Array.isArray(entry.categories) &&
            entry.categories.includes(category)
          );
        });

  return (
    <div className={s.root}>
      {/* Note: removed category display for now, not needed yet */}
      {/*<BlogCategoryLinks blogCategories={blogCategories} />*/}
      {blogEntries.length > 0 ? (
        <ul className={s.blogEntriesList}>
          {blogEntries.map((entry: $TSFixMe) => (
            <li key={entry.filename}>
              <BlogCard entry={entry} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noEntries}>No blog posts yet. Check back soon!</p>
      )}
    </div>
  );
}
