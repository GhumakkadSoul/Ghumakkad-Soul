import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import Whatsapp from "@/components/Whatapp";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Home",
  description: "Best tour and travels Company in India and Uttarakhand.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Ghumakkad Soul | Home`,
    description: `Best tour and travels Company in India and Uttarakhand.`,
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.in/`,
    siteName: "ghumakkadsoul.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W29SL4QL" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W29SL4QL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <Booking />
        <Search />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
