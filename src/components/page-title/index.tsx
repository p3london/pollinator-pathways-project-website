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
  ...rest
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h1 className={clsx(s.root, className)} {...rest}>
      {children}
    </h1>
  );
}
