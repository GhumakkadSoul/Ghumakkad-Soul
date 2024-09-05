import { Rule } from "sanity";

export const Products = {
  name: "products",
  title: "Product Card",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().error("Product Name is required"),
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().error("Product Price is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "productName" },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.max(250).warning("Description should not exceed 250 characters"),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) =>
        Rule.required().min(1).error("At least one image is required"),
    },
  ],
};
