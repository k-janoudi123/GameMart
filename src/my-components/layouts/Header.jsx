"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// import { BsWhatsapp } from "../../assets/icons/icons";


import NavBar from "../navbar/NavBar";
const Navbar = (props) => {
  const { navClass } = props;

  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (navbar) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  // const toggleMenu = () => {
  //   setisMenu(!isMenu);
  //   const navigation = document.getElementById("navigation");
  //   if (navigation) {
  //     const anchorArray: HTMLAnchorElement[] = Array.from(
  //       navigation.getElementsByTagName("a")
  //     );
  //     anchorArray.forEach((element) => {
  //       element.addEventListener("click", (elem) => {
  //         const target = (elem.target as HTMLElement)?.getAttribute("href");
  //         if (target !== null && target !== undefined) {
  //           const nextSibling = (elem.target as HTMLElement)
  //             ?.nextElementSibling;
  //           if (nextSibling) {
  //             const submenu = nextSibling.nextElementSibling;
  //             if (submenu) {
  //               submenu.classList.toggle("open");
  //             }
  //           }
  //         }
  //       });
  //     });
  //   }
  // };

  return (
    <nav
      id="topnav"
      className="bg-blackshaded z-[999]
      text-gray-100 border border-black"
    >
      <div className="thin-line">
        <div className="container mx-auto">
          <div className="md:h-8 max-h-full gap-2 hidden md:flex md:flex-row items-center justify-end text-sm">
            <div className="flex hover:text-[#2fbbaf] items-center justify-between gap-2 cursor-pointer">
              <BsWhatsapp className="h-3 w-3  " />
              <p className=" ">+90 551 797 6666</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-1">
        <NavBar />
      </div>
    </nav>
  );
};

export default Navbar;
