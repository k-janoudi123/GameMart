import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = (props) => {
  const { navClass } = props
  const pathname = usePathname()
  return (
    <ul className={`navigation-menu ${navClass}`}>
      <li className={`${pathname === "/" ? "active" : ""}`}>
        <Link href="/" className="sub-menu-item">
          Home
        </Link>
      </li>
      <li className={`${pathname === "/hotels" ? "active" : ""}`}>
        <Link href="/hotels" className="sub-menu-item">
          Hotels
        </Link>
      </li>
      <li
        className={`${
          ["/ui-components", "/documentation", "/changelog"].includes(pathname)
            ? "active"
            : ""
        } has-submenu parent-menu-item`}
      >
        <Link href="#">Cars</Link>
      </li>
      <li>
        <Link className="text-gray-100" href="#">
          Tours
        </Link>
      </li>

      <li className={pathname === "/contact-one" ? "active" : ""}>
        <Link href="/contact-one" className="sub-menu-item">
          About
        </Link>
      </li>
      <li className={pathname === "/contact-one" ? "active" : ""}>
        <Link href="/contact-one" className="sub-menu-item">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
