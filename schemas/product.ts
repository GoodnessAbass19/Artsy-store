import CartIcon from "@/app/(site)/components/ui/custom-icons/CartIcon";
import { defineField } from "sanity";

export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  icon: CartIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "creator",
      title: "Creator",
      type: "string",
    },
    {
      name: "made",
      title: "Made",
      type: "string",
    },
    {
      name: "views",
      title: "Views",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "collection" }],
    },
  ],
};
