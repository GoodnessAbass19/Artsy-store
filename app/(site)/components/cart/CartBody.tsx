"use client";

import { useCartStore } from "@/store/CartStore";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import CheckoutList from "./CheckoutList";
import { FormatCurrencyValue } from "@/utils/formatCurrency";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartBody = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const items = useCartStore((state) => state.items);
  const shipping = 2.5;

  if (items.length === 0) {
    return <CartEmpty />;
  }
  return (
    <div>
      <div className="flex flex-col justify-between gap-10 md:gap-4">
        {/* cart */}
        <div className="w-full h-full border-t pt-5">
          {items?.map((item) => (
            <div key={item.slug} className="border-b p-2 sm:p-4 md:p-6  my-2.5">
              <CartItem
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                category={item.category}
              />
            </div>
          ))}
        </div>
        {/* checkout */}
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-10 items-center px-10">
          <div className="space-y-10 flex justify-center flex-col items-center">
            <Button
              variant={"outline"}
              className="bg-black text-white p-10  text-2xl font-medium"
            >
              Proceed to checkout
            </Button>
            <Link
              href={"/marketplace"}
              className="text-black text-xl w-fit font-medium border-b-2 border-black text-center"
            >
              Continue shopping
            </Link>
          </div>

          <div className="lg:sticky md:top-[100px] rounded h-fit w-full mx-auto max-w-full overflow-hidden col-span-1">
            <div className="p-4 mt-6">
              <CheckoutList
                title="Products in cart:"
                value={`${totalItems} items`}
              />
              <hr className="border-primary-gray/20 mt-4 mb-6" />

              <CheckoutList
                title="Shipping Cost:"
                value={FormatCurrencyValue(shipping)}
              />
              <hr className="border-primary-gray/20 mt-4 mb-6" />

              <CheckoutList
                title="TOTAL:"
                value={FormatCurrencyValue(totalPrice + shipping)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
