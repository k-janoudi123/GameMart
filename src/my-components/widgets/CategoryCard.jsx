import React from "react"
// import {
//   MdKeyboardArrowRight,
//   FaArrowRight,
//   BiHeart,
//   BsEye,
// } from "../../assets/icons/icons"

import Link from "next/link"
import Image from "next/image"


const CategoryCard = ({ index, image, id, title, text, path }) => {
  return (
    <Link
     href={path}
      key={index}
      className="blog flex relative rounded-md cursor-pointer
                  shadow dark:shadow-gray-300 group overflow-hidden"
    >
      <Image
        src={image}
        className="cursor-pointer 
        transition-transform duration-500  transform group-hover:scale-110"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
      />
      <div
        className="flex flex-col absolute bottom-0 pb-3 pt-2
      left-0 h-full   items-center justify-end w-full black-shadow"
      >
        <h2 className="text-shadow-md  text-white font-bold lg:text-xl text-lg ">
          {text}
        </h2>
        {/* <p className=" text-shadow-md text-white font-semibold lg:text-xl text-sm">
          {text}
        </p> */}
      </div>
      {/* <div className="content text-left">
        <Link
          href={`/blog-detail/${id}`}
          className="title h5 text-lg font-medium
                       hover:text-indigo-600 duration-500 ease-in-out"
        >
          <p className=" items-center gap-3 mt-5  ml-2 ">
            <span className="text-slate-800 text-3xl  font-bold">
              {price}
              <span className="text-gray-400 text-sm font-light ">
                {"   "} 3 days 2 nights
              </span>
            </span>
          </p>
        </Link>
        <p className=" mt-3 text-slate-400 ml-2">{desc}</p>

        <div className="mt-4  ml-2 flex justify-end">
          <Link
            href={`/blog-detail/${id}`}
            className="relative mb-3 inline-flex mr-2 items-center font-normal 
                tracking-wide align-middle text-base text-center 
                   border-none after:content-[''] after:absolute after:h-px after:w-0 
               hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 
               after:start-0 after:duration-500 hover:text-[#0D5953]
              after:bg-[#0D5953] duration-500"
          >
            Book now <FaArrowRight className="ms-2 text-[10px] " />
          </Link>
        </div>
      </div> */}
    </Link>
  )
}

export default CategoryCard
