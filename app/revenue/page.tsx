export const dynamic = "force-dynamic";
import { DollarSign, TrendingDown, TrendingUp, ArrowUp } from 'lucide-react';
import RevenueByPlanChart from "@/components/revenue/RevenueByPlanChart";
import ChurnTrendChart from "@/components/revenue/ChurnTrendChart";
import MrrLineChart from "@/components/dashboard/MrrLineChart";

const revenueKpis = [
  {
    label: "MRR",
    value: "$93,200",
    change: "+6.6%",
    positive: true,
    sub: "Monthly Recurring Revenue",
    icon: DollarSign,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    gradient: "from-indigo-600/15 to-purple-600/10",
  },
  {
    label: "ARR",
    value: "$1,118,400",
    change: "+6.6%",
    positive: true,
    sub: "Annual Recurring Revenue",
    icon: ArrowUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    gradient: "from-purple-600/15 to-pink-600/10",
  },
  {
    label: "Gross Churn",
    value: "1.1%",
    change: "-0.1%",
    positive: true,
    sub: "Monthly gross churn rate",
    icon: TrendingDown,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-600/15 to-cyan-600/10",
  },
  {
    label: "Net Revenue Retention",
    value: "118%",
    change: "+2%",
    positive: true,
    sub: "NRR including expansions",
    icon: TrendingUp,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    gradient: "from-cyan-600/15 to-indigo-600/10",
  },
];

const planBreakdown = [
  { plan: "Enterprise", users: 142, mrr: 42458, pct: 45.6, color: "bg-purple-500" },
  { plan: "Pro", users: 389, mrr: 30731, pct: 33.0, color: "bg-indigo-500" },
  { plan: "Starter", users: 251, mrr: 7279, pct: 7.8, color: "bg-cyan-500" },
];

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Revenue</h1>
        <p className="text-sm text-gray-400 mt-1">
          Track MRR, ARR, churn, and revenue health across all subscription tiers.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {revenueKpis.map((kpi) => (
          <div
            key={kpi.label}
            className={"rounded-2xl border border-white/10 bg-gradient-to-br p-5 " + kpi.gradient}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{kpi.label}</p>
              <div className={"w-9 h-9 rounded-xl flex items-center justify-center " + kpi.bg}>
                <kpi.icon className={"w-4 h-4 " + kpi.color} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{kpi.value}</p>
            <p className="text-xs text-gray-500 mb-2">{kpi.sub}</p>
            <span className={"text-xs font-semibold px-1.5 py-0.5 rounded-md " + (kpi.positive ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10")}>
              {kpi.change}
            </span>
            <span className="text-xs text-gray-500 ml-1.5">vs last month</span>
          </div>
        ))}
      </div>

      {/* MRR trend */}
      <MrrLineChart />

      {/* Revenue by plan + breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RevenueByPlanChart />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
          <h3 className="text-sm font-semibold text-white mb-1">Revenue by Plan</h3>
          <p className="text-xs text-gray-400 mb-5">Current MRR contribution per tier</p>
          <div className="space-y-4">
            {planBreakdown.map((item) => (
              <div key={item.plan}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={"w-2.5 h-2.5 rounded-full " + item.color} />
                    <span className="text-sm text-white font-medium">{item.plan}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">${item.mrr.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">{item.users} users</p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={"h-full rounded-full " + item.color}
                    style={{ width: item.pct + "%" }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.pct}% of total MRR</p>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Total MRR</span>
              <span className="text-sm font-bold text-white">$93,200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">ARPU</span>
              <span className="text-sm font-bold text-white">$11.88</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">LTV (est.)</span>
              <span className="text-sm font-bold text-white">$1,080</span>
            </div>
          </div>
        </div>
      </div>

      {/* Churn trend */}
      <ChurnTrendChart />

      {/* Revenue health indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">New MRR</p>
          <p className="text-2xl font-bold text-white">$8,640</p>
          <p className="text-xs text-gray-400 mt-1">From 920 new signups this month</p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">+21.1%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Expansion MRR</p>
          <p className="text-2xl font-bold text-white">$3,120</p>
          <p className="text-xs text-gray-400 mt-1">Upgrades from Starter to Pro/Enterprise</p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">+8.4%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Churned MRR</p>
          <p className="text-2xl font-bold text-white">$1,025</p>
          <p className="text-xs text-gray-400 mt-1">Lost from 78 churned accounts</p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-xs font-semibold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded-md">+23.8%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
