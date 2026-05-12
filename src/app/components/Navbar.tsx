import { MdMenu, MdPerson, MdShowChart, MdAssignment } from "react-icons/md";
import { CONTAINER_STYLES, ICON_SIZES, LAYOUT_STYLES } from "../constants/styles";
import { getNavButtonClasses } from "../utils/classNames";
import { NavLink } from "react-router";

export function Navbar() {
  const navItems = [
    { label: "Overview", icon: MdMenu, active: true },
    { label: "Tenants", icon: MdPerson },
    { label: "Financials", icon: MdShowChart },
    { label: "Statements", icon: MdAssignment },
    { label: "Add Expense", icon: MdAssignment }
  ];

  return (
    <nav className={CONTAINER_STYLES.nav}>
      <div className={LAYOUT_STYLES.nav_inner}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.label === "Overview" ? "/" : `/${item.label.toLowerCase().trim().replace(/\s+/g, '-')}`}
            className={({ isActive }) => getNavButtonClasses(isActive)}
          >
            <item.icon className={ICON_SIZES.sm} />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
