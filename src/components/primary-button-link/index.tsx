// Third-party
import clsx from "clsx";
import Link from "next/link";
import type { LinkProps } from "next/link";
// Styles
import s from "./style.module.css";
import { PropsWithChildren } from "react";

export function ButtonLink({
  children,
  className,
  styleVariant = "primary",
  ...props
}: PropsWithChildren<LinkProps> & {
  styleVariant?: "primary" | "secondary";
  className?: string;
  target?: string;
}) {
  return (
    <Link {...props} className={clsx(s.link, className, s[styleVariant])}>
      {children}
    </Link>
  );
}

export default function PrimaryButtonLink(
  props: PropsWithChildren<LinkProps> & { className?: string; target?: string }
) {
  return <ButtonLink {...props} styleVariant="primary" />;
}
