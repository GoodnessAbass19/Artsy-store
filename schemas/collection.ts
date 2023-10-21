import FolderIcon from "@/app/(site)/components/ui/custom-icons/FolderIcon";
import { defineField } from "sanity";

const collection = {
  name: "collection",
  title: "Collection",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload a picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default collection;
