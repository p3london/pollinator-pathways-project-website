"use client";

import { useId, useRef, useState, useEffect } from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import s from "./nav-dropdown.module.css";
import useOnClickOutside from "@/lib/hooks/use-on-click-outside";
import IconChevronDown from "@/icons/icon-chevron-down";

// Types
import type { NavLink } from "../types";

export default function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: NavLink[];
}) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([rootRef], () => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);

  const dropdownId = useId();

  /**
   * This effect ensures that when a visitor navigates to a different page,
   * the NavDropdown component closes. This is necessary because, during
   * client-side navigation, the NavDropdown component remains mounted.
   */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={s.root} ref={rootRef} key={pathname}>
      <button
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        className={clsx(s.trigger, {
          [s.isOpen]: isOpen,
          [s.isCurrentPage]: links.some((link) => link.isCurrentPage),
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span className={clsx(s.triggerIcon, { [s.isOpen]: isOpen })}>
          <IconChevronDown />
        </span>
      </button>
      <ul id={dropdownId} className={clsx(s.list, { [s.isOpen]: isOpen })}>
        {links.map((link) => {
          return (
            <li key={link.label}>
              <NextLink
                className={clsx(s.link, {
                  [s.isCurrentPage]: link.isCurrentPage,
                })}
                href={link.href || "#"}
                target={link.target}
              >
                {link.label}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
