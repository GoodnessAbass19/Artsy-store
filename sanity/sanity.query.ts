import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProduct() {
  return client.fetch(
    groq`*[_type == "product"]{
          _id,
          title,
          description,
          "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
          price,
          made,
          creator,
          views
        }`
  );
}

export async function getOneProduct(slug: string) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
          _id,
          title,
          description,
          "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
          price,
          made,
          creator,
          views,
          "category": category->{name},
        }`,
    { slug }
  );
}

export async function getProductsByCategory(category: string) {
  return client.fetch(
    groq`*[_type == "product" && category._ref in *[_type == "collection" && name == $category]._id] {
       _id,
          title,
          description,
          "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
          price,
          made,
          creator,
          views,
          "category": category->{name},
    }`,
    { category }
  );
}
