
import { getRegion } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"

export const fetchPrice = async (product, countryCode) => {
    try {
      // const { products } = await sdk.store.product.list(
      //   { fields: "handle" },
      //   { next: { tags: ["products"] } }
      // )

      const region = await getRegion(countryCode)
      const pricedProduct = await getProductByHandle(product.handle, region.id)
      
      if (!pricedProduct || !pricedProduct.variants?.length) {
        throw new Error("No product variants found")
      }

      const variantId = pricedProduct.variants[0].id

      const price = await getProductPrice({
        product: pricedProduct,
        variantId: variantId,
      })

      // console.log("Priced Product:", pricedProduct)
      console.log("Price:", price)

      return price.cheapestPrice?.calculated_price
    } catch (error) {
      console.error("Error fetching products:", error)
      throw error // Re-throw the error for further handling
    }
  }