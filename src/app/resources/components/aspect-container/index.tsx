// Types
import { CSSProperties, PropsWithChildren } from "react";
// Styles
import s from "./style.module.css";

export function AspectContainer({
  children,
  aspectRatio = 1,
}: PropsWithChildren<{ aspectRatio?: number }>) {
  const aspectRatioStyle = {
    "--aspect-ratio-padding": `${aspectRatio * 100}%`,
  };
  return (
    <div className={s.root} style={aspectRatioStyle as CSSProperties}>
      <div className={s.inner}>{children}</div>
    </div>
  );
}
