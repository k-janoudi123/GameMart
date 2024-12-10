import React from "react"
import { RxDotFilled } from "react-icons/rx"
const CarouselIndicators = ({ images, handleClick, currentImage }) => {
  return (
    <div className="flex justify-center py-5 z-10">
      {images.map((image, index) => {
        return (
          <div
            onClick={() => handleClick(index)}
            className={`${
              index === currentImage ? "text-secondary" : "text-gray-700"
            } text-4xl cursor-pointer  text-gray-700 hover:text-secondary`}
            key={index}
          >
            <RxDotFilled />
          </div>
        )
      })}
    </div>
  )
}

export default CarouselIndicators
