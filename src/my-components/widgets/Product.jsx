"use client"
import React, { useState , useEffect } from "react"
// import {
//   MdKeyboardArrowRight,
//   FaArrowRight,
//   BiHeart,
//   BsEye,
// } from "../../assets/icons/icons"
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"
import { BiHeart } from "react-icons/bi"
import { BsEye } from "react-icons/bs"
import { sdk } from "@lib/config"
import { getRegion } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { fetchPrice } from "@lib/util/fetchPrice"
import Link from "next/link"
import Image from "next/image"

const Product = ({ index, image, id, title, price, handle, countryCode }) => {
    const [productPrice, setProductPrice] = useState(null)

    // Fetch or process the price only once when the component mounts or when 'price' changes
    useEffect(() => {
      const getPrice = async () => {
        try {
          const result = await fetchPrice(price, countryCode)
          setProductPrice(result)
        } catch (error) {
          console.error("Error fetching price:", error)
        }
      }

      getPrice()
    }, []) 
    // if (!productPrice) return <div>Loading...</div>
  return (
    <Link
      href={`/products/${handle}`}
      key={index}
      className=" flex flex-col justify-between  rounded-sm cursor-pointer
                  shadow-md dark:shadow-secondary group "
    >
      <div className="relative overflow-hidden flex-1 flex items-center">
        <Image
          src={image}
          className="cursor-pointer 
        transition-transform duration-500 my-auto h-full  transform group-hover:scale-110"
          width={500}
          height={800}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
        <div
          className="flex flex-col absolute bottom-0 pb-3 pt-2
        left-0 h-full   items-center justify-end w-full "
        ></div>
      </div>
      <div className="flex flex-col justify-center text-center">
        <div
          className="title  text-lg font-medium
                       hover:text-secondary duration-500 ease-in-out"
        >
          <p className="  pt-3 ">{title}</p>
          <p>{productPrice}</p>
        </div>
        {/* <p className=" mt-3 text-slate-400 ml-2">{desc}</p> */}

        <div className="mt-4    ">
          <div
            className="relative mb-3 inline-flex items-center font-normal 
                tracking-wide align-middle text-base text-center 
                   border-none after:content-[''] after:absolute after:h-px after:w-0 
               hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 
               after:start-0 after:duration-500 hover:text-secondary
              after:bg-secondary duration-500"
          >
            Add to Cart <FaArrowRight className="ms-1 text-[10px] " />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
