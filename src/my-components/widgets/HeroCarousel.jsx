'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import Lightbox from "react-18-image-lightbox"
import "react-18-image-lightbox/style.css"
import img1 from "../../images/tours/tour-1.jpg"
import img2 from "../../images/tours/tour2.webp"
import img3 from "../../images/tours/tour-3.webp"
import img4 from "../../images/tours/tour4.webp"
import img5 from "../../images/tours/tour5.jpg"
import Carousel from "./Carousel"
// Gallery component displaying images with a lightbox feature
const HeroCarousel = () => {


  return (
    <>
      <div className="h-full  font-[family-name:var(--font-geist-sans)] mx-0">
        <section className="mx-0">
          <Carousel  />
        </section>
      </div>

     
    </>
  )
}

export default HeroCarousel
