import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Trek Terms and Conditions ",
  description: "Ghumakkad Soul Trek Terms and Conditions",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Ghumakkad Soul | Trek Terms and Conditions`,
    description: `Ghumakkad Soul Trek Terms and Conditions. `,
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.in/policy/treks-terms-and-conditions`,
    siteName: "ghumakkadsoul.in",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
