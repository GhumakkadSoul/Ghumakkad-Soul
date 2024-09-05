import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/lib/types";
import bp from "@/public/bg1.jpg";
import { formatCurrency } from "@/lib/currencyFromate";

const ProductCard = ({ data }: ProductProps) => {
  return (
    <div className="w-full md:mt-12 mt-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-5">
        {data.map((item, index) => (
          <Link
            href={`/products/${item?.slug?.current}`}
            key={index}
            className="md:w-[350px] w-full rounded-md h-[400px] p-3"
          >
            <div className="w-full h-[85%] bg-white rounded-md">
              <Image
                src={item?.images[0]?.asset.url}
                alt="Rent_Trekking_Product"
                width={700}
                height={700}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col mt-2 font-semibold text-[17px]">
              <p>{item?.productName}</p>
              <p className="text-emerald-500">
                {formatCurrency(item?.price)}{" "}
                <span className="text-sm text-black">(Per day)</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
