"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import CheckoutList from "./CheckoutList";
import { useCartStore } from "@/store/CartStore";
import { FormatCurrencyValue } from "@/utils/formatCurrency";
import LockIcon from "../ui/custom-icons/LockIcon";
import RadioIcon from "../ui/custom-icons/RadioIcon";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  wallet: z.string().min(2, {
    message: "please enter your email",
  }),
  key: z.string({
    required_error: "Please enter your key",
  }),
  date: z.string({
    required_error: "required",
  }),
  cvv: z.string({
    required_error: "required",
  }),
  check: z.boolean().default(false).optional(),
});

const Payment = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wallet: "",
      key: "",
      date: "",
      cvv: "",
    },
  });
  const router = useRouter();
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">thank you</p>
        </div>
      ),
    });
    router.push("/thanks");
  }

  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const items = useCartStore((state) => state.items);
  const shipping = 2.5;

  return (
    <main className="mt-10 grid md:grid-cols-2 gap-x-5 lg:gap-x-10 px-5">
      <div className="col-span-1">
        <h2 className="font-medium text-2xl hidden md:block">Payment method</h2>
        <div className="md:hidden flex gap-2 text-[#888] items-center">
          <LockIcon className="w-5 h-5" />
          <h2>Secure server</h2>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-1 space-y-8"
          >
            <div className="space-y-8 p-5 border mt-6">
              <div>
                <div className="flex items-start gap-x-3">
                  <RadioIcon className="w-7 h-7" />

                  <div className="space-y-2">
                    <h2 className="font-medium text-2xl">Select your wallet</h2>
                    <p className="text-lg font-normal text-[#888]">
                      Connect with one of our available wallet or add and
                      connect a new wallet
                    </p>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="wallet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wallet type</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="metamask etc."
                        {...field}
                        className="placeholder:text-[#888] rounded-xl bg-[#F2F2F2]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="key"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Please enter your key"
                        {...field}
                        className="placeholder:text-[#888] rounded-xl bg-[#F2F2F2]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-10 items-center">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="MM/YY"
                          {...field}
                          className="placeholder:text-[#888] rounded-xl bg-[#F2F2F2]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="..."
                          {...field}
                          className="placeholder:text-[#888] rounded-xl bg-[#F2F2F2]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="check"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="text-[#888] font-normal">
                      Save my wallet details & information for future
                      transactions
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full bg-black text-white p-10">
              Confirm
            </Button>
            {/* <Link
            href={"/marketplace/cart"}
            className="text-black text-xl font-medium underline text-center pt-5 flex justify-center items-center flex-col"
          >
            Continue shopping
          </Link> */}
          </form>
        </Form>
      </div>

      <div className="space-y-6 hidden md:block">
        <div className="font-normal text-lg flex flex-col justify-end items-end w-full">
          <div className="flex gap-2 text-[#888] items-center">
            <LockIcon className="w-5 h-5" />
            <h2>Secure server</h2>
          </div>
        </div>
        <div>
          <div className="pt-6 divide-y">
            <h2 className="font-medium text-2xl pb-4">Payment summary</h2>
            <div className="py-6 space-y-3">
              <h3 className="text-[#888] text-lg">
                Metamask wallet : 002345KJi90pzzz3
              </h3>
              <p className="text-[#888]">
                Actively linked to Yaba, Lagos Nigeria.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-[#888] text-lg">
                Expected arrival date: Between 22nd September and 26th September
                20222
              </h3>
            </div>
          </div>

          <div className="w-full h-full border-t hidden md:block">
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
    </main>
  );
};

export default Payment;
