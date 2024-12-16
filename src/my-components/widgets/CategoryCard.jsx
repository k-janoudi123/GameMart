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
      </div>
    </Link>
  )
}

export default CategoryCard
