import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/lib/types";
import { formatCurrency } from "@/lib/currencyFromate";
import { Button } from "./ui/button";

const ProductCard = ({ data }: ProductProps) => {
  return (
    <div className="w-full md:mt-12 mt-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="md:w-[350px] w-full rounded-lg h-[450px] p-3 shadow-md"
          >
            <div className="w-full h-[75%] bg-white rounded-md">
              <Image
                src={item?.images[0]?.asset.url}
                alt="Rent_Trekking_Product"
                width={700}
                height={700}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="flex flex-col mt-2 font-semibold text-[17px]">
              <p>{item?.productName}</p>
              <p className="text-emerald-500">{formatCurrency(item?.price)}</p>
              <Link href={`/products/${item?.slug?.current}`}>
                <Button className="mt-2 w-full bg-teal-600 hover:bg-teal-600/90">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
