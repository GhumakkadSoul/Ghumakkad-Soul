import { type SchemaTypeDefinition } from "sanity";
import { slider } from "@/sanity/lib/schemas/backgroundSlider";
import { navbar } from "@/sanity/lib/schemas/navbar";
import { trekCard } from "@/sanity/lib/schemas/trekCard";
import { banner } from "@/sanity/lib/schemas/banner";
import { about } from "@/sanity/lib/schemas/about";
import { review } from "@/sanity/lib/schemas/review";
import { blogs } from "@/sanity/lib/schemas/blog";
import { comment } from "@/sanity/lib/schemas/comment";
<<<<<<< HEAD
import { Products } from "@/sanity/lib/schemas/products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    slider,
    navbar,
    trekCard,
    banner,
    about,
    review,
    blogs,
    comment,
    Products,
  ],
=======

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider, navbar, trekCard, banner, about, review, blogs, comment],
>>>>>>> b797115820d624260aa03a194286938b1aa4b457
};
