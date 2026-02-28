import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import type { NavItem } from "@/components/nav-bar/types";

export default function Placeholder({ data }: { data: $TSFixMe }) {
  const { nav, footer } = data.sitewide;

  /**
   * Array of objects.
   * Each object an either be:
   * - `{ label, href }` (target: _blank added automatically for external URLs)
   * - `{ label, items }`, where `items` is an array of `{ label, href }`.
   * Note there are NO DEEPER LEVELS of nesting. Does NOT need to be arbitrary.
   */
  const navBarItems: NavItem[] = nav.items;

  return (
    <LayoutRoot footer={footer} pathname="/" navBarItems={navBarItems}>
      <PagePlaceholder name="Sitewide">
        <pre>
          <code>{JSON.stringify({ data }, null, 2)}</code>
        </pre>
      </PagePlaceholder>
    </LayoutRoot>
  );
}
