"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { churnData } from "@/lib/mock-data";

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-white/10 rounded-xl p-3 shadow-xl">
        <p className="text-xs text-gray-400 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-gray-300">{entry.name === "churnRate" ? "Gross Churn" : "Net Churn"}:</span>
            <span className="text-white font-semibold">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function ChurnTrendChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-white">Churn Rate Trend</h3>
          <p className="text-xs text-gray-400 mt-0.5">Gross and net churn rates over the year</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-red-400 rounded" />
            <span>Gross Churn</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-amber-400 rounded" />
            <span>Net Churn</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={churnData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => v + "%"}
            domain={[0, 3]}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={2} stroke="rgba(248,113,113,0.3)" strokeDasharray="4 4" label={{ value: "2% threshold", fill: "#9CA3AF", fontSize: 10 }} />
          <Line type="monotone" dataKey="churnRate" stroke="#F87171" strokeWidth={2.5} dot={{ r: 3, fill: "#F87171" }} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="netChurn" stroke="#FCD34D" strokeWidth={2.5} dot={{ r: 3, fill: "#FCD34D" }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
