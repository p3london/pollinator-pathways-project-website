import Link from "next/link";
import { BLOG_CATEGORIES } from "../../../../../constants/blog-categories";

// Third-party
import clsx from "clsx";

import s from "./blog-category-links.module.css";

/**
 *
 * @param param0
 * @returns
 */
export function BlogCategoryLinks({ category }: { category: string }) {
  const blogCategories = [
    { label: "All", value: "all" },
    ...BLOG_CATEGORIES,
  ].map((entry) => {
    return { ...entry, isActive: entry.value === category };
  });

  return (
    <ul className={s.categoriesList}>
      {blogCategories.map((category) => (
        <li key={category.value}>
          <Link
            href={
              category.value === "all"
                ? `/blog`
                : `/blog/categories/${category.value}`
            }
            className={clsx(s.categoryLink, {
              [s.isActive]: category.isActive,
            })}
          >
            {category.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
