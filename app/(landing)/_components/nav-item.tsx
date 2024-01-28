import Link from "next/link"
import { NavItemProps } from "../_types/nav-item-props"

const NavItem = ({label, href} : NavItemProps) => {
  return (
    <Link className="font-header text-light" href={href}>
        {label}
    </Link>
  )
}

export default NavItem