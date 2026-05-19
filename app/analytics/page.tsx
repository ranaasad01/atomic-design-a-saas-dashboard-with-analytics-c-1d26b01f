"use client";

import { useState } from "react";
import { Activity, Eye, MousePointer, TrendingUp } from 'lucide-react';
import TrafficDonutChart from "@/components/analytics/TrafficDonutChart";
import RevenueMultiLineChart from "@/components/analytics/RevenueMultiLineChart";
import SessionsAreaChart from "@/components/analytics/SessionsAreaChart";
import { analyticsDetailData } from "@/lib/mock-data";

const dateRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "Last 12 months", "All time"];

const statCards = [
  { label: "Total Sessions", value: "213,100", change: "+18.4%", positive: true, icon: Activity, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { label: "Total Pageviews", value: "652,400", change: "+22.1%", positive: true, icon: Eye, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { label: "Avg Bounce Rate", value: "38.5%", change: "-6.6%", positive: true, icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Conversion Rate", value: "4.6%", change: "+43.8%", positive: true, icon: MousePointer, color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function AnalyticsPage() {
  const [activeRange, setActiveRange] = useState("Last 12 months");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-sm text-gray-400 mt-1">
            Deep-dive into your traffic, engagement, and conversion metrics.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {dateRanges.map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={[
                "text-xs px-3 py-1.5 rounded-lg transition-colors font-medium",
                activeRange === range
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10",
              ].join(" ")}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats summary row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <div className={["w-9 h-9 rounded-xl flex items-center justify-center", stat.bg].join(" ")}>
                <stat.icon className={["w-4 h-4", stat.color].join(" ")} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
            <span className={["text-xs font-semibold px-1.5 py-0.5 rounded-md", stat.positive ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"].join(" ")}>
              {stat.change}
            </span>
            <span className="text-xs text-gray-500 ml-1.5">vs prev period</span>
          </div>
        ))}
      </div>

      {/* Sessions area chart */}
      <SessionsAreaChart />

      {/* Revenue + Traffic sources */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RevenueMultiLineChart />
        </div>
        <div>
          <TrafficDonutChart />
        </div>
      </div>

      {/* Detailed analytics table */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-white">Weekly Breakdown</h3>
            <p className="text-xs text-gray-400 mt-0.5">Detailed metrics per week for the selected period</p>
          </div>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {["Week", "Sessions", "Pageviews", "Bounce Rate", "Conversion"].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-gray-500 pb-3 pr-6 last:pr-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {analyticsDetailData.map((row) => (
                <tr key={row.week} className="hover:bg-white/3 transition-colors">
                  <td className="py-3 pr-6 text-xs font-medium text-white">{row.week}</td>
                  <td className="py-3 pr-6 text-xs text-gray-300">{row.sessions.toLocaleString()}</td>
                  <td className="py-3 pr-6 text-xs text-gray-300">{row.pageviews.toLocaleString()}</td>
                  <td className="py-3 pr-6">
                    <span className="text-xs text-amber-400">{row.bounceRate}%</span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: (row.conversion / 6) * 100 + "%" }}
                        />
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">{row.conversion}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
