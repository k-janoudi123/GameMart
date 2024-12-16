"use client"
import React from "react"
import useSWR from "swr"
import Product from "../widgets/Product"
import { sdk } from "@lib/config"
import { getRegion } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
const NewArrivalsGrid = ({ countryCode }: any) => {
  console.log("NewArrivalsGrid")

  const fetchProductsAndPrice = async () => {
    try {
      const { products } = await sdk.store.product.list(
        { fields: "handle" },
        { next: { tags: ["products"] } }
      )

      const region = await getRegion(countryCode)
      const pricedProduct = await getProductByHandle(
        products[0].handle,
        region.id
      )

      if (!pricedProduct || !pricedProduct.variants?.length) {
        throw new Error("No product variants found")
      }

      // Assuming you're picking the first variant for price fetching
      const variantId = pricedProduct.variants[0].id

      // Correctly passing an object with `product` and `variantId`
      const price = await getProductPrice({
        product: pricedProduct, // Pass the product object
        variantId: variantId, // Pass the variant ID
      })

      console.log("Priced Product:", pricedProduct)
      console.log("Price:", price)

      return products // Return products if needed
    } catch (error) {
      console.error("Error fetching products:", error)
      throw error // Re-throw the error for further handling
    }
  }

  fetchProductsAndPrice()

  const fetcher = async (input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        "x-publishable-api-key":
          "pk_41dbe9bc46aa2d71862a6178f2b927647481cdeba12cc6305a4c892f978ac259",
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
    <div
      className="mx-auto container lg:px-10  pb-10 justify-center hidden px-2 lg:grid lg:grid-cols-4 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
    >
      {data.products.map((item, index) => {
        return (
          <Product
            key={index}
            index={index}
            image={item.thumbnail}
            handle={item.handle}
            id={item.id}
            price={item.price}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default NewArrivalsGrid
