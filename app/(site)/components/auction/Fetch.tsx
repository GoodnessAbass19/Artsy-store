import { getOneProduct } from "@/sanity/sanity.query";
import { ProductType } from "@/types";
import LiveAuction from "./Modal";

const Fetch = async ({
  product,
  children,
}: {
  product: string;
  children: any;
}) => {
  const auction: ProductType = await getOneProduct(product);
  return <LiveAuction children={children} product={auction} />;
};

export default Fetch;
