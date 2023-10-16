import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-28 px-10 lg:p-10 max-w-7xl lg:mx-auto lg:border-2 border-black flex flex-col items-start lg:items-center justify-center gap-y-5">
      <h2
        style={{ fontFamily: "Playfair Display SC" }}
        className="text-4xl uppercase font-normal"
      >
        NewsLetter
      </h2>
      <p className="font-normal lg:text-3xl text-base md:text-xl uppercase">
        Subscribe to get daily updates on new drops & exciting deals
      </p>

      <div className="flex  items-start lg:items-center gap-x-10">
        <Input
          style={{ fontFamily: "Playfair Display SC" }}
          type="email"
          placeholder="Enter your Email"
          className="md:px-5 md:py-6 p-3 border-2 border-black outline-none placeholder:text-black placeholder:uppercase placeholder:text-base"
        />

        <Button
          variant={"secondary"}
          style={{ fontFamily: "Playfair Display SC" }}
          className="text-sm uppercase text-white bg-black md:px-5 md:py-6 p-3 rounded-none"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
