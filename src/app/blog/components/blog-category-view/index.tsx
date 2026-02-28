// Components
import { PageTitle } from "../page-title";
import { BlogEntriesList } from "../blog-entries-list";
import Spacer from "@/components/spacer";
// Styles
import s from "./blog-category-view.module.css";

export default function BlogCategoryView({ category }: { category: string }) {
  return (
    <main className={s.placeholder}>
      <Spacer h="2rem" />
      <PageTitle>Blog</PageTitle>
      <Spacer h="1rem" />
      <BlogEntriesList category={category} />
    </main>
  );
}
