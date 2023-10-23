import React from "react";
import Payment from "../../components/cart/Payment";
import Breadcrumb from "../../components/ui/Breadcrumb";

const breadcrumbList = [
  {
    title: "marketplace",
    href: "/marketplace",
    color: "text-[#BCB7B7]",
  },
  {
    title: "cart",
    href: "/marketplace/cart",
    color: "text-[#BCB7B7]",
  },
  {
    title: "shipping",
    href: "/marketplace/cart/shipping",
    color: "text-[#BCB7B7]",
  },
  {
    title: "payment",
    href: "#",
    color: "text-black",
  },
];
const page = () => {
  return (
    <div>
      <div className="px-5 block md:hidden">
        <Breadcrumb breadcrumbList={breadcrumbList} />
      </div>
      <Payment />
    </div>
  );
};

export default page;
