import React from "react"
import CategoryCard from "../widgets/CategoryCard"
import img1 from "../../images/categories/xbox.jpg"
import img2 from "../../images/categories/playstation.jpg"
import img3 from "../../images/categories/pc-gamming.jpg"
import img4 from "../../images/categories/nintendo.jpg"
import img5 from "../../images/categories/Merch.jpg"
import { text } from "node:stream/consumers"
const CategoryGrid = () => {
  const categoryData = [
    {
      id: 2,
      Image: img2,

      text: "PlayStation",
    },
    {
      id: 3,
      Image: img3,

      text: "PC Gaming",
    },
    {
      id: 1,
      Image: img1,

      text: "Xbox",
    },
    {
      id: 4,
      Image: img4,

      text: "Nintendo",
    },
    {
      id: 5,
      Image: img5,

      text: "Merchandise",
    },
  ]
  return (
    <div className="mx-auto container lg:px-10">
      <div
        className="mx-auto  justify-center hidden lg:px-0 px-2 lg:grid lg:grid-cols-5 grid-cols-2 lg:gap-y-6 gap-y-2
     lg:gap-x-4 gap-x-2"
      >
        {categoryData.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              index={index}
              image={item.Image.src}
              id={item.id}
              text={item.text}
            />
          )
        })}
      </div>
      <div className="mt-8 lg:hidden lg:px-0 px-2 grid grid-cols-2 gap-y-2 gap-x-2">
        {categoryData.slice(0, 6).map((item, index) => {
          return (
            <CategoryCard
              key={index}
              index={index}
              image={item.Image.src}
              id={item.id}
              text={item.text}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CategoryGrid
