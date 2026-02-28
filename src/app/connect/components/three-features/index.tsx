import PrimaryButtonLink from "@/components/primary-button-link";
import s from "./style.module.css";

interface Item {
  iconSrc?: string;
  title: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
}

export default function ThreeFeatures({ items }: { items: Item[] }) {
  return (
    <div className={s.root}>
      <div className={s.items}>
        {items.map((item, idx) => {
          return (
            <div className={s.item} key={idx}>
              {typeof item["iconSrc"] === "string" ? (
                <img
                  className={s.itemIcon}
                  width={64}
                  height={64}
                  src={item.iconSrc}
                  alt=""
                />
              ) : null}
              <h2 className={s.itemTitle}>{item.title}</h2>
              <p className={s.itemText}>{item.text}</p>
              {typeof item["linkText"] === "string" &&
              typeof item["linkUrl"] === "string" ? (
                <PrimaryButtonLink className={s.itemLink} href={item.linkUrl}>
                  {item.linkText}
                </PrimaryButtonLink>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
