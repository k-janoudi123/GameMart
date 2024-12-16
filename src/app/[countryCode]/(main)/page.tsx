import { Metadata } from "next"
import Hero from "@modules/home/components/hero"

import CategoryGrid from "../../../my-components/layouts/CategoryGrid"
import NewArrivalsGrid from "../../../my-components/layouts/NewArrivalsGrid"
import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Product from "../../../my-components/widgets/Product"
import img1 from "../../images/product/t-shirt.jpg"
import img2 from "../../images/product/ps5-controller.jpg"
import { Suspense } from "react"

import { getProductPrice } from "@lib/util/get-product-price"
import PaginatedProducts from "../../../modules/store/templates/paginated-products"
import discountBanner from "../../../images/home/discount-banner.webp"
import tv1 from "../../../images/home/tv.webp"
import tv2 from "../../../images/home/tv2.jpg"
import pc1 from "../../../images/home/pc1.jpg"
import pc2 from "../../../images/home/pc2.jpg"
import pc3 from "../../../images/home/pc3.jpg"
import Image from "next/image"
import { getProductsList } from "../../../lib/data/products"
import { getRegion } from "@lib/data/regions"
// import { listCollections } from "@lib/data/collections"
import { sdk } from "@lib/config"
export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  // const { collections } = await listCollections({
  //   fields: "*products",
  // })
  const region = await getRegion(countryCode)

const { products } = await sdk.store.product.list(
  { fields: "handle" },
  { next: { tags: ["products"] } }
)


console.log("test")
console.log("testing" + products)
  // if (!collections || !region) {
  //   return null
  // }
  // const collections = await getCollectionsWithProducts(countryCode)
  // const region = await getRegion(countryCode)

  // async function fetchProducts() {
  //   const result = await getProductsList({
  //     pageParam: 2, 
  //     queryParams: { limit: 12 }, 
  //     countryCode: "US", 
  //   })

  //   console.log("List of fetched products" + result.response.products) 
  //   console.log("Total count of products" + result.response.count) 
  //   console.log("Next page number or null" + result.nextPage) 
  // }

  // fetchProducts()

  return (
    <>
      <Hero />
      <div>
        <CategoryGrid />
        poij
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
            New Arrivals
          </h1>
          <NewArrivalsGrid countryCode={countryCode} />

          <Suspense
            fallback={
              <ul
                className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1"
                data-testid="products-list-loader"
              >
                {repeat(8).map((index) => (
                  <li key={index}>
                    <SkeletonProductPreview />
                  </li>
                ))}
              </ul>
            }
          ></Suspense>
          {/* <ul
            className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1"
            data-testid="products-list-loader"
          >
            {repeat(8).map((index) => (
              <li key={index}>
                <SkeletonProductPreview />
              </li>
            ))}
          </ul> */}
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
