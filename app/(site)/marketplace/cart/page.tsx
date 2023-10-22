import { Metadata } from "next";
import React from "react";
import CartPage from "../../components/cart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Breadcrumb from "../../components/ui/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Cart items`,
    description: "List of all cart items",
  };
}

// type prop = {
//   text: React.HTMLProps<HTMLElement>
// }

const breadcrumbList = [
  {
    title: "marketplace",
    href: "/marketplace",
    color: "text-[#BCB7B7]",
  },
  {
    title: "cart",
    href: "#",
    color: "text-black",
  },
];

const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-5 block md:hidden">
        <Breadcrumb breadcrumbList={breadcrumbList} />
      </div>
      <Tabs defaultValue="shopping" className="max-w-7xl mx-auto">
        <TabsList className="max-w-3xl mx-auto flex justify-center items-center px-5">
          <TabsTrigger
            value="shopping"
            className="sm:text-lg text-sm font-medium"
          >
            Shopping cart
          </TabsTrigger>
          <TabsTrigger
            value="shipping"
            className="sm:text-lg text-sm font-medium"
          >
            Shipping details
          </TabsTrigger>
          <TabsTrigger
            value="payment"
            className="sm:text-lg text-sm font-medium"
          >
            Payment details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="shopping">
          <CartPage />
        </TabsContent>
        <TabsContent value="shipping">
          Change your password here. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi accusantium, repellendus eligendi, veritatis
          fuga veniam inventore error quis cumque mollitia sint voluptatibus.
          Delectus cumque nesciunt necessitatibus exercitationem dolores
          repellendus ab.
        </TabsContent>
        <TabsContent value="payment">
          Change your password here. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi accusantium, repellendus eligendi, veritatis
          fuga veniam inventore error quis cumque mollitia sint voluptatibus.
          Delectus cumque nesciunt necessitatibus exercitationem dolores
          repellendus ab.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
