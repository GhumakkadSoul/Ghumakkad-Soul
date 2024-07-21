import "./globals.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Booking from "@/components/Booking";
import Whatsapp from "@/components/Whatapp";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Home",
  description:
    "Best tour and travels Company in India and uttarakhand.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Ghumakkad Soul | Home`,
    description: `Best tour and travels Company in India and uttarakhand.`,
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
      <GoogleAnalytics />
      <body className={inter.className}>
        <MantineProvider>
          <Navbar />
          <Booking />
          <Search />
          {children}
          <Whatsapp />
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
