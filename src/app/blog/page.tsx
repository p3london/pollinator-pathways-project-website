// Components
import LayoutRoot from "@/components/layout-root";
import BlogCategoryView from "./components/blog-category-view";
// ...
import getSitewideData from "@/lib/get-sitewide-data";

export default async function Blog() {
  const { footer, nav } = await getSitewideData();
  return (
    <LayoutRoot footer={footer} pathname="/blog" navBarItems={nav.items}>
      <BlogCategoryView category="all" />
    </LayoutRoot>
  );
}
