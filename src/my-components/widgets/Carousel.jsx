"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

import RightArrow from "../control/RightArrow"
import LeftArrow from "../control/LeftArrow"
import CarouselIndicators from "../control/CarouselIndicators"
import img1 from "../../images/tours/web-banner-1.webp"
import img2 from "../../images/tours/web-banner-2.jpg"
import img3 from "../../images/tours/web-banner-3.jpg"
// import img3 from "../../images/tours/tour-3.webp"
// import img4 from "../../images/tours/tour4.webp"
// import img5 from "../../images/tours/tour5.jpg"

const Carousel = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const images = [img1, img2, img3]

  console.log(data)

  const nextImage = () => {
    setIsExiting(true)
    setTimeout(() => {
      const nextIndex =
        currentImage === images.length - 1 ? 0 : currentImage + 1
      setCurrentImage(nextIndex)
      setIsExiting(false)
    }, 500)
  }

  const prevImage = () => {
    setIsExiting(true)
    setTimeout(() => {
      const newImageIndex =
        currentImage === 0 ? images.length - 1 : currentImage - 1
      setCurrentImage(newImageIndex)
      setIsExiting(false)
    }, 500)
  }

  const goToImg = (imageIndex) => {
    setIsExiting(true)
    setTimeout(() => {
      setCurrentImage(imageIndex)
      setIsExiting(false)
    }, 500)
  }

  return (
    <main className="max-h-full">
      <div className="relative">
        <div className="flex justify-center relative">
          <LeftArrow handleClick={prevImage} />
          <div
            className={`image-animation ${
              isExiting ? "slide-exit" : "slide-enter"
            }`}
            key={currentImage}
          >
            <div className="relative w-full">
              <Image
                src={images[currentImage]} // Corrected here
                alt={`Description of image ${currentImage}`}
                className="z-0"
                width={1920}
                height={780}
                style={{ height: "auto" }}
              />
              <div
                className="black-shadow w-full h-full bottom-0 left-0 
            absolute m-0 py-2 flex flex-col px-3 gap-4"
              ></div>
            </div>
          </div>
          <RightArrow handleClick={nextImage} />
        </div>
      </div>

      <CarouselIndicators
        currentImage={currentImage}
        images={images}
        handleClick={goToImg}
      />
    </main>
  )
}

export default Carousel
