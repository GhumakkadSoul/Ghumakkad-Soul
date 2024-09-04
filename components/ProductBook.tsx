"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProduct } from "@/hooks/product-pop-up";
import ProductBookingForm from "./ProductBookingForm";

const ProductBook = () => {
  const { isOpen, onClose, onOpen } = useProduct();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8 text-center text-teal-700 font-bold text-2xl">
          Book Now
        </DialogTitle>
        <div className="w-full px-4 mt-3 h-full">
          <ProductBookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductBook;
