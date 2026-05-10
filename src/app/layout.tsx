import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAVES - Premium Tailoring & Stitching Services",
  description:
    "Handcrafted stitching for men, women, and kids. Wholesale and boutique quality at reasonable prices. Custom designs, alterations, and more.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
