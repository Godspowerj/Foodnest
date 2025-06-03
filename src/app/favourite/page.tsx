import React from 'react';

const Favourites = () => {
  return (
    <main className="min-h-screen bg-[#fdfaf7] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold text-[#6e4231] mb-6 border-b border-[#6e4231]/20 pb-3">My Favourites</h1>

        <div className="space-y-4">
          {/* Favourite Item */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition text-sm">
            <img
              src="/images/spaghetti.jpg"
              alt="Spaghetti"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-[#6e4231]">Spaghetti & Turkey</h2>
              <p className="text-xs text-gray-600">Rich tomato sauce</p>
              <span className="text-[#6e4231] font-semibold mt-1 block">₦2,300</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <button className="text-[#6e4231] text-xs border border-[#6e4231] rounded-md px-2 py-1 hover:bg-[#6e4231] hover:text-white transition">
                Reorder
              </button>
              <button className="text-[11px] text-red-500 hover:underline">Remove</button>
            </div>
          </div>

          {/* Another Item */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition text-sm">
            <img
              src="/images/yam.jpg"
              alt="Yam Porridge"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-[#6e4231]">Yam Porridge</h2>
              <p className="text-xs text-gray-600">Creamy with veg</p>
              <span className="text-[#6e4231] font-semibold mt-1 block">₦1,800</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <button className="text-[#6e4231] text-xs border border-[#6e4231] rounded-md px-2 py-1 hover:bg-[#6e4231] hover:text-white transition">
                Reorder
              </button>
              <button className="text-[11px] text-red-500 hover:underline">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favourites;
