"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function GlassCard({ children, className = "", gradient = false }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 backdrop-blur-sm",
        gradient
          ? "bg-gradient-to-br from-white/8 to-white/4"
          : "bg-white/5",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
