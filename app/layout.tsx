import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "trader prop",
    template: "%s | trader prop",
  },
  description:
    "trader prop — the modern proprietary trading platform built for serious traders.",
  openGraph: {
    title: "trader prop",
    description:
      "trader prop — the modern proprietary trading platform built for serious traders.",
    siteName: "trader prop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trader prop",
    description:
      "trader prop — the modern proprietary trading platform built for serious traders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
