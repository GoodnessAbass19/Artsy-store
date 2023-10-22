// import { getOneProduct } from "@/sanity/sanity.query";
// import { ProductType } from "@/types";
// import LiveAuction from "./Modal";

// const Fetch = async ({
//   product,
//   children,
// }: {
//   product: string;
//   children: any;
// }) => {
//   const auction: ProductType = await getOneProduct(product);
//   return <LiveAuction children={children} product={auction} />;
// };

// export default Fetch;

"use client";

import React, { useState, useEffect } from "react";
import { getOneProduct } from "@/sanity/sanity.query";
import { ProductType } from "@/types";
import LiveAuction from "./Modal";

const Fetch = ({ product, children }: { product: string; children: any }) => {
  const [auction, setAuction] = useState<ProductType>();

  useEffect(() => {
    const fetchProduct = async () => {
      const auction = await getOneProduct(product);
      setAuction(auction);
    };

    fetchProduct();
  }, []);

  if (!auction) return null;

  return <LiveAuction children={children} product={auction} />;
};

export default Fetch;
