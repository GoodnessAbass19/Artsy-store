"use client";

import { useCartStore } from "@/store/CartStore";
import { FormatCurrencyValue } from "@/utils/formatCurrency";
import Image from "next/image";
import MinusIcon from "../ui/custom-icons/MinusIcon";
import PlusIcon from "../ui/custom-icons/PlusIcon";
import CloseIcon from "../ui/custom-icons/CloseIcon";

const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
  category,
}: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}) => {
  const [removeItem, updateItemQuantity] = useCartStore((state) => [
    state.removeFromCart,
    state.updateQuantity,
  ]);

  return (
    <div
    //  className="flex items-start justify-between gap-4"
    >
      <div className="grid grid-cols-6 items-center gap-x-5">
        <div className=" relative col-span-2">
          <Image
            className="object-cover w-[220px] h-[200px] rounded-lg"
            src={image}
            alt={name}
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="grid col-span-4 space-y-3">
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="md:text-lg font-medium leading-tight">{name}</h3>
            <button
              onClick={() => removeItem(id)}
              className="flex gap-2 items-center border-2 rounded-full"
            >
              <CloseIcon className="w-6 h-6 text-[#BCB7B7] hover:text-black" />
            </button>
          </div>

          <p className="text-[#888] italic">{category}</p>
          <p className="flex gap-x-2 items-center text-base font-normal">
            <span className="text-[#888] capitalize">size:</span> 200 ft
          </p>

          <div className="flex justify-between items-center flex-row w-full">
            <div className="flex items-center gap-1 sm:gap-2 border border-primary h-8 rounded  w-fit">
              <button
                className="h-full w-fit flex justify-center items-center px-3 bg-primary-gray/10"
                onClick={() => updateItemQuantity(id, "decrease")}
              >
                <MinusIcon className="w-4 h-4 " />
              </button>
              <span className="w-fit px-2">{quantity}</span>
              <button
                className="h-full w-fit flex justify-center items-center px-3 bg-primary-gray/10"
                onClick={() => updateItemQuantity(id, "increase")}
              >
                <PlusIcon className="w-4 h-4 " />
              </button>
            </div>

            <span className="font-semibold text-lg md:text-2xl">
              {FormatCurrencyValue(price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
