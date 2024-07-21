import React from "react";
import whatsapp from "@/public/whatsapp.png";
import Image from "next/image";
const Whatsapp = () => {
  return (
    <div className="w-[60px] h-[60px] fixed z-50 rounded-full bg-teal-700 md:right-10 right-5 cursor-pointer bottom-10">
      <a href="https://wa.me/+918630024459?text=hi" className="w-full h-full">
        <Image src={whatsapp} alt="" className="w-full h-full" />
      </a>
    </div>
  );
};

export default Whatsapp;
