import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "KD Ready Mix Concrete | Premium RMC Supplier & Manufacturer",
  description:
    "KD is a leading ready mix concrete supplier offering high-quality RMC solutions for construction projects. ISO certified with 15+ years experience. Contact us for premium concrete delivery.",
  keywords:
    "ready mix concrete, RMC supplier, concrete manufacturer, construction materials, KD concrete, premium concrete, ISO certified concrete, concrete delivery",
  authors: [{ name: "KD Ready Mix Concrete" }],
  creator: "KD Ready Mix Concrete",
  publisher: "KD Ready Mix Concrete",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kd-concrete.com",
    siteName: "KD Ready Mix Concrete",
    title: "KD Ready Mix Concrete | Premium RMC Supplier & Manufacturer",
    description:
      "Leading ready mix concrete supplier with ISO certification and 15+ years experience. Premium quality RMC for all construction needs.",
    images: [
      {
        url: "/modern-concrete-mixing-plant-industrial-facility.jpg",
        width: 1200,
        height: 630,
        alt: "KD Ready Mix Concrete Manufacturing Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Ready Mix Concrete | Premium RMC Supplier",
    description:
      "Leading ready mix concrete supplier with ISO certification and 15+ years experience.",
    images: ["/modern-concrete-mixing-plant-industrial-facility.jpg"],
  },
  alternates: {
    canonical: "https://kd-concrete.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
