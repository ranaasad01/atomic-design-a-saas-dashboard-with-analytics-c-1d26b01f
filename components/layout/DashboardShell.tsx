"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white flex">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <div
        style={{ marginLeft: collapsed ? "4rem" : "16rem" }}
        className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out"
      >
        <Navbar onMenuToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
