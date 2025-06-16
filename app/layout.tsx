import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://shop.arshadqadri.com"),
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Qadri Bags",
      url: "https://shop.arshadqadri.com",
      logo: "https://arshadqadri.com/profile.jpg",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8007330423",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9876543210",
          contactType: "Sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/arshad-qadri/",
        "https://github.com/arshad-qadri",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Qadri Bags",
      image: "https://arshadqadri.com/profile.jpg",
      "@id": "https://shop.arshadqadri.com",
      url: "https://shop.arshadqadri.com",
      telephone: "+91-8007330423",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ramkrishna Nagar, Near Sud Girni, Kupwad Road",
        addressLocality: "Sangli",
        addressRegion: "Maharashtra",
        postalCode: "416416",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 16.8544,
        longitude: 74.5815,
      },
      openingHours: "Mo-Sa 09:00-18:00",
      sameAs: [
        "https://www.linkedin.com/in/arshad-qadri/",
        "https://github.com/arshad-qadri",
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
