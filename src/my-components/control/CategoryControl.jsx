import React from "react"
import Link from "next/link"
// import * as Icon from "react-feather";

const CategoryControl = () => {
  const shopGrid = [
    {
      name: "PlayStation",
      path: "playstation",
    },
    {
      name: "PC Gaming",
      path: "pc-gaming",
    },
    {
      name: "Xbox",
      path: "xbox",
    },
    {
      name: "Nintendo",
      path: "nintendo",
    },
    {
      name: "Merchandise",
      path: "merch",
    },
  ]

  return (
    <div className="lg:col-span-4 md:col-span-6 rounded-md h-full pr-3">
      <div className="sticky">
        <form>
          <div className="grid grid-cols-1 gap-3">
            <div></div>

            <div>
              <label className="font-semibold text-gray-950">Categories</label>
              {shopGrid.map((data, index) => (
                <div className="block mt-2 cursor-pointer" key={index}>
                  {/* Ensure correct relative paths */}
                  <Link href={`/dk/categories/${data.path}`}>
                    <p className="text-slate-800 cursor-pointer">{data.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CategoryControl
