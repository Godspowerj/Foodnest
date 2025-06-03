import React from 'react';
import Navbar from '@/components/navbar';

const History = () => {
  return (
    <main className="min-h-screen bg-gray-100 lg:p-6 p-4">
      <Navbar />
      <div className="max-w-4xl mx-auto  ">
        <h1 className=" mb-4 text-xl font-semibold  text-[#6e4231]  border-b border-[#6e4231]/20 pb-3">
          Order History
        </h1>

        {/* Example order items */}
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-5 bg-[#fdf9f8] hover:shadow-md transition">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-semibold text-[#6e4231]">Beef Burger</h2>
                <p className="text-sm text-gray-500">Order ID: #123456</p>
              </div>
              <span className="text-sm text-gray-400">May 28, 2025</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Quantity: <span className="text-[#6e4231] font-medium">2</span></p>
              <p>Total: <span className="text-[#6e4231] font-medium">₦3,500</span></p>
              <p>Status: <span className="text-green-600 font-medium">Delivered</span></p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 bg-[#fdf9f8] hover:shadow-md transition">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-semibold text-[#6e4231]">Fried Rice & Chicken</h2>
                <p className="text-sm text-gray-500">Order ID: #123457</p>
              </div>
              <span className="text-sm text-gray-400">May 25, 2025</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Quantity: <span className="text-[#6e4231] font-medium">1</span></p>
              <p>Total: <span className="text-[#6e4231] font-medium">₦2,500</span></p>
              <p>Status: <span className="text-yellow-600 font-medium">Pending</span></p>
            </div>
          </div>

           <div className="border border-gray-200 rounded-xl p-5 bg-[#fdf9f8] hover:shadow-md transition">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-semibold text-[#6e4231]">Fried Rice & Chicken</h2>
                <p className="text-sm text-gray-500">Order ID: #123457</p>
              </div>
              <span className="text-sm text-gray-400">May 25, 2025</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Quantity: <span className="text-[#6e4231] font-medium">1</span></p>
              <p>Total: <span className="text-[#6e4231] font-medium">₦2,500</span></p>
              <p>Status: <span className="text-red-600 font-medium">Failed</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default History;
