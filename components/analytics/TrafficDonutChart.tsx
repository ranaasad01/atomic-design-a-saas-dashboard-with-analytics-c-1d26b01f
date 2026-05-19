"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { trafficSourceData } from "@/lib/mock-data";

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-[#1E1E2E] border border-white/10 rounded-xl p-3 shadow-xl">
        <p className="text-xs text-white font-semibold">{d.name}</p>
        <p className="text-xs text-gray-400 mt-1">{d.value}% of traffic</p>
      </div>
    );
  }
  return null;
}

export default function TrafficDonutChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-white">Traffic Sources</h3>
        <p className="text-xs text-gray-400 mt-0.5">Breakdown of where your users come from</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie
                data={trafficSourceData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {trafficSourceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-400">Total</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {trafficSourceData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-300">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: item.value + "%", backgroundColor: item.color }}
                  />
                </div>
                <span className="text-xs font-semibold text-white w-8 text-right">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
