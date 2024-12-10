import React, { useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
// import logo from "../../Images/logo/logo-wide.png";
// import SearchIcon from "../control/SearchIcon";
// import SocialMediaLinks from "../navbar/SocialMediaLinks";
// import SideBar from "../navbar/SideBar";
import Link from "next/link";
const NavBar = () => {
  const [isMenu, setisMenu] = useState(false);
  return (
    <div className="flex items-center md:justify-between justify-between lg:p-0 pt-3">

      <Link href="/">
      <Image alt="enjaz logo" src={logo} className="lg:w-[190px] w-[150px] " />
      </Link>
      <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
        <NavLinks />
      </div>
      <ul
        className=" flex items-center
           md:gap-7 gap-2 list-none mb-0"
      >
        <SearchIcon />
        <div className="hidden lg:inline m-autoy p-0 container">
          <SocialMediaLinks />
        </div>
        <SideBar />
      </ul>
    </div>
  );
};

export default NavBar;
