import ProductBook from "@/components/ProductBook";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rent Trekking Gears | Ghumakkad Soul",
  description: "Rent high Quality Trekking Gears from Ghumakkad Soul.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Rent Trekking Gears | Ghumakkad Soul`,
    description: `Rent high Quality Trekking Gears from Ghumakkad Soul.`,
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.in/products`,
    siteName: "ghumakkadsoul.in",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <ProductBook />
      {children}
    </div>
  );
};

export default layout;
