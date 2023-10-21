"use client";

import { useCartStore } from "@/store/CartStore";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import CheckoutList from "./CheckoutList";
import { FormatCurrencyValue } from "@/utils/formatCurrency";

const CartBody = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return <CartEmpty />;
  }
  return (
    <div>
      <div className="flex flex-col justify-between gap-10 md:gap-4">
        {/* cart */}
        <div className="w-full h-full border-t pt-5">
          {items?.map((item) => (
            <div key={item.slug} className="border-b p-4 md:p-6  my-2.5">
              <CartItem
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* checkout */}
        <div className="lg:sticky md:top-[100px] rounded h-fit min-w-full sm:min-w-[400px] mx-auto max-w-[500px] overflow-hidden border border-primary-gray/20 ">
          <div className="bg-primary-gray/10 px-4 py-3 ">
            <h3 className="text-lg md:text-xl font-semibold">Cart Total</h3>
          </div>

          <div className="p-4 mt-6">
            <CheckoutList
              title="Sub Total"
              value={FormatCurrencyValue(totalPrice)}
            />
            <hr className="border-primary-gray/20 mt-4 mb-6" />

            <CheckoutList title="Delivery Cost" value="TBD" />
            <hr className="border-primary-gray/20 mt-4 mb-6" />

            <CheckoutList title="Discount" value="0%" />
            <hr className="border-primary-gray/20 mt-4 mb-6" />

            <CheckoutList
              title="TOTAL"
              value={FormatCurrencyValue(totalPrice)}
            />
          </div>

          <div className="mt-4 mb-6 px-4 space-y-4">
            <button
              className="flex items-center justify-center w-full h-10 text-sm text-[#ffe4c4] dark:text-white hover:text-black hover:bg-[#ffe4c4]  border border-[#ffe4c4]  rounded trans-150"
              onClick={() =>
                useCartStore.setState({
                  items: [],
                  totalPrice: 0,
                  totalItems: 0,
                })
              }
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
