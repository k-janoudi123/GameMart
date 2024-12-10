import React from "react"
import { BsChevronCompactLeft } from "react-icons/bs"

const LeftArrow = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className=" cursor-pointer absolute top-3/3 lg:top-1/4 group 
           left-1.5 transform translate-y-1/4 z-10 p-5 py-14 "
    >
      <BsChevronCompactLeft
        className="text-5xl font-extrabold
             text-secondary-200  group-hover:text-orange-400"
      />
    </div>
  )
}

export default LeftArrow
