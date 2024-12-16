'use client'
import React from "react"
import useSWR from 'swr'
import Product from '../widgets/Product'
const NewArrivalsGrid = () => {

console.log("NewArrivalsGrid")
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

  const { data, error, isLoading } = useSWR(`http://localhost:9000/store/products`,fetcher
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
