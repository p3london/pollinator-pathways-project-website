// Third-party
import clsx from "clsx";
// Types
import React from "react";
import type { HTMLProps } from "react";
// Styles
import s from "./page-title.module.css";

export function PageTitle({
  children,
  className,
  e = "h1",
  ...rest
}: HTMLProps<HTMLHeadingElement> & { e?: React.ElementType }) {
  const Element = e as React.ElementType;
  return (
    <Element className={clsx(s.root, className)} {...rest}>
      {children}
    </Element>
  );
}
