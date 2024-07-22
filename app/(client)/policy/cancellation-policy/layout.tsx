import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Cancellation Policy",
  description: "Ghumakkad Soul Trek Cancellation Policy ",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Ghumakkad Soul | Cancellation Policy`,
    description: `Ghumakkad Soul Trek Cancellation Policy. `,
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.in/policy/cancellation-policy`,
    siteName: "ghumakkadsoul.in",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
