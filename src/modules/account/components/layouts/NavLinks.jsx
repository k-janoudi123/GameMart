import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const NavLinks = (props) => {
  const { navClass } = props
  const pathname = usePathname()
  return (
    <ul className="flex items-center gap-12 font-semibold text-base py-4">
      <li className={`${pathname === "/" ? "active" : ""}`}>
        <Link
          href="/"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          HOME
        </Link>
      </li>
      <li className={`${pathname === "/store" ? "active" : ""}`}>
        <Link
          href="/store"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          SHOP
        </Link>
      </li>

      <li>
        <Link
          className="text-gray-100 hover:text-secondary transition-colors duration-200"
          href="/about"
        >
          ABOUT
        </Link>
      </li>

      <li className={pathname === "/contact" ? "active" : ""}>
        <Link
          href="/contact-one"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          CONTACT
        </Link>
      </li>
      <li className={pathname === "/search" ? "active" : ""}>
        {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
          <LocalizedClientLink
            className="sub-menu-item hover:text-secondary transition-colors duration-200"
            href="/search"
            scroll={false}
            data-testid="nav-search-link"
          >
            Search
          </LocalizedClientLink>
        )}
      </li>
    </ul>
  )
}

export default NavLinks
