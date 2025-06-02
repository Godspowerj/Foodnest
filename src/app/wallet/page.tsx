export default function WalletUI() {
  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-10 flex justify-center items-start">
      <div className="w-full max-w-4xl space-y-10">

        {/* Wallet Balance Section */}
        <div className="bg-[#6e4231] text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center shadow-xl">
          <div>
            <h2 className="text-lg font-medium">Available Balance</h2>
            <p className="text-4xl font-bold mt-2">₦4,500</p>
          </div>
          <button className="mt-4 sm:mt-0 bg-white text-[#6e4231] font-semibold px-6 py-2 rounded-xl hover:bg-[#f3eae7] transition">
            + Fund Wallet
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {["Top up", "Send", "History", "Offers"].map((label) => (
            <div
              key={label}
              className="bg-[#fff0e5] hover:bg-[#ffe6d5] rounded-2xl p-4 shadow-sm cursor-pointer transition"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-[#6e4231] text-white rounded-full flex items-center justify-center text-xl">
                ₦
              </div>
              <p className="text-sm font-medium text-[#6e4231]">{label}</p>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#6e4231] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((tx) => (
              <div key={tx} className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-semibold text-gray-800">Order #{tx}</p>
                  <p className="text-sm text-gray-400">May 27, 2025</p>
                </div>
                <p className="font-semibold text-green-600">+₦2,000</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
