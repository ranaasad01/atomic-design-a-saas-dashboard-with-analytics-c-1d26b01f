"use client";

import { useState } from "react";
import { User, Bell, Eye, Shield, CreditCard, Save } from 'lucide-react';

const tabs = [
  { id: "account", label: "Account", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Eye },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
];

const notificationSettings = [
  { id: "new_user", label: "New user signup", desc: "Get notified when a new user registers", enabled: true },
  { id: "churn_alert", label: "Churn alerts", desc: "Alerts when users are at risk of churning", enabled: true },
  { id: "revenue_milestone", label: "Revenue milestones", desc: "Celebrate when you hit revenue goals", enabled: true },
  { id: "weekly_report", label: "Weekly digest", desc: "Summary of key metrics every Monday", enabled: false },
  { id: "payment_failed", label: "Payment failures", desc: "Immediate alert on failed transactions", enabled: true },
  { id: "trial_expiry", label: "Trial expiry reminders", desc: "Notify when trials are about to expire", enabled: false },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [notifications, setNotifications] = useState(
    Object.fromEntries(notificationSettings.map((n) => [n.id, n.enabled]))
  );
  const [theme, setTheme] = useState("dark");
  const [accentColor, setAccentColor] = useState("indigo");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your account preferences, notifications, and appearance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar tabs */}
        <div className="lg:w-56 shrink-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2 space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={[
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left",
                  activeTab === id
                    ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "account" && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Account Information</h2>
                <p className="text-xs text-gray-400">Update your personal details and profile settings.</p>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  JD
                </div>
                <div>
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Change avatar
                  </button>
                  <p className="text-xs text-gray-500 mt-0.5">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "First Name", value: "Jane", type: "text" },
                  { label: "Last Name", value: "Doe", type: "text" },
                  { label: "Email Address", value: "jane@analytix.io", type: "email" },
                  { label: "Job Title", value: "Head of Growth", type: "text" },
                  { label: "Company", value: "Analytix Inc.", type: "text" },
                  { label: "Timezone", value: "UTC-5 (Eastern)", type: "text" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Building the future of SaaS analytics. Passionate about data-driven growth and product-led expansion."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Notification Preferences</h2>
                <p className="text-xs text-gray-400">Choose which events trigger email and in-app notifications.</p>
              </div>

              <div className="space-y-3">
                {notificationSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{setting.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{setting.desc}</p>
                    </div>
                    <button
                      onClick={() =>
                        setNotifications((prev) => ({ ...prev, [setting.id]: !prev[setting.id] }))
                      }
                      className={[
                        "relative w-11 h-6 rounded-full transition-colors shrink-0",
                        notifications[setting.id] ? "bg-indigo-600" : "bg-white/10",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                          notifications[setting.id] ? "translate-x-5" : "translate-x-0.5",
                        ].join(" ")}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Save Preferences"}
              </button>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Appearance</h2>
                <p className="text-xs text-gray-400">Customize the look and feel of your dashboard.</p>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-3">Theme</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "dark", label: "Dark", bg: "bg-[#1E1E2E]", border: "border-indigo-500" },
                    { id: "light", label: "Light", bg: "bg-gray-100", border: "border-gray-300" },
                    { id: "system", label: "System", bg: "bg-gradient-to-br from-[#1E1E2E] to-gray-100", border: "border-gray-500" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={["rounded-xl border-2 p-4 transition-all", theme === t.id ? "border-indigo-500" : "border-white/10"].join(" ")}
                    >
                      <div className={["w-full h-12 rounded-lg mb-2", t.bg].join(" ")} />
                      <p className="text-xs text-center text-gray-300">{t.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-3">Accent Color</p>
                <div className="flex items-center gap-3">
                  {[
                    { id: "indigo", color: "bg-indigo-500" },
                    { id: "purple", color: "bg-purple-500" },
                    { id: "cyan", color: "bg-cyan-500" },
                    { id: "emerald", color: "bg-emerald-500" },
                    { id: "amber", color: "bg-amber-500" },
                    { id: "rose", color: "bg-rose-500" },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setAccentColor(c.id)}
                      className={["w-8 h-8 rounded-full transition-all", c.color, accentColor === c.id ? "ring-2 ring-white ring-offset-2 ring-offset-[#1E1E2E] scale-110" : ""].join(" ")}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-3">Sidebar</p>
                <div className="flex items-center gap-4">
                  {["Expanded", "Collapsed", "Auto-hide"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sidebar" defaultChecked={opt === "Expanded"} className="accent-indigo-500" />
                      <span className="text-sm text-gray-300">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Save Appearance"}
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Security Settings</h2>
                <p className="text-xs text-gray-400">Manage your password, 2FA, and active sessions.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-all" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-400 mt-0.5">Add an extra layer of security to your account</p>
                  </div>
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">Not enabled</span>
                </div>
                <button className="mt-3 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Enable 2FA →
                </button>
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Update Password"}
              </button>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Billing &amp; Subscription</h2>
                <p className="text-xs text-gray-400">Manage your plan, payment method, and invoices.</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-white">Pro Plan</p>
                    <p className="text-xs text-gray-400">$79/month · Billed monthly</p>
                  </div>
                  <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-full border border-indigo-400/20">
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium">
                    Upgrade to Enterprise
                  </button>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors">
                    Cancel plan
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-3">Payment Method</p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                  <div className="w-10 h-7 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="text-sm text-white">•••• •••• •••• 4242</p>
                    <p className="text-xs text-gray-400">Expires 12/26</p>
                  </div>
                  <button className="ml-auto text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                    Update
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-3">Recent Invoices</p>
                <div className="space-y-2">
                  {[
                    { date: "Dec 1, 2024", amount: "$79.00", status: "Paid" },
                    { date: "Nov 1, 2024", amount: "$79.00", status: "Paid" },
                    { date: "Oct 1, 2024", amount: "$79.00", status: "Paid" },
                  ].map((inv) => (
                    <div key={inv.date} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
                      <span className="text-xs text-gray-300">{inv.date}</span>
                      <span className="text-xs font-semibold text-white">{inv.amount}</span>
                      <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{inv.status}</span>
                      <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Download</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
