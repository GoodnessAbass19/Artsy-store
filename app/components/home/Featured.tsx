import React from "react";
import { FeaturedProduct, creators } from "../constants";
import Image from "next/image";
import ArrowRightIcon from "../ui/custom-icons/ArrowRightIcon";
import ArrowLeftIcon from "../ui/custom-icons/ArrowLeftIcon";

const Featured = () => {
  return (
    <section className="mx-auto max-w-7xl lg:divide-y-2 divide-neutral-300 overflow-hidden">
      <h1 className="lg:text-4xl text-3xl font-semibold md:py-5 px-5">
        Featured products
      </h1>
      <div className="divide-y-2 divide-neutral-300 md:px-5">
        {FeaturedProduct.map((item, i) => (
          <div
            key={i}
            className="flex md:odd:flex-row md:even:flex-row-reverse gap-y-5 gap-x-12 flex-col justify-between mx-5 md:mx-auto md:my-20 my-10 overflow-hidden py-5"
          >
            <div className="relative group overflow-hidden">
              <Image
                alt="feature"
                src={item.image}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-black/50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transistion ease-in-out duration-500 gap-x-7">
                <h2 className="md:text-2xl lg:text-4xl text-xl font-sans font-medium">
                  {item.header}
                </h2>
                <ArrowRightIcon className="md:w-10 md:h-10 h-7 w-7 -scale-100 border-2 border-white rounded-full p-2" />
              </div>
            </div>

            <div className="grid gap-y-6 items-start basis-2/3 max-w-2xl">
              <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl">
                {item.header}
              </h2>

              <p className="md:text-lg lg:text-xl xl:text-2xl  text-sm font-normal font-sans">
                {item.text}
              </p>

              <div className="flex justify-between items-center lg:px-5">
                {creators.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt="img"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className={`absolute ${item.style}`}
                  />
                ))}

                <h2 className="lg:text-2xl px-2 text-lg font-normal lg:ml-36 ml-20 pl-2">
                  64 Major Creators
                </h2>
                <ArrowLeftIcon className="md:w-12 md:h-12 w-7 h-7 -scale-100 lg:border-2 border-black rounded-full lg:p-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
