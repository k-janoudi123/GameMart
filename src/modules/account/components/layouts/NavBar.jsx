import React, { useState } from "react"
import Image from "next/image"
import NavLinks from "./NavLinks"
// import logo from "../../Images/logo/logo-wide.png";
// import SearchIcon from "../control/SearchIcon";
// import SocialMediaLinks from "../navbar/SocialMediaLinks";
// import SideBar from "../navbar/SideBar";
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Suspense } from "react"
import CartButton from "@modules/layout/components/cart-button"

import acccountImg from "../../../../images/home/icons/icons8-account-50.png"
import cartImg from "../../../../images/home/icons/icons8-cart-30.png"
import heartImg from "../../../../images/home/icons/icons8-heart-30.png"
import logo from "../../../../images/home/output-onlinepngtools.png"
import Link from "next/link"
const NavBar = () => {
  const [isMenu, setisMenu] = useState(false)
  return (
    <div className="flex items-center md:justify-between justify-between lg:p-0 pt-3">
      <Link href="/" className="py-1">
        <Image
          alt="GameMart Logo"
          src={logo}
          className="lg:w-[40px] w-[100px] lg:h-[40px]"
        />
      </Link>
      <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
        <NavLinks />
      </div>
      <ul
        className=" flex items-center 
           md:gap-7 gap-2 list-none mb-0"
      >
        {/* <SearchIcon /> */}
        <ul className="  flex lg:gap-1 gap-3 flex-row w-full  ">
          <li className="inline ps-1 mb-0">
            <LocalizedClientLink
              className="h-9 w-9 inline-flex items-center 
              justify-center tracking-wide align-middle duration-500 
              text-base text-center rounded-full 
                text-white "
              // className="hover:text-ui-fg-base"
              href="/account"
              data-testid="nav-account-link"
            >
              <Image
                className="lg:h-6 lg:w-6 h-6 w-6"
                src={acccountImg}
                alt=""
              />
            </LocalizedClientLink>
          </li>
          <li className="inline ps-1 mb-0">
            <Link
              href="https://1.envato.market/techwind-next"
              target="_blank"
              className="h-9 w-9 inline-flex items-center 
              justify-center tracking-wide align-middle duration-500 
              text-base text-center rounded-full 
                text-white "
            >
              <Image className="lg:h-6 lg:w-6 h-6 w-6" src={heartImg} alt="" />
            </Link>
          </li>
          <li className="inline ps-1 mb-0">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="h-9 inline-flex items-center 
  justify-center tracking-wide align-middle duration-500 
  text-base text-center rounded-full 
    text-white "
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </li>
        </ul>

        {/* <SideBar /> */}
      </ul>
    </div>
  )
}

export default NavBar


{/* <Link
  href="/"
  target="_blank"
  className="h-9 w-9 inline-flex items-center 
  justify-center tracking-wide align-middle duration-500 
  text-base text-center rounded-full 
    text-white "
>
  <Image className="lg:h-6 lg:w-6 h-6 w-6" src={cartImg} alt="" />
</Link> */}