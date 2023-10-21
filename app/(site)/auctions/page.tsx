import React from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import Like from "../components/auction/Like";
import { ProductType } from "@/types";
import { getAuctionProducts } from "@/sanity/sanity.query";
import Auction from "../components/auction/Auction";
import TopBid from "../components/auction/TopBid";

const breadcrumbList = [
  {
    title: "auction",
    href: "#",
    color: "text-black",
  },
];

const page = async () => {
  const product: ProductType[] = await getAuctionProducts();

  return (
    <main className="max-w-7xl mx-auto py-10 px-5">
      <Breadcrumb breadcrumbList={breadcrumbList} />

      <div className="pt-20 space-y-20">
        <h2 className="md:text-2xl text-xl font-semibold">
          Here’s an overview of products actively on auction, explore!
        </h2>

        <Auction product={product} />

        <TopBid />
      </div>
    </main>
  );
};

export default page;
