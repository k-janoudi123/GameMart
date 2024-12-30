import { Metadata } from "next"

import { retrieveCart } from "@lib/data/cart"
import { getCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { sdk } from "@lib/config"
export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await getCustomer()
  const cart = await retrieveCart()
const { products } = await sdk.store.product.list(
  { fields: "handle" },
  { next: { tags: ["products"] } }
)
console.log("test")
console.log("testing" + products)
  return (
    <>
      
      {props.children}
      
      <Footer />
    </>
  )
}
