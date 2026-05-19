"use client";

import { useState } from "react";
import { Bell, Search, Menu, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

const notifications = [
  { id: 1, text: "New user signed up: Iris Chen", time: "2 min ago", unread: true },
  { id: 2, text: "Revenue milestone: $100K MRR reached!", time: "1 hr ago", unread: true },
  { id: 3, text: "Churn alert: 3 Enterprise accounts at risk", time: "3 hrs ago", unread: true },
  { id: 4, text: "Monthly report is ready to download", time: "1 day ago", unread: false },
];

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="h-16 bg-[#1E1E2E]/80 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-4 sticky top-0 z-10">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden text-gray-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search metrics, users, reports..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-[#1E1E2E] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Notifications</span>
                <span className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300">
                  Mark all read
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {n.unread && (
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      )}
                      {!n.unread && <div className="w-2 h-2 mt-1.5 shrink-0" />}
                      <div>
                        <p className="text-xs text-gray-300 leading-relaxed">{n.text}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-white/10">
                <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-white leading-tight">Jane Doe</p>
              <p className="text-xs text-gray-400 leading-tight">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#1E1E2E] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-sm font-medium text-white">Jane Doe</p>
                <p className="text-xs text-gray-400">jane@analytix.io</p>
              </div>
              <div className="py-1">
                {["Profile", "Settings", "Billing", "Sign out"].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
