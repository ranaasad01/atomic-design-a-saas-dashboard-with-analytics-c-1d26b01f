"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Activity, Users, Settings, ChevronRight, X, Sparkles, ArrowUp } from 'lucide-react';

const navItems = [
  { href: "/", label: "Dashboard", icon: Layout },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/users", label: "Users", icon: Users },
  { href: "/revenue", label: "Revenue", icon: ArrowUp },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        style={{ width: collapsed ? "4rem" : "16rem" }}
        className="fixed top-0 left-0 h-full z-30 flex flex-col bg-[#1E1E2E] border-r border-white/10 transition-all duration-300 ease-in-out"
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <span className="font-bold text-white text-lg truncate">Analytix</span>
            )}
          </div>
          <button
            onClick={onToggle}
            className="ml-auto text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {!collapsed && (
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
              Main Menu
            </p>
          )}
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group relative",
                  isActive
                    ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                <Icon className={["w-5 h-5 shrink-0", isActive ? "text-indigo-400" : ""].join(" ")} />
                {!collapsed && (
                  <span className="text-sm font-medium truncate">{label}</span>
                )}
                {isActive && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                )}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom upgrade card */}
        <div className="p-3 border-t border-white/10 shrink-0">
          {!collapsed ? (
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">Pro Plan</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Upgrade for unlimited analytics and team seats.
              </p>
              <button className="w-full text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-1.5 transition-colors font-medium">
                Upgrade Now
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
