'use client'
import Navbar from "@/components/navbar";


export default function WalletPage() {
  return (
    <div className=" bg-[#fdf8f6] h-screen overflow-y-scroll scrollbar-hide w-full px-4 py-5">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Balance Section */}
        <div className="bg-[#6e4231] text-white p-6 rounded-b-3xl">
          <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-4xl font-bold">₦4,500</p>
          <button className="mt-4 px-5 py-2 bg-white text-[#6e4231] rounded-lg font-semibold hover:bg-gray-100">
            Fund Wallet
          </button>
        </div>

        {/* Promo / Loyalty Section */}
        <div className="px-6 py-4 bg-[#fff6f2]">
          <h3 className="text-lg font-semibold mb-2 text-[#6e4231]">Rewards & Promos</h3>
          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Cashback Earned</p>
              <p className="text-xl font-bold text-[#6e4231]">₦300</p>
            </div>
            <span className="text-green-600 font-medium">+₦50 this week</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-sm text-gray-600">Use promo code <span className="font-bold text-[#6e4231]">EATWELL</span> for ₦500 off your next meal</p>
          </div>
        </div>

        {/* Funding Methods */}
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2 text-[#6e4231]">Top-Up Methods</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#fbeee9] p-4 rounded-lg text-center">
              <p className="text-sm font-medium text-[#6e4231]">Bank</p>
            </div>
            <div className="bg-[#fbeee9] p-4 rounded-lg text-center">
              <p className="text-sm font-medium text-[#6e4231]">Card</p>
            </div>
            <div className="bg-[#fbeee9] p-4 rounded-lg text-center">
              <p className="text-sm font-medium text-[#6e4231]">Transfer</p>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2 text-[#6e4231]">Transaction History</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center bg-[#fff6f2] p-3 rounded-lg">
              <div>
                <p className="font-medium text-[#6e4231]">Deposit</p>
                <p className="text-sm text-gray-400">2024-06-01</p>
              </div>
              <p className="text-green-600 font-semibold">+₦5,000</p>
            </div>
            <div className="flex justify-between items-center bg-[#fff6f2] p-3 rounded-lg">
              <div>
                <p className="font-medium text-[#6e4231]">Order Payment</p>
                <p className="text-sm text-gray-400">2024-05-28</p>
              </div>
              <p className="text-red-500 font-semibold">-₦2,000</p>
            </div>
          </div>
        </div>

        {/* Loyalty Progress */}
        <div className="px-6 py-4 bg-[#fff6f2] rounded-b-2xl">
          <h3 className="text-lg font-semibold text-[#6e4231] mb-2">Loyalty Rewards</h3>
          <p className="text-sm text-gray-600 mb-2">3 orders away from a free meal</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#6e4231] h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
