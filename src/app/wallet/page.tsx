'use client';
import React, { useState } from 'react';

const transactions = [
  { id: 1, type: 'Deposit', amount: 5000, date: '2024-06-01', status: 'Completed' },
  { id: 2, type: 'Withdrawal', amount: 2000, date: '2024-05-28', status: 'Pending' },
  { id: 3, type: 'Deposit', amount: 1500, date: '2024-05-20', status: 'Completed' },
];

export default function Wallet() {
  const [balance, setBalance] = useState(4500);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [txs, setTxs] = useState([...transactions]);

  const handleFundWallet = () => {
    if (typeof amount === 'number' && amount > 0) {
      setBalance(prev => prev + amount);
      setTxs([
        {
          id: txs.length + 1,
          type: 'Deposit',
          amount,
          date: new Date().toISOString().slice(0, 10),
          status: 'Completed',
        },
        ...txs,
      ]);
      setAmount('');
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">My Wallet</h1>

        <div className="bg-green-100 rounded-2xl p-6 text-center mb-10 shadow-inner">
          <p className="text-gray-600">Current Balance</p>
          <h2 className="text-5xl font-extrabold text-green-700 mt-2">₦{balance.toLocaleString()}</h2>
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 active:scale-95 transition-all"
          >
            Fund Wallet
          </button>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h2>
        <div className="divide-y border rounded-xl max-h-[350px] overflow-y-auto">
          {txs.length === 0 ? (
            <div className="py-8 text-center text-gray-400">No transactions yet.</div>
          ) : (
            txs.map(tx => (
              <div key={tx.id} className="flex justify-between items-center py-4 px-4 hover:bg-gray-50">
                <div>
                  <span className={`font-semibold ${tx.type === 'Deposit' ? 'text-green-600' : 'text-red-500'}`}>
                    {tx.type}
                  </span>
                  <div className="text-xs text-gray-400">{tx.date}</div>
                </div>
                <div className="text-right">
                  <span className="font-bold block">
                    {tx.type === 'Deposit' ? '+' : '-'}₦{tx.amount.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs ${
                      tx.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Fund Wallet</h3>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={e => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex gap-3">
              <button
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                onClick={handleFundWallet}
                disabled={typeof amount !== 'number' || amount <= 0}
              >
                Deposit
              </button>
              <button
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
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
