export const dynamic = "force-dynamic";
import { DollarSign, Users, TrendingDown, Activity, ArrowUp } from 'lucide-react';
import KpiCard from "@/components/dashboard/KpiCard";
import MrrLineChart from "@/components/dashboard/MrrLineChart";
import SignupsBarChart from "@/components/dashboard/SignupsBarChart";
import ActiveUsersAreaChart from "@/components/dashboard/ActiveUsersAreaChart";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import { kpiData } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">
            Welcome back, Jane. Here&apos;s what&apos;s happening with Analytix today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
          <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
            Dec 2024
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          title="Monthly Revenue"
          value="$101.8K"
          change={kpiData.revenue.change}
          icon={<DollarSign className="w-5 h-5 text-indigo-400" />}
          iconBg="bg-indigo-500/10"
        />
        <KpiCard
          title="MRR"
          value="$93.2K"
          change={kpiData.mrr.change}
          icon={<ArrowUp className="w-5 h-5 text-purple-400" />}
          iconBg="bg-purple-500/10"
        />
        <KpiCard
          title="Active Users"
          value="7,850"
          change={kpiData.activeUsers.change}
          icon={<Users className="w-5 h-5 text-cyan-400" />}
          iconBg="bg-cyan-500/10"
        />
        <KpiCard
          title="Churn Rate"
          value="1.1%"
          change={kpiData.churnRate.change}
          changeLabel="vs last month"
          icon={<TrendingDown className="w-5 h-5 text-emerald-400" />}
          iconBg="bg-emerald-500/10"
        />
      </div>

      {/* Secondary KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/15 to-purple-600/10 p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">ARR</p>
          <p className="text-2xl font-bold text-white">$1.12M</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">+6.6%</span>
            <span className="text-xs text-gray-500">annualized</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/15 to-indigo-600/10 p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">New Signups</p>
          <p className="text-2xl font-bold text-white">920</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">+21.1%</span>
            <span className="text-xs text-gray-500">this month</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/15 to-pink-600/10 p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Avg Revenue / User</p>
          <p className="text-2xl font-bold text-white">$11.88</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">+3.2%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <MrrLineChart />
        </div>
        <div>
          <SignupsBarChart />
        </div>
      </div>

      {/* Charts row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <ActiveUsersAreaChart />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Plan Distribution</h3>
          <div className="space-y-3">
            {[
              { plan: "Enterprise", count: 142, pct: 18, color: "bg-purple-500" },
              { plan: "Pro", count: 389, pct: 50, color: "bg-indigo-500" },
              { plan: "Starter", count: 251, pct: 32, color: "bg-cyan-500" },
            ].map((item) => (
              <div key={item.plan}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-gray-300">{item.plan}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{item.count} users</span>
                    <span className="text-xs font-semibold text-white">{item.pct}%</span>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={"h-full rounded-full " + item.color}
                    style={{ width: item.pct + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Total Paying Users</span>
              <span className="text-sm font-bold text-white">782</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">Trial Users</span>
              <span className="text-sm font-bold text-white">68</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  );
}
