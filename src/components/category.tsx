import React from "react";
import Image from "next/image";

const Category = () => {
  const categoryData = [
    { image: "/biryani.png", name: "All" },
    { image: "/bread.png", name: "bread" },
    { image: "/cupcake.png", name: "cupcake" },
    { image: "/coffee.png", name: "Dessert" },
    { image: "/noodles.png", name: "noodles" },
    { image: "/cake.png", name: "cake" },
    { image: "/orange-juice.png", name: "Drinks" },
    { image: "/ramen.png", name: "ramen" },
  ];
  return (
    <div className="w-full mt-8">
      <div className="grid md:grid-cols-8 gap-2 grid-cols-4">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition p-3 cursor-pointer group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary/10 transition">
              <Image
              src={item.image}
              width={36}
              height={36}
              alt={item.name}
              className="object-contain"
              />
            </div>
            <span className="mt-2 text-xs font-medium text-gray-700 group-hover:text-primary transition">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
