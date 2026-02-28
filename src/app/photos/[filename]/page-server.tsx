// Components
import { PageTitle } from "@/components/page-title";
import { ImageGrid } from "../components/image-grid";
// Styles
import s from "./photos-entry.module.css";

export default function PageServer({ data }: { data: $TSFixMe }) {
  const { title, images } = data.photos;
  return (
    <>
      <div className={s.pageTitle}>
        <PageTitle>{title}</PageTitle>
      </div>
      <ImageGrid images={images} />
    </>
  );
}
