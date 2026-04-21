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

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export const metadata = {
  title: "Blog" + METADATA_TITLE_SUFFIX,
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};
