// Components
import { PageTitle } from "@/components/page-title";
import { BlogEntriesList } from "../blog-entries-list";
import Spacer from "@/components/spacer";
import s from "./blog-category-view.module.css";

export default function BlogCategoryView({
  category,
  pageTitle,
  subtitle,
  allBlogEntries,
}: {
  category: string;
  pageTitle: string;
  subtitle: string;
  allBlogEntries: $TSFixMe;
}) {
  return (
    <main>
      <Spacer h="2rem" />
      <PageTitle>{pageTitle}</PageTitle>
      {/*<Spacer h="2rem" />*/}
      {typeof subtitle === "string" && subtitle !== "" ? (
        <p className={s.subtitle}>{subtitle}</p>
      ) : null}
      <Spacer h="2rem" />
      <BlogEntriesList allBlogEntries={allBlogEntries} category={category} />
    </main>
  );
}
