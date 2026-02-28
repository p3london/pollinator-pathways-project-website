// Components
import NavDropdown from "./nav-dropdown/nav-dropdown";
import NavLink from "./nav-link/nav-link";
// Types
import type { NavItem } from "./types";
// Styles
import s from "./nav-bar.module.css";

function NavBar({ navBarItems }: { navBarItems: NavItem[] }) {
  return (
    <nav className={s.root} aria-label="Main navigation">
      <ul className={s.navList}>
        {navBarItems.map((item) => {
          if ("links" in item) {
            return (
              <li key={item.label}>
                <NavDropdown label={item.label} links={item.links} />
              </li>
            );
          } else {
            return (
              <li key={item.label}>
                <NavLink
                  href={item.href || "#"}
                  label={item.label}
                  target={item.target}
                  isCurrentPage={item.isCurrentPage}
                />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
