"use client";
import React from "react";
import { products } from "@/asset/Product";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { CancelIcon } from "@/asset/asset";
import { useContext } from "react";
import { AppContext } from "./AppContextApi/AppContext";
import { ShoppingIcon } from "@/asset/asset";

const CartItems: React.FC = () => {
  const { toggleCart, cart, removeFromCart, placeOrderData, loading } =
    useContext(AppContext)!;
  return (
    <>
      <div className="space-y-3 ">
        <h2 className="font-medium text-xl text-shadow-black leading-7">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <ShoppingIcon /> Cart
            </span>
            <button
              className="text-gray-500 hover:text-gray-700 transition lg:hidden"
              onClick={toggleCart}
            >
              <CancelIcon />
            </button>
          </div>
        </h2>
        <div className="overflow-y-auto max-h-[350px] ">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex gap-4 space-y-1 p-1  mb-4"
            >
              <div className="sm:flex flex-col  items-center ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-xl object-cover bg-gray-50 w-15 h-15 p-2"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between ">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm mb-1">{item.name}</h2>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm ">{item.quantity}x</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[12px] bg-[#fdefed] flex items-center gap-2 px-2 py-[2px] rounded-lg"
                      >
                        remove
                      </button>
                    </div>
                  </div>

                  <span className="text-primary text-base">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length === 0 ? (
          <div>
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src="/shopping.png"
                alt="Empty Cart"
                width={300}
                height={300}
                
              />
              <p className="text-gray-500 mt-4">Your cart is empty</p>
              <p className="text-gray-500">Add items to get started</p>
            </div>
          </div>
        ) : (
          <>
            <div className="inline-block w-full space-y-3 py-4 border-gray-400 border-b-2  border-dashed ">
              <div className="flex justify-between items-center text-base">
                <span>Subtotal</span>
                <p>
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Tax(0%)</span>
                <p>18.31</p>
              </div>
            </div>

            <div className="flex justify-between items-center  text-base font-medium">
              <span>Total</span>
              <p>
                {(
                  cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) + 18.31
                ).toFixed(2)}
              </p>
            </div>

            <button
              onClick={placeOrderData}
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.3s ease",
              }}
              className="bg-primary text-white bg-[#6e4231] w-full px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-dark transition flex items-center gap-2 justify-center"
            >
              {loading && <div className="spinner"></div>}
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartItems;
