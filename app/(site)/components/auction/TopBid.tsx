import React from "react";
import HeartIcon from "../ui/custom-icons/HeartIcon";
import { topBid } from "../constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TopBid = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-semibold">Top bids from popular creators</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {topBid.map((item, idx) => (
          <div key={idx} className="col-span-1 space-y-5">
            <div className="border-2 border-[#BCB7B7] rounded-xl py-3 space-y-2">
              <div className="flex flex-col items-end justify-end w-full h-full px-5">
                <HeartIcon className="w-10 h-10 fill-[#F44336] stroke-none border-[1px] border-[#000] rounded-full p-1" />
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-[250px]"
              />

              <h2 className="px-5 text-2xl font-semibold">{item.title}</h2>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row gap-x-5">
                <h3 className="text-xl font-normal">Creators:</h3>
                <span className="font-semibold text-2xl">{item.creator}</span>
              </div>
              <div className="flex flex-row gap-x-5">
                <h3 className="text-xl font-normal">Date:</h3>
                <span className="font-semibold text-2xl">{item.date}</span>
              </div>
              <div className="flex flex-row gap-x-5">
                <h3 className="text-xl font-normal">Highest bid:</h3>
                <span className="font-semibold text-2xl">
                  {item.highestBid}
                </span>
              </div>

              <div className="bg-[#F6F4F4] rounded-xl p-3 grid grid-cols-2 gap-x-3 items-center">
                <div className="col-span-1 flex flex-wrap gap-2">
                  <h3 className="text-xl font-semibold">Current bid</h3>
                  <span className="text-xl font-semibold">
                    {item.currentBid}
                  </span>
                </div>
                <Button
                  variant={"outline"}
                  className="bg-black rounded-none text-white capitalize p-3 text-xl"
                >
                  place bid
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBid;
