"use client";
import { ProductIdProps } from "@/lib/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/currencyFromate";
import TrekCard from "./TrekCard";
import { Button } from "./ui/button";
import { useProduct } from "@/hooks/product-pop-up";

const ProductInfoCard = ({ data }: ProductIdProps) => {
  const { onOpen } = useProduct();
  const [imageUrl, setImageUrl] = useState(data?.images?.[0]?.asset?.url || "");
  useEffect(() => {
    if (data?.images?.length > 0) {
      setImageUrl(data.images[0]?.asset?.url);
    }
  }, [data]);

  return (
    <>
      <div className="w-full md:px-20 px-4 flex lg:flex-row flex-col lg:gap-[150px]">
        <div className="flex flex-col">
          <div className="w-full md:h-[80dvh] h-[70%]">
            <Image
              src={imageUrl || "/default-image.jpg"}
              alt="_Product_image_"
              width={700}
              height={700}
              className="w-full h-full rounded-sm"
            />
          </div>
          <div className="flex mt-4 flex-row space-x-5">
            {data?.images?.map((img, index) => (
              <div
                key={index}
                className="w-[100px] md:h-[100px] h-[80px] cursor-pointer"
                onClick={() => setImageUrl(img?.asset?.url)}
              >
                <Image
                  src={img?.asset?.url}
                  alt="_product_image_"
                  className="w-full h-full rounded-sm"
                  width={700}
                  height={700}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-6 md:space-y-6 space-y-4">
          <h1 className="text-3xl font-bold">{data?.productName}</h1>
          <p className="text-2xl text-teal-700 font-bold">
            {formatCurrency(data?.price)}{" "}
          </p>
          <p className="text-[16px] font-semibold text-[#333] text-wrap md:max-w-2xl w-full">
            {data?.description}
          </p>
          <p className="font-bold">
            Quantity: <span className="font-bold text-teal-700">1</span>
          </p>
          <Button
            onClick={() => onOpen()}
            className="bg-teal-600 hover:bg-teal-600/90 md:max-w-44 mt-4"
          >
            Book Now
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <TrekCard />
      </div>
    </>
  );
};

export default ProductInfoCard;
