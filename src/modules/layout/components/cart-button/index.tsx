"use client"

import React, { useEffect, useState } from "react"
import CartDropdown from "../cart-dropdown"

const CartButton = () => {
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/cart") // Replace with your API endpoint
        const data = await res.json()
        setCart(data)
      } catch (err) {
        console.error("Failed to fetch cart:", err)
      } finally {
        setLoading(false)
        console.log("loading")
      }
    }

    fetchCart()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return <CartDropdown cart={cart} />
}

export default CartButton
