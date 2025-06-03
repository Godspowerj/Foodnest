"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "./AppContextApi/AppContext";
import { Products } from "@/asset/Product";
import { toast } from "react-toastify";
import { FavoriteIcon } from "@/asset/asset";

const CategoryMenu = () => {
  const {
    filteredData,
    selectCategory,
    addToCart,
    updateCartQuantity,
    cart,
    handleFavourite,
    favorite,
  } = useContext(AppContext)!;

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 mt-8 ">
      {filteredData.length === 0 ? (
        <div className="col-span-2 text-center text-gray-500">
          No items found in the "{selectCategory}" category.
        </div>
      ) : (
        (filteredData as Products[]).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex gap-4 p-4 hover:shadow-lg transition-shadow"
          >
            <div className="relative sm:flex flex-col items-center space-y-3">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-xl object-cover bg-gray-50 w-30 h-30 p-2"
              />
              <span
                className="absolute left-0 top-2 -translate-y-1/2 text-[#6e4231] p-2 bg-white rounded-full shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => handleFavourite(item)}
              >
                {favorite.some((favItem) => favItem.id === item.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#6e4231"
                  >
                    <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#6e4231"
                  >
                    <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
                  </svg>
                )}
              </span>
              <div className="flex items-center gap-2 mb-2">
                <button
                  onClick={() => updateCartQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center font-medium text-base hover:text-2xl hover:transform-transition  text-center bg-gray-50 rounded-full p-0"
                >
                  -
                </button>
                <span className="w-6 text-center">
                  {cart.find((cartItem) => cartItem.id === item.id)?.quantity ||
                    0}
                </span>
                <button
                  onClick={() => updateCartQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center font-medium text-base hover:text-2xl hover:transform-transition   text-center bg-gray-50 rounded-full p-0"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between ">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <span className="text-primary font-bold text-base">
                  ${item.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-primary text-white bg-[#6e4231] w-full px-4 py-3 shadow-sm drop-shadow rounded-full text-sm font-medium hover:bg-primary-dark transition"
              >
                {cart.some((cartItem) => cartItem.id === item.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryMenu;
