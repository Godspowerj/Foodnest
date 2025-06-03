"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { useContext } from "react";
import { AppContext } from "@/components/AppContextApi/AppContext";
import { CancelIcon } from "@/asset/asset";

const OrderPage: React.FC = () => {
  const { placeOrder,removeFromCart,removeFromOrder } = useContext(AppContext)!;

  return (
    <div className="bg-[#f9f9fb] h-screen overflow-y-scroll scrollbar-hide w-full px-4 py-5">
      <div className=" mx-auto ">
        <Navbar />
        <section className="mb-8 ">
          <h2 className="mb-4 text-xl font-semibold text-[#6e4231] ">Your Order</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-2 py-2 border-b text-[#6e4231] border-gray-200">
                  Item
                </th>
                <th className="text-center px-2 py-2 border-b text-[#6e4231] border-gray-200">
                  Qty
                </th>
                <th className="text-right px-2 py-2 border-b text-[#6e4231] border-gray-200">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {placeOrder.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    You haven't placed any order yet
                  </td>
                </tr>
              ) : (
                placeOrder.map((item) => (
                  <tr key={item.id}>
                    <td className="px-2 py-2 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="inline-flex items-center justify-between w-full">
                        <span>{item.name.slice(0,12)}...</span>

                        <button onClick={() =>removeFromOrder(item.id)} className="text-sm ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 text-red-600 hover:text-red-800 transition"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="text-center px-2 py-2">{item.quantity}</td>
                    <td className="text-right px-2 py-2">
                      ₦{item.price * item.quantity}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={2} className="text-right px-2 py-2 text-[#6e4231] font-bold">
                  Total
                </td>
                <td className="text-right text-[#6e4231] px-2 py-2 font-bold">
                  ₦
                  {placeOrder.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </section>

        {/* Delivery Details */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-[#6e4231]">Delivery Details</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded border border-gray-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded border border-gray-300"
            />
            <input
              type="text"
              placeholder="Delivery Address"
              className="p-3 rounded border border-gray-300"
            />
            <textarea
              placeholder="Additional Instructions"
              rows={3}
              className="p-3 rounded border border-gray-300"
            />
          </form>
        </section>

        {/* Payment Method */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-[#6e4231]">Payment Method</h2>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="accent-red-600"
              />
              Pay on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-red-600" />
              Card Payment
            </label>
          </div>
        </section>

        {/* Place Order Button */}
        <button className="w-full py-4 text-white drop-shadow-lg bg-[#6e4231] rounded-lg text-lg font-bold  transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
