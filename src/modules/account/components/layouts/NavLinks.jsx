import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreRegion } from "@medusajs/types"

const NavLinks = (props) => {
  const { navClass } = props
  const pathname = usePathname()
  return (
    <ul className="lg:flex hidden items-center gap-12 font-semibold text-base py-4">
      <li >
        <LocalizedClientLink
          href="/"
          className={`${
            pathname === "/dk" ? "text-secondary" : ""
          } sub-menu-item hover:text-secondary transition-colors duration-200`}
        >
          HOME
        </LocalizedClientLink>
      </li>
      <li>
        <LocalizedClientLink
          href="/store"
          className={`${
            pathname === "/dk/store" ? "text-secondary" : ""
          } sub-menu-item hover:text-secondary transition-colors duration-200`}
        >
          SHOP
        </LocalizedClientLink>
      </li>

      <li>
        <LocalizedClientLink
          className={`${
            pathname === "/dk/about" ? "text-secondary" : ""
          } sub-menu-item hover:text-secondary transition-colors duration-200`}
          href="/about"
        >
          ABOUT
        </LocalizedClientLink>
      </li>

      <li className={pathname === "/contact" ? "active" : ""}>
        <LocalizedClientLink
          href="/contact"
          className={`${
            pathname === "/dk/contact" ? "text-secondary" : ""
          } sub-menu-item hover:text-secondary transition-colors duration-200`}
        >
          CONTACT
        </LocalizedClientLink>
      </li>
      <li className={pathname === "/search" ? "active" : ""}>
        {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
          <LocalizedClientLink
            className={`${
              pathname === "/dk/search" ? "text-secondary" : ""
            } sub-menu-item hover:text-secondary transition-colors duration-200`}
            href="/search"
            scroll={false}
            data-testid="nav-search-link"
          >
            SEARCH
          </LocalizedClientLink>
        )}
      </li>
    </ul>
  )
}

export default NavLinks
