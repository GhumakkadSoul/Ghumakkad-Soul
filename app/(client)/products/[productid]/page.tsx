import ProductInfoCard from "@/components/ProductInfoCard";
import getFullProduct from "@/sanity/lib/querys/getFullProduct";
import { Metadata } from "next";
import React from "react";

interface Params {
  params: {
    productid: string;
  };
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  return {
    title: `Products | ${params?.productid}`,
    description: `Products | ${params?.productid}`,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: `${params?.productid}`,
      description: `Products | ${params?.productid}`,
      type: "website",
      locale: "en_IN",
      url: `https://ghumakkadsoul.in/products/${params?.productid}`,
      siteName: "ghumakkadsoul.in",
    },
  };
}

const Page = async ({ params }: Params) => {
  const data = await getFullProduct(params?.productid);
  return (
    <div className="my-12">
      <ProductInfoCard data={data || {}} />
    </div>
  );
};

export default Page;
