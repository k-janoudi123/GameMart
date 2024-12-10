import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import CategoryGrid from "../../../my-components/layouts/CategoryGrid"
import Product from "../../../my-components/widgets/Product"
import img1 from "../../../images/product/t-shirt.jpg"
import img2 from "../../../images/product/ps5-controller.jpg"
import discountBanner from "../../../images/home/discount-banner.webp"
import tv1 from "../../../images/home/tv.webp"
import tv2 from "../../../images/home/tv2.jpg"
import pc1 from "../../../images/home/pc1.jpg"
import pc2 from "../../../images/home/pc2.jpg"
import pc3 from "../../../images/home/pc3.jpg"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  const data = [
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

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div>
        <CategoryGrid />
        {/* <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul> */}
        <div className="py-20">
          <Image
            src={discountBanner}
            width={1920}
            height={800}
            alt=""
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <h1
            className="text-secondary container mx-auto text-center 
          text-2xl font-semibold mb-5"
          >
            New Arrival
          </h1>
          <div
            className="mx-auto container lg:px-10  pb-10 justify-center hidden px-2 lg:grid lg:grid-cols-4 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
          >
            {data.map((item, index) => {
              return (
                <Product
                  key={index}
                  index={index}
                  image={item.Image.src}
                  id={item.id}
                  price={item.price}
                  title={item.text}
                />
              )
            })}
          </div>
        </div>
        <div>
          <div
            className="mx-auto container lg:px-10  pb-10 justify-center hidden px-2 lg:grid lg:grid-cols-2 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
          >
            <Image
              src={tv1}
              width={1920}
              height={800}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={tv2}
              width={1920}
              height={800}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            className="mx-auto container lg:px-10  pb-10 justify-center hidden px-2 lg:grid lg:grid-cols-3 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
          >
            <Image
              src={pc1}
              width={1000}
              height={800}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={pc2}
              width={1020}
              height={800}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={pc3}
              width={1020}
              height={800}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
