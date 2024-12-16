"use client"
import { useState } from "react"
import { InstantSearch } from "react-instantsearch-hooks-web"
import { useRouter } from "next/navigation"
import { MagnifyingGlassMini } from "@medusajs/icons"
// import { useEffect, useRef, useCallback } from "react"
import Product from "../../../../my-components/widgets/Product"
import img1 from "../../../../images/product/t-shirt.jpg"
import img2 from "../../../../images/product/ps5-controller.jpg"
import Link from "next/link"
import { SEARCH_INDEX_NAME, searchClient } from "@lib/search-client"
import Hit from "@modules/search/components/hit"
import Hits from "@modules/search/components/hits"
import SearchBox from "@modules/search/components/search-box"
import useSWR from "swr"
export default function SearchModal() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  // const searchRef = useRef<HTMLDivElement>(null)

  // const closeModal = useCallback(() => {
  //   router.back()
  // }, [router])

  // // Close modal on outside click
  // const handleOutsideClick = useCallback(
  //   (event: MouseEvent) => {
  //     if (event.target === searchRef.current) {
  //       closeModal()
  //     }
  //   },
  //   [closeModal]
  // )

  // useEffect(() => {
  //   window.addEventListener("click", handleOutsideClick)
  //   return () => {
  //     window.removeEventListener("click", handleOutsideClick)
  //   }
  // }, [handleOutsideClick])

  // // Disable scroll when modal is open
  // useEffect(() => {
  //   document.body.style.overflow = "hidden"
  //   return () => {
  //     document.body.style.overflow = "unset"
  //   }
  // }, [])

  // // Close modal on "Escape" key press
  // useEffect(() => {
  //   const handleEsc = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       closeModal()
  //     }
  //   }
  //   window.addEventListener("keydown", handleEsc)
  //   return () => {
  //     window.removeEventListener("keydown", handleEsc)
  //   }
  // }, [closeModal])

  const searchData = [
    {
      id: 1,

      Image: img1,
      price: 100,
      text: "PlayStation",
    },
    {
      id: 2,
      Image: img2,
      price: 100,
      text: "PC Gaming",
    },
    {
      id: 3,
      Image: img1,
      price: 100,
      text: "Xbox",
    },
    {
      id: 4,
      Image: img2,
      price: 100,
      text: "Nintendo",
    },
    {
      id: 5,
      Image: img2,
      price: 100,
      text: "Nintendo",
    },
    {
      id: 6,
      Image: img2,
      price: 100,
      text: "Nintendo",
    },
    {
      id: 7,
      Image: img2,
      price: 100,
      text: "Nintendo",
    },
    {
      id: 8,
      Image: img2,
      price: 100,
      text: "Nintendo",
    },
  ]
  const fetcher = async (input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        "x-publishable-api-key":
          "pk_41dbe9bc46aa2d71862a6178f2b927647481cdeba12cc6305a4c892f978ac259", // Replace with your actual API key
      },
    })
    return response.json()
  }

  const { data, error, isLoading } = useSWR(
    `http://localhost:9000/store/products`,
    fetcher
  )

  let productsData = ""
  if (isLoading) {
    console.log("Loading...")
  } else if (error) {
    console.error("Error fetching data:", error)
  } else {
    productsData = data.products
    console.log(data.products)
  }
  if (!productsData) return <div>Loading...</div>
  if (error) return "error"
  return (
    <div className="relative z-[50] over">
      <div
        className="fixed inset-0  bg-opacity-75 backdrop-blur-md h-full w-screen"
        aria-hidden="true"
      />
      <div
        className=" inset-0 px-5 sm:p-0"
        // ref={searchRef}
        // role="dialog"
        // aria-modal="true"
      >
        <div className="flex flex-col justify-start w-full h-fit p-5 items-center text-left align-middle transition-all max-h-[75vh] bg-transparent shadow-none">
          <div
            className="flex absolute flex-col w-full sm:w-fit"
            data-testid="search-modal-container"
          >
            <div className="flex items-center justify-center">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent mx-0 z-[90] w-56 border rounded-md px-3 py-1 border-grey-20  h-9
           focus:outline-none text-gray-900"
                placeholder="Search here..."
              />
              <Link
                className="h-9 px-2 
              text-center text-white flex items-center cursor-pointer rounded-md bg-slate-950"
                href="/"
              >
                Cancel
              </Link>
            </div>
            <div
              className="mx-auto mt-12 container lg:px-10  pb-10 justify-center  px-2 lg:grid lg:grid-cols-4 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
            >
              {data.products
                ?.filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <Product
                      key={index}
                      index={index}
                      image={item.thumbnail}
                      id={item.id}
                      price={item.title}
                      title={item.title}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
