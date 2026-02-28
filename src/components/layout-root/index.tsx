import Min100Layout from "../min-100-layout/min-100-layout";
import Footer from "../footer/footer";
import SiteHeader from "../site-header/site-header";
import NavBar from "../nav-bar/nav-bar";
// Types
import type { PropsWithChildren } from "react";
import type { NavItem, NavSubmenu } from "../nav-bar/types";

/**
 * TODO: move this into tina CMS somehow.
 * Already mostly moved in, but need to make sure LayoutRoot is
 * using it in all instances.
 */
import { NAV_BAR_ITEMS } from "./content";

export default function LayoutRoot({
  children,
  footer,
  pathname,
  navBarItems = NAV_BAR_ITEMS,
}: PropsWithChildren<{
  footer: $TSFixMe;
  pathname: $TSFixMe;
  navBarItems?: NavItem[];
}>) {
  const navBarItemsWithActive: NavItem[] = navBarItems.map((item) => {
    if ("links" in item) {
      const dropdown: NavSubmenu = {
        ...item,
        links: item.links.map((link) => {
          return {
            ...link,
            isCurrentPage: link.href === pathname,
            target: link.href?.startsWith("http") ? "_blank" : undefined,
          };
        }),
      };
      return dropdown;
    } else {
      const link: NavItem = {
        ...item,
        isCurrentPage: item.href === pathname,
        target: item.href?.startsWith("http") ? "_blank" : undefined,
      };
      return link;
    }
  });

  return (
    <Min100Layout footer={<Footer {...footer} />}>
      <SiteHeader />
      <div style={{ zIndex: 1 }}>
        <NavBar navBarItems={navBarItemsWithActive} />
      </div>
      <div style={{ zIndex: 0 }}>{children}</div>
    </Min100Layout>
  );
}
