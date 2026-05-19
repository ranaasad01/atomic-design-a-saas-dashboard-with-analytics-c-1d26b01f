"use client";

import { recentTransactions } from "@/lib/mock-data";

const planColors: Record<string, string> = {
  Enterprise: "text-purple-400 bg-purple-400/10",
  Pro: "text-indigo-400 bg-indigo-400/10",
  Starter: "text-cyan-400 bg-cyan-400/10",
};

const statusColors: Record<string, string> = {
  Paid: "text-emerald-400 bg-emerald-400/10",
  Pending: "text-amber-400 bg-amber-400/10",
  Failed: "text-red-400 bg-red-400/10",
};

export default function RecentTransactions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-white">Recent Transactions</h3>
          <p className="text-xs text-gray-400 mt-0.5">Latest billing activity</p>
        </div>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Transaction</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">User</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Plan</th>
              <th className="text-right text-xs font-medium text-gray-500 pb-3 pr-4">Amount</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Date</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-white/3 transition-colors">
                <td className="py-3 pr-4">
                  <span className="text-xs font-mono text-gray-400">{tx.id}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-xs text-white">{tx.user}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className={["text-xs font-medium px-2 py-0.5 rounded-full", planColors[tx.plan] || "text-gray-400 bg-gray-400/10"].join(" ")}>
                    {tx.plan}
                  </span>
                </td>
                <td className="py-3 pr-4 text-right">
                  <span className="text-xs font-semibold text-white">${tx.amount}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-xs text-gray-400">{tx.date}</span>
                </td>
                <td className="py-3">
                  <span className={["text-xs font-medium px-2 py-0.5 rounded-full", statusColors[tx.status] || "text-gray-400 bg-gray-400/10"].join(" ")}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
