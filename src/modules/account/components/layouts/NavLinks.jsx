import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreRegion } from "@medusajs/types"

const NavLinks = (props) => {
  const { navClass } = props
  const pathname = usePathname()
  return (
    <ul className="flex items-center gap-12 font-semibold text-base py-4">
      <li className={`${pathname === "/" ? "active" : ""}`}>
        <LocalizedClientLink
          href="/"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          HOME
        </LocalizedClientLink>
      </li>
      <li className={`${pathname === "/store" ? "active" : ""}`}>
        <LocalizedClientLink
          href="/store"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          SHOP
        </LocalizedClientLink>
      </li>

      <li>
        <LocalizedClientLink
          className="text-gray-100 hover:text-secondary transition-colors duration-200"
          href="/about"
        >
          ABOUT
        </LocalizedClientLink>
      </li>

      <li className={pathname === "/contact" ? "active" : ""}>
        <LocalizedClientLink
          href="/contact"
          className="sub-menu-item hover:text-secondary transition-colors duration-200"
        >
          CONTACT
        </LocalizedClientLink>
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
