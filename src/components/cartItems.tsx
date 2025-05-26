import React from "react";
import { products } from "@/asset/Product";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";

const CartItems: React.FC = () => {
  return (
    <>
      <div className="space-y-3 ">
        <h2 className="font-medium text-xl text-shadow-black leading-7">
          Bills
        </h2>
        <div className="overflow-y-auto max-h-[400px]">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl flex gap-4 space-y-1 p-1  mb-4">
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
                      <span className="font-bold ">x1</span>
                      <button className="text-sm bg-[#fdefed] flex items-center gap-2 px-2 py-1 rounded-lg">
                        remove <CiEdit />
                      </button>
                    </div>
                  </div>

                  <span className="text-primary text-base">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="inline-block w-full space-y-3 py-4 border-gray-400 border-b-2  border-dashed ">
            <div className="flex justify-between items-center text-base">
              <span>Subtotal</span>
              <p>18.31</p>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>Tax(0%)</span>
              <p>18.31</p>
            </div>
          </div>

          <div className="flex justify-between items-center  text-base font-medium">
            <span>Total</span>
            <p>206.2</p>
          </div>
        </div>
        <button className="bg-primary text-white bg-[#6e4231] w-full px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-dark transition">Place Order </button>
      </div>
    </>
  );
};

export default CartItems;
