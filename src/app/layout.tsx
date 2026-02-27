import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maloti Prime — Lesotho's First Premium Cannabis Delivery",
  description:
    "Maloti Prime is Lesotho's first and largest premium cannabis dispensary. Experience luxury delivered directly to your door with the finest curated selection.",
  keywords: [
    "Maloti Prime",
    "Lesotho",
    "cannabis",
    "premium dispensary",
    "delivery",
    "Maseru",
  ],
  openGraph: {
    title: "Maloti Prime — Lesotho's First Premium Cannabis Delivery",
    description:
      "Experience luxury cannabis delivered directly to your door in Lesotho.",
    type: "website",
    locale: "en_LS",
    siteName: "Maloti Prime",
  },
  robots: "index, follow",
};

import { MalotiProvider } from "@/context/MalotiContext";
import GlobalModals from "@/components/GlobalModals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-display antialiased selection:bg-[#f49d25] selection:text-black`}
      >
        <MalotiProvider>
          {children}
          <GlobalModals />
        </MalotiProvider>
      </body>
    </html>
  );
}
