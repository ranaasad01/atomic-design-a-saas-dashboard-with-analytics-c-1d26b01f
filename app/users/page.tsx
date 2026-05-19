"use client";

import { useState } from "react";
import { Search, Users, UserCheck, UserX, TrendingUp } from 'lucide-react';
import { usersData } from "@/lib/mock-data";

const planColors: Record<string, string> = {
  Enterprise: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Pro: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  Starter: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const statusColors: Record<string, string> = {
  Active: "text-emerald-400 bg-emerald-400/10",
  Inactive: "text-gray-400 bg-gray-400/10",
  Trial: "text-amber-400 bg-amber-400/10",
};

const avatarColors = [
  "from-indigo-500 to-purple-600",
  "from-cyan-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-emerald-500 to-cyan-600",
  "from-amber-500 to-orange-600",
];

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = usersData.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchPlan = planFilter === "All" || u.plan === planFilter;
    const matchStatus = statusFilter === "All" || u.status === statusFilter;
    return matchSearch && matchPlan && matchStatus;
  });

  const activeCount = usersData.filter((u) => u.status === "Active").length;
  const trialCount = usersData.filter((u) => u.status === "Trial").length;
  const inactiveCount = usersData.filter((u) => u.status === "Inactive").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage and monitor all user accounts, plans, and activity.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Total Users</p>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{usersData.length}</p>
          <p className="text-xs text-gray-500 mt-1">Across all plans</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Active</p>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{activeCount}</p>
          <p className="text-xs text-emerald-400 mt-1">+3 this week</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">On Trial</p>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{trialCount}</p>
          <p className="text-xs text-amber-400 mt-1">Convert before expiry</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Inactive</p>
            <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center">
              <UserX className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{inactiveCount}</p>
          <p className="text-xs text-red-400 mt-1">Re-engagement needed</p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 shrink-0">Plan:</span>
            {["All", "Starter", "Pro", "Enterprise"].map((p) => (
              <button
                key={p}
                onClick={() => setPlanFilter(p)}
                className={[
                  "text-xs px-3 py-1.5 rounded-lg transition-colors",
                  planFilter === p
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 shrink-0">Status:</span>
            {["All", "Active", "Inactive", "Trial"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={[
                  "text-xs px-3 py-1.5 rounded-lg transition-colors",
                  statusFilter === s
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white",
                ].join(" ")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {["User", "Email", "Plan", "Status", "MRR", "Joined", "Last Active"].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-gray-500 pb-3 pr-4 last:pr-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((user, i) => (
                <tr key={user.id} className="hover:bg-white/3 transition-colors group">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div className={["w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold shrink-0", avatarColors[i % avatarColors.length]].join(" ")}>
                        {user.avatar}
                      </div>
                      <span className="text-sm text-white font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs text-gray-400">{user.email}</span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={["text-xs font-medium px-2 py-0.5 rounded-full border", planColors[user.plan] || "text-gray-400 bg-gray-400/10 border-gray-400/20"].join(" ")}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-1.5">
                      <div className={["w-1.5 h-1.5 rounded-full", user.status === "Active" ? "bg-emerald-400" : user.status === "Trial" ? "bg-amber-400" : "bg-gray-500"].join(" ")} />
                      <span className={["text-xs font-medium px-2 py-0.5 rounded-full", statusColors[user.status] || "text-gray-400 bg-gray-400/10"].join(" ")}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs font-semibold text-white">
                      {user.mrr > 0 ? "$" + user.mrr + "/mo" : "—"}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs text-gray-400">{user.joined}</span>
                  </td>
                  <td className="py-3">
                    <span className="text-xs text-gray-400">{user.lastActive}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-10">
              <p className="text-sm text-gray-500">No users match your filters.</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-500">
            Showing {filtered.length} of {usersData.length} users
          </p>
          <div className="flex items-center gap-2">
            <button className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:text-white transition-colors">
              Previous
            </button>
            <button className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
