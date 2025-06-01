import Navbar from "@/components/navbar";
import React from "react";

const OrderPage: React.FC = () => {
  return (
    <div className="bg-[#f9f9fb] h-screen overflow-y-scroll scrollbar-hide w-full px-4 py-5">
      <div className=" mx-auto ">
        <Navbar />
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Your Order</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-2 py-2 border-b border-gray-200">
                  Item
                </th>
                <th className="text-center px-2 py-2 border-b border-gray-200">
                  Qty
                </th>
                <th className="text-right px-2 py-2 border-b border-gray-200">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-2">Chicken Burger</td>
                <td className="text-center px-2 py-2">2</td>
                <td className="text-right px-2 py-2">₦3,000</td>
              </tr>
              <tr>
                <td className="px-2 py-2">Fries</td>
                <td className="text-center px-2 py-2">1</td>
                <td className="text-right px-2 py-2">₦1,000</td>
              </tr>
              <tr>
                <td className="px-2 py-2">Coke</td>
                <td className="text-center px-2 py-2">2</td>
                <td className="text-right px-2 py-2">₦800</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="text-right px-2 py-2 font-bold">
                  Total
                </td>
                <td className="text-right px-2 py-2 font-bold">₦4,800</td>
              </tr>
            </tfoot>
          </table>
        </section>

        {/* Delivery Details */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Delivery Details</h2>
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
          <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>
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
              <input
                type="radio"
                name="payment"
                className="accent-red-600"
              />
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
