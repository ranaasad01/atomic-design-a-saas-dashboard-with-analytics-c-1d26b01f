"use client";

import { ReactNode } from "react";
import { ArrowUp, ArrowDown } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel?: string;
  icon: ReactNode;
  iconBg: string;
  prefix?: string;
  suffix?: string;
}

export default function KpiCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  iconBg,
  prefix = "",
  suffix = "",
}: KpiCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/8 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-white">
            {prefix}
            {value}
            {suffix}
          </p>
        </div>
        <div className={["w-10 h-10 rounded-xl flex items-center justify-center", iconBg].join(" ")}>
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <div
          className={[
            "flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-md",
            isPositive
              ? "text-emerald-400 bg-emerald-400/10"
              : "text-red-400 bg-red-400/10",
          ].join(" ")}
        >
          {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
        <span className="text-xs text-gray-500">{changeLabel}</span>
      </div>
    </div>
  );
}
