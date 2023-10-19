"use client";

import { useCartStore } from "@/store/CartStore";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MinusIcon from "../ui/custom-icons/MinusIcon";
import PlusIcon from "../ui/custom-icons/PlusIcon";
import { FormatCurrencyValue } from "@/utils/formatCurrency";
import EthereumIcon from "../ui/custom-icons/EthereumIcon";

const ProductDetail = ({
  id,
  image,
  price,
  name,
  slug,
  description,
  made,
  creator,
  views,
}: {
  id: string;
  image: any;
  price: number;
  name: string;
  slug: string;
  description: string;
  made: string;
  creator: string;
  views: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = useCartStore((state) => state.addToCart);

  const data = useMemo(
    () => ({
      id,
      image,
      price,
      name,
      slug,
      quantity,
    }),
    [id, image, price, name, slug, quantity]
  );

  return (
    <div className="mx-auto">
      <div className="grid gap-y-5 md:gap-y-10 divide-y-2 divide-[#BCB7B7]">
        <div className="flex justify-between items-center p-5">
          <h2 className="font-semibold md:text-4xl text-2xl text-center">
            {name}
          </h2>
          <div className="flex gap-3">
            <EthereumIcon className="w-7 h-7" />
            <p className="text-xl font-semibold">
              {FormatCurrencyValue(price)}
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-y-5">
          <span className="flex gap-3 items-center">
            <h3 className="md:text-2xl text-xl font-medium capitalize text-[#616161]">
              creators:
            </h3>
            <p className="text-[#4693ED] md:text-2xl text-xl font-medium capitalize">
              {creator}
            </p>
          </span>
          <span className="text-xl font-normal capitalize">{made}</span>

          <span className="flex gap-3 items-center">
            <h3 className="md:text-2xl text-xl font-medium capitalize">
              total views:
            </h3>
            <p className="md:text-2xl text-xl font-medium">{views}K views</p>
          </span>

          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="flex items-center gap-2 border border-primary h-10 rounded">
              <button
                className="h-full w-fit flex justify-center items-center px-3 bg-[#828282]/10"
                onClick={
                  quantity > 1
                    ? () => setQuantity(quantity - 1)
                    : () => setQuantity(1)
                }
              >
                <MinusIcon className="w-4 h-4 " />
              </button>
              <span className="w-fit px-2">{quantity}</span>
              <button
                className="h-full w-fit flex justify-center items-center px-3 bg-[#828282]/10"
                onClick={
                  quantity < 10
                    ? () => setQuantity(quantity + 1)
                    : () => setQuantity(10)
                }
              >
                <PlusIcon className="w-4 h-4 " />
              </button>
            </div>

            {/* <AddToCartButton name={name} data={data} /> */}
            {/* <Button
          variant={"outline"}
          className="flex items-center justify-center w-full max-w-[157px] md:min-w-[157px] h-10 text-sm text-black bg-[#ffe4c4] border border-[#ffe4c4] rounded trans-150"
          onClick={() => {
            {
              addToCart(data);
            }
            router.push("/cart");
          }}
        >
          Buy Now
        </Button> */}
          </div>
        </div>

        <div className="grid gap-y-5 divide-y-2 divide-[#BCB7B7]">
          <Accordion type="single" collapsible className="md:p-5 p-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-3xl text-2xl font-medium capitalize">
                description
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="md:p-5 p-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-3xl text-2xl font-medium capitalize">
                listing
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="md:p-5 p-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-3xl text-2xl font-medium capitalize">
                status
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
