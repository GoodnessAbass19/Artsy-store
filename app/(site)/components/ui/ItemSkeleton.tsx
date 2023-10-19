import React from "react";

export const ItemSkeleton = () => {
  return (
    <div className="bg-[#b0bbca] animate-pulse rounded-md overflow-hidden shadow row-span-2 sm:max-w-[350px] max-h-[200px]">
      <div className="w-[300px] h-[240px] rounded-md bg-[#b0bbca]" />
      <div className="w-full h-10  md:max-w-[300px] bg-[#b0bbca] mt-6" />
    </div>
  );
};
