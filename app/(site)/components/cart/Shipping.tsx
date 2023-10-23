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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/CartStore";
import CartItem from "./CartItem";
import CheckoutList from "./CheckoutList";
import { FormatCurrencyValue } from "@/utils/formatCurrency";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "please enter your email",
  }),
  fullName: z.string().min(8, {
    message: "Your full name",
  }),
  city: z.string({
    required_error: "Please select a city",
  }),
  wallet: z.string({
    required_error: "Please select a wallet",
  }),
  country: z.string({
    required_error: "Please select a country",
  }),
  postal: z.string({
    required_error: "Please add a postal code",
  }),
  phone: z.string({
    required_error: "Please add a postal code",
  }),
});

const Shipping = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      city: "",
      wallet: "",
      country: "",
      postal: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">thank you</p>
        </div>
      ),
    });
  }

  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const items = useCartStore((state) => state.items);
  const shipping = 2.5;

  return (
    <div className="grid md:grid-cols-2 gap-x-5 lg:gap-x-10 items-start px-5 mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 col-span-1"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="willymonka@gmail.com"
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your full name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Willy Monka"
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
            name="wallet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose a wallet</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="bg-[#F2F2F2]">
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a wallet"
                        className="text-[#888]"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#F2F2F2]">
                    <SelectItem value="metamask">Metamask</SelectItem>
                    <SelectItem value="coinbase">Coinbase</SelectItem>
                    <SelectItem value="binance">Binance</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="bg-[#F2F2F2]">
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a city"
                        className="text-[#888]"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#F2F2F2]">
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="port-harcourt">Port-harcourt</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-10 items-center">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="bg-[#F2F2F2]">
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select a country"
                          className="text-[#888]"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#F2F2F2]">
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="ghana">Ghana</SelectItem>
                      <SelectItem value="south africa">South Africa</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal code</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="012345"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal code</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="07049742361"
                    {...field}
                    className="placeholder:text-[#888] rounded-xl bg-[#F2F2F2]"
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-black text-white">
            Proceed to payment
          </Button>
          {/* <Link
            href={"/marketplace/cart"}
            className="text-black text-xl font-medium underline text-center pt-5 flex justify-center items-center flex-col"
          >
            Continue shopping
          </Link> */}
        </form>

        <div className="w-full h-full border-t hidden md:block">
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
      </Form>
    </div>
  );
};

export default Shipping;
