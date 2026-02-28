/**
 *
 * @param param0
 * @returns
 */
export function BlogCategoryLinks({
  blogCategories,
}: {
  blogCategories: $TSFixMe;
}) {
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
