"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import ProductFormInput, { ProductFormeSchema } from "./ProductFormInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import getTrekName from "@/sanity/lib/querys/getalltrekname";
import getProductName from "@/sanity/lib/querys/getProductName";
import { quantity } from "@/lib/types";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useProduct } from "@/hooks/product-pop-up";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  _id: string;
  trekName: string;
}
interface ProductFormProps {
  _id: string;
  productName: string;
}

const ProductBookingForm = () => {
  const { onClose } = useProduct();
  const router = useRouter();
  // States
  const [isLoading, setisLoading] = useState(false);
  const [trekname, setTrekname] = useState<BookingFormProps[]>([]);
  const [productname, setProductname] = useState<ProductFormProps[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const today = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const trekData = await getTrekName();
      const productData = await getProductName();
      setTrekname(trekData);
      setProductname(productData);
    };
    fetchData();
  }, []);

  const form = useForm<z.infer<typeof ProductFormeSchema>>({
    resolver: zodResolver(ProductFormeSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof ProductFormeSchema>) => {
    try {
      setisLoading(true);
      const response = await fetch("/api/sendEmail/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        onClose();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setisLoading(false);
      router.push("/submit");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <ProductFormInput
              name="fullName"
              control={form.control}
              placeholder="Full Name"
            />
            <ProductFormInput
              name="phoneNumber"
              control={form.control}
              placeholder="Phone Number"
            />

            {/* Product Select */}
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="focus:ring-1 focus:ring-teal-700">
                        <SelectValue placeholder="Select Product...." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {productname.map((product, index) => (
                            <SelectItem key={index} value={product.productName}>
                              {product.productName}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Trek Select */}
            <FormField
              control={form.control}
              name="trekName"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="focus:ring-1 focus:ring-teal-700">
                        <SelectValue placeholder="Select Trek...." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {trekname.map((trek, index) => (
                            <SelectItem key={index} value={trek.trekName}>
                              {trek.trekName}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Quantity Select */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="focus:ring-1 focus:ring-teal-700">
                        <SelectValue placeholder="Select Quantity...." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {quantity.map((qty, index) => (
                            <SelectItem key={index} value={qty.value}>
                              {qty.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Date Picker */}
            <FormField
              control={form.control}
              name="trekDate"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Select Trek Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date ?? undefined}
                        onSelect={(selectedDate) => {
                          if (selectedDate && selectedDate >= today) {
                            setDate(selectedDate);
                            field.onChange(selectedDate);
                          } else {
                            setDate(today);
                            field.onChange(today);
                          }
                        }}
                        initialFocus
                        disabled={(day) => day < today}
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-600/90">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductBookingForm;
