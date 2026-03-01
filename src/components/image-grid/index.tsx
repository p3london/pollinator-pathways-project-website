import s from "./style.module.css";

export function ImageGrid({ images }: { images: (string | null)[] }) {
  const validImages = images.filter((image) => image !== null);
  if (!validImages.length) return null;
  return (
    <div className={s.root}>
      {validImages.map((image) => {
        return (
          <div
            key={image}
            style={{
              position: "relative",
              border: "1px solid lightgray",
              width: "240px",
              height: "240px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
