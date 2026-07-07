import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/site-data";
import FloatingCallButton from "@/components/FloatingCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://www.actionaceplumbing.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Action Ace Plumbing | Edmonton's Trusted Owner-Operated Plumber",
    template: "%s | Action Ace Plumbing",
  },
  description:
    "Owner-operated residential plumbing and gas fitting in Edmonton, Sherwood Park, St. Albert, Leduc, Spruce Grove, Beaumont & Fort Saskatchewan. 14 years experience, licensed, bonded, insured. Call (780) 991-4612.",
  keywords: [
    "Edmonton Plumber",
    "Emergency Plumber Edmonton",
    "Drain Cleaning Edmonton",
    "Gas Fitter Edmonton",
    "Leak Repair Edmonton",
    "Residential Plumbing Edmonton",
    "Sewer Camera Inspection Edmonton",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: business.name,
    title: "Action Ace Plumbing | Edmonton's Trusted Owner-Operated Plumber",
    description:
      "14 years of honest, professional residential plumbing in Edmonton and surrounding areas. Owner-operated by Greg Jober, a Certified Journeyman Plumber.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Action Ace Plumbing | Edmonton's Trusted Owner-Operated Plumber",
    description:
      "14 years of honest, professional residential plumbing in Edmonton and surrounding areas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
