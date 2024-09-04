import ProductCard from "@/components/ProductCard";
import getProducts from "@/sanity/lib/querys/getProducts";
import React from "react";

const page = async () => {
  const data = await getProducts();

  return (
    <div className="w-full h-full lg:px-20 px-4 my-6">
      <h1 className="font-bold text-[18px] md:text-3xl  relative heading">
        Rent Trekking Gears
      </h1>
      <ProductCard data={data || []} />
    </div>
  );
};

export default page;
