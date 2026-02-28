// Components
import { PageTitle } from "@/components/page-title";
import { BlogEntriesList } from "../blog-entries-list";
import Spacer from "@/components/spacer";

export default function BlogCategoryView({ category }: { category: string }) {
  return (
    <main>
      <Spacer h="2rem" />
      <PageTitle>Blog</PageTitle>
      <Spacer h="1rem" />
      <BlogEntriesList category={category} />
    </main>
  );
}
