// Components
import BlogCategoryView from "./components/blog-category-view";

export default function Blog({ data, serverProps }: $TSFixMe) {
  const { allBlogEntries } = serverProps;
  const { title, subtitle } = data.blogLanding;

  return (
    <BlogCategoryView
      pageTitle={title}
      subtitle={subtitle}
      allBlogEntries={allBlogEntries}
      category="all"
    />
  );
}
