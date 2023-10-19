import { getProduct } from "@/sanity/sanity.query";
import { ProductType } from "@/types";
import Image from "next/image";
import { SearchIcon } from "../components/ui/custom-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { category } from "../components/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import ItemCard from "../components/ui/ItemCard";

const page = async () => {
  const product: ProductType[] = await getProduct();

  return (
    <main className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 px-3 gap-x-10 gap-y-10 md:grid-cols-4 max-w-7xl mx-auto">
        <div className="bg-[#F4F2F2] rounded-2xl hidden md:flex justify-center items-center p-4 col-span-1 gap-x-2">
          <SearchIcon className="w-6 h-6 text-gray-400" />
          <h3 className="text-gray-400 capitalize text-base">search</h3>
        </div>

        <div className="bg-[#F4F2F2] rounded-2xl flex justify-between items-center p-3 col-span-3">
          <h5 className="md:text-xl text-base font-normal text-[#333333]">
            See 1-6 of 15 results
          </h5>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-[#F4F2F2]">
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-4 max-w-7xl mx-auto mt-20">
        <div className="hidden lg:block">
          <div className="w-full sticky top-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-medium">
                  By category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2.5">
                    {category.map((col, idx) => (
                      <div className="flex items-center space-x-2" key={idx}>
                        <Checkbox id={col} className="bg-[#F4F2F2]" />
                        <label
                          htmlFor={col}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-lg md:font-normal capitalize"
                        >
                          {col}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-medium">
                  By price
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2.5">
                    <h2>$100.00 - $150.00</h2>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      className="bg-[#F4F2F2] rounded-full"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-medium">
                  By artist
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2.5">
                    {category.map((col, idx) => (
                      <div className="flex items-center space-x-2" key={idx}>
                        <Checkbox id={col} className="bg-[#F4F2F2]" />
                        <label
                          htmlFor={col}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-lg md:font-normal capitalize"
                        >
                          {col}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="col-span-3 max-w-7xl">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-x-7 gap-y-10 px-3">
            {product.map((item) => (
              <div key={item._id} className="col-span-1">
                <ItemCard
                  name={item.title}
                  price={item.price}
                  imageUrl={item.thumbnail}
                  href={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
