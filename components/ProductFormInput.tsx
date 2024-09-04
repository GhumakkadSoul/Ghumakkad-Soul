import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

export const ProductFormeSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string(),
  productName: z.string(),
  trekName: z.string(),
  trekDate: z.date(),
  quantity: z.string(),
});

interface CustominputProps {
  control: Control<z.infer<typeof ProductFormeSchema>>;
  name: FieldPath<z.infer<typeof ProductFormeSchema>>;
  placeholder: string;
}

const ProductFormInput = ({ control, name, placeholder }: CustominputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={
                field.value instanceof Date
                  ? format(field.value, "yyyy-MM-dd")
                  : field.value
              }
              className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-teal-700 rounded-mdprim-input"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProductFormInput;
