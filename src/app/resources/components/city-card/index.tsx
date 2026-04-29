import Link from "next/link";
import { AspectContainer } from "../aspect-container";
// Styles
import s from "./style.module.css";

export function CityCard({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: string;
}) {
  return (
    <Link className={s.cityCard} href={url} target="_blank">
      <AspectContainer aspectRatio={0.66}>
        <span className={s.cityCard_rounder}>
          <img className={s.cityCard_image} src={image} alt="" />
        </span>
      </AspectContainer>
      <span className={s.cityCard_text}>{name}</span>
    </Link>
  );
}
