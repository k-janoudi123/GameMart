"use client"
import React from "react"
import useSWR from "swr"
import Product from "../widgets/Product"
import { sdk } from "@lib/config"
import { getRegion } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import fetcher from "@lib/util/fetcher"
const NewArrivalsGrid = ({ countryCode }: any) => {
  console.log("NewArrivalsGrid")
  let price = ""
  // const fetchPrice = async (product: any) => {
  //   try {
  //     // const { products } = await sdk.store.product.list(
  //     //   { fields: "handle" },
  //     //   { next: { tags: ["products"] } }
  //     // )

  //     const region = await getRegion(countryCode)
  //     const pricedProduct = await getProductByHandle(product.handle, region.id)

  //     if (!pricedProduct || !pricedProduct.variants?.length) {
  //       throw new Error("No product variants found")
  //     }

  //     const variantId = pricedProduct.variants[0].id

  //     const price = await getProductPrice({
  //       product: pricedProduct,
  //       variantId: variantId,
  //     })

  //     // console.log("Priced Product:", pricedProduct)
  //     console.log("Price:", price.cheapestPrice?.calculated_price)

  //     return price.cheapestPrice?.calculated_price
  //   } catch (error) {
  //     console.error("Error fetching products:", error)
  //     throw error // Re-throw the error for further handling
  //   }
  // }

  // const fetchData = async () => {
  //   try {
  //     const { products } = await sdk.store.product.list(
  //       { fields: "handle" },
  //       { next: { tags: ["products"] } }
  //     )

  //     console.log("data:", products)

  //     return products
  //   } catch (error) {
  //     console.error("Error fetching products:", error)
  //     throw error // Re-throw the error for further handling
  //   }
  // }

  // fetchData()

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
    console.log("data with fetcher", data.products)
    console.log("fetched price:" + data.products[0])
  }
  if (!productsData) return <div>Loading...</div>
  if (error) return "error"
  return (
    <div
      className="mx-auto container lg:px-10  pb-10 justify-center  px-2 lg:grid lg:grid-cols-4 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
    >
      {data.products.map((item: any, index: any) => {
        return (
          <Product
            countryCode={countryCode}
            key={index}
            index={index}
            image={item.thumbnail}
            handle={item.handle}
            id={item.id}
            price={item}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default NewArrivalsGrid
