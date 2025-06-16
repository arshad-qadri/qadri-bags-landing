import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qadri Bags | School Bag Manufacturer & Supplier",
  description:
    "Qadri Bags offers high-quality school bags at wholesale and retail prices. Trusted manufacturer and supplier based in Maharashtra.",
  keywords:
    "school bags, bag manufacturer India, wholesale bags, Qadri Bags, school bag factory, Sangli bags",
  authors: [{ name: "Qadri Bags" }],
  creator: "Qadri Bags",
  publisher: "Qadri Bags",
  robots: "index, follow",
  metadataBase: new URL("https://shop.arshadqadri.com"), // ← canonical base
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Qadri Bags | School Bag Manufacturer & Supplier",
    description:
      "Qadri Bags offers high-quality school bags at wholesale and retail prices. Trusted manufacturer and supplier based in Maharashtra.",
    url: "https://shop.arshadqadri.com",
    siteName: "Qadri Bags",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Qadri Bags - School Bag Manufacturer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qadri Bags | School Bag Manufacturer & Supplier",
    description:
      "Qadri Bags offers high-quality school bags at wholesale and retail prices. Trusted manufacturer and supplier based in Maharashtra.",
    images: ["/images/hero-bg.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
