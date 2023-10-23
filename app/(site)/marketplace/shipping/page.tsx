import React from "react";
import Shipping from "../../components/cart/Shipping";
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
      <Shipping />
    </div>
  );
};

export default page;
