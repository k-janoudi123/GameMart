import React, { useState } from "react"

import Link from "next/link"

import Image from "next/image"
import { IconContext } from "react-icons"
import menuImg from "../../../../assets/icons/icons-menu-white.png"

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
function SideBar() {
  const [sidebar, setSidebar] = useState(false)

  //   const showSidebar = () => setSidebar(true);

 const SidebarData = [
   {
     title: "Home",
     path: "/",
     icon: <AiIcons.AiFillHome />,
     cName: "nav-text",
   },
   {
     title: "Shop",
     path: "/store",
     icon: <FaIcons.FaBuilding />,
     cName: "nav-text",
   },
   {
     title: "About",
     path: "/about",
     icon: <IoIcons.IoMdPeople />,
     cName: "nav-text",
   },
   {
     title: "Contact",
     path: "/contact",
     icon: <FaIcons.FaEnvelopeOpenText />,
     cName: "nav-text",
   },
   {
     title: "Seach",
     path: "/search",
     icon: <IoIcons.IoMdSearch />,
     cName: "nav-text",
   },
 ]

  return (
    <div className="lg:hidden container mx-auto z-[999]">
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbar z-50">
          <Link href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}

        <Image
          src={menuImg}
          width={40}
          height={38}
          alt="menu icon"
          className={`cursor-pointer z-30 p-[6px] inline lg:hidden rounded-lg
           ${sidebar ? "" : "bg-[#FF9C01]"}`}
          onClick={() => setSidebar(true)}
        />
        <nav className={`${sidebar ? "nav-menu active" : "nav-menu"} `}>
          <ul
            className="nav-menu-items flex flex-col"
            onClick={() => setSidebar(false)}
          >
            <li className="navbar-toggle">
              <Link href="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            {/* <li className="nav-icon flex mt-auto mb-4 mr-8">
              <SocialMediaLinks />
            </li> */}
            {/* <div className="container mx-auto">
              <div className="h-8 max-h-full gap-2  flex flex-row items-center justify-end text-sm">
                <div className="flex items-center justify-between gap-2">
                  <BsWhatsapp className="h-3 w-3" />
                  <p className="cursor-pointer">+90 551 797 6666</p>
                </div>
                <LangDropDown />
              </div>
            </div> */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default SideBar
