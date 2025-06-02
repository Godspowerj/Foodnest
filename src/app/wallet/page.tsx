'use client';
import React, { useState } from 'react';

const transactions = [
  { id: 1, type: "Deposit", amount: 5000, date: "2024-06-01", status: "Completed" },
  { id: 2, type: "Withdrawal", amount: 2000, date: "2024-05-28", status: "Pending" },
  { id: 3, type: "Deposit", amount: 1500, date: "2024-05-20", status: "Completed" },
];

export default function Wallet() {
  const [balance, setBalance] = useState(4500);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<number | "">("");
  const [txs, setTxs] = useState([...transactions]);

  const handleFundWallet = () => {
    if (typeof amount === "number" && amount > 0) {
      setBalance(prev => prev + amount);
      setTxs([
        {
          id: txs.length + 1,
          type: "Deposit",
          amount,
          date: new Date().toISOString().slice(0, 10),
          status: "Completed",
        },
        ...txs,
      ]);
      setAmount("");
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f3] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-6 md:p-10 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6e4231] mb-2">My Wallet</h1>
          <p className="text-gray-500">Manage your balance and track transactions</p>
        </div>

        <div className="bg-[#6e4231]/10 p-6 rounded-xl flex flex-col items-center space-y-3">
          <span className="text-gray-600">Current Balance</span>
          <span className="text-5xl font-bold text-[#6e4231]">₦{balance.toLocaleString()}</span>
          <button
            className="bg-[#6e4231] hover:bg-[#5a372a] transition text-white px-6 py-2 rounded-lg font-medium mt-2"
            onClick={() => setShowModal(true)}
          >
            Fund Wallet
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#6e4231] mb-3">Transaction History</h2>
          <div className="divide-y max-h-[400px] overflow-y-auto">
            {txs.length === 0 ? (
              <div className="py-8 text-center text-gray-400">No transactions yet.</div>
            ) : (
              txs.map(tx => (
                <div key={tx.id} className="flex justify-between items-center py-4">
                  <div>
                    <span className={`font-semibold ${tx.type === "Deposit" ? "text-green-600" : "text-red-500"}`}>
                      {tx.type}
                    </span>
                    <div className="text-sm text-gray-400">{tx.date}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-gray-800">
                      {tx.type === "Deposit" ? "+" : "-"}₦{tx.amount.toLocaleString()}
                    </span>
                    <div
                      className={`text-xs ${
                        tx.status === "Completed" ? "text-green-500" : "text-yellow-500"
                      }`}
                    >
                      {tx.status}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm space-y-4">
            <h3 className="text-xl font-bold text-[#6e4231] text-center">Fund Wallet</h3>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={e => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6e4231]"
            />
            <div className="flex gap-3">
              <button
                className="flex-1 bg-[#6e4231] hover:bg-[#5a372a] text-white py-2 rounded-lg font-semibold transition"
                onClick={handleFundWallet}
                disabled={typeof amount !== "number" || amount <= 0}
              >
                Deposit
              </button>
              <button
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
