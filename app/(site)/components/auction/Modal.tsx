"use client";
import Image from "next/image";
import Popup from "reactjs-popup";
import Breadcrumb from "../ui/Breadcrumb";
import CloseIcon from "../ui/custom-icons/CloseIcon";
import { ProductType } from "@/types";
import { FormatCurrencyValue } from "@/utils/formatCurrency";
import { MouseEventHandler } from "react";
import { comments } from "../constants";
import Like from "./Like";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MessageIcon from "../ui/custom-icons/MessageIcon";
import ArrowRightIcon from "../ui/custom-icons/ArrowRightIcon";
import Link from "next/link";
import EyeIcon from "../ui/custom-icons/EyeIcon";

const breadcrumbList = [
  {
    title: "auction",
    href: "#",
    color: "text-[#BCB7B7]",
  },
  {
    title: "live bid",
    href: "#",
    color: "text-black",
  },
];

const LiveAuction = ({
  product,
  children,
}: {
  product: ProductType;
  children: any;
}) => {
  return (
    <div>
      <Popup trigger={() => children} modal nested>
        {(close) => {
          return (
            <div>
              <div className="fixed z-[99] top-0 left-0 w-full h-full bg-white/40 hidden md:block ">
                <div className="max-w-7xl w-full h-full bg-white p-10 mx-auto space-y-10 overflow-scroll 2xl:overflow-hidden will-change-scroll">
                  <Breadcrumb breadcrumbList={breadcrumbList} />
                  <div className="md:border-2 border-[#BCB7B7] grid md:grid-cols-2 relative w-full h-[650px] overflow-hidden">
                    <div className="relative">
                      <div className="relative">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={500}
                          height={500}
                          className="w-full h-[650px] object-cover"
                        />

                        <div className="absolute m-2 top-0 right-0">
                          <h2 className="uppercase text-white text-lg font-thin bg-blue-500 rounded-full px-3 text-center">
                            live
                          </h2>
                        </div>
                        <div className="absolute m-2 bottom-5 left-5">
                          <h2 className="capitalize text-white text-lg bg-black/60 rounded-full px-3 font-thin text-center">
                            Tag: {product.title}
                          </h2>
                        </div>
                      </div>

                      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
                        <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                          Current bid {FormatCurrencyValue(product.price)}
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-1 p-5 space-y-10">
                      <div className="grid gap-y-10">
                        {comments.map((comment, idx) => (
                          <div key={idx} className="flex flex-row gap-x-5">
                            <Image
                              alt={comment.name}
                              src={comment.image}
                              width={500}
                              height={500}
                              className="w-14 h-14 object-cover rounded-full"
                            />

                            <div className="flex flex-col gap-y-1">
                              <h3 className="capitalize text-xl font-medium">
                                {comment.name}
                              </h3>
                              <p className="font-normal capitalize text-lg">
                                {comment.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row justify-between items-center gap-x-5">
                        <div className="basis-4/5 grow">
                          <div className="relative items-center rounded-3xl p-1.5 flex  w-full border">
                            <Input
                              type="text"
                              placeholder="Place a bid..."
                              className="w-full bg-transparent text-sm placeholder:text-gray-500 text-black focus:outline-none border-none"
                            />
                            <Button type="submit">
                              <MessageIcon className="w-6 h-6" />
                            </Button>
                          </div>
                        </div>
                        <Like />
                      </div>
                    </div>

                    <div className="absolute m-2">
                      <div className="bg-[#BCB7B7] rounded-full w-10 h-10 flex flex-col justify-center items-center">
                        <CloseIcon
                          className="w-8 h-8 text-white cursor-pointer"
                          onClick={close}
                        />
                      </div>
                    </div>
                  </div>
                  <Link href={"/drops"} className="flex flex-row gap-x-5">
                    <h2 className="text-3xl font-semibold">
                      See upcoming drops
                    </h2>
                    <ArrowRightIcon className="w-10 h-10 border-2 rounded-full p-2 -scale-100" />
                  </Link>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                }}
                className="block md:hidden fixed z-[99] top-0 left-0 h-full w-full bg-cover bg-no-repeat bg-center"
              >
                <div className="w-full h-full relative">
                  <div className="absolute top-0 w-full flex justify-between items-center p-2 z-[99]">
                    <h2 className="capitalize text-white text-sm font-thin">
                      Tag: {product.title}
                    </h2>

                    <div className="flex gap-2 items-center">
                      <h2 className="uppercase text-white text-sm font-thin bg-blue-500 py-1 px-2 rounded-md text-center">
                        live
                      </h2>

                      <div className="bg-[#BCB7B7] text-white flex items-center py-1 px-2 rounded-md gap-2">
                        <EyeIcon className="w-5 h-5 fill-white" />
                        <h3>{product.views}</h3>
                      </div>

                      <CloseIcon
                        className="w-8 h-8 text-white cursor-pointer"
                        onClick={close}
                      />
                    </div>
                  </div>
                  <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
                    <h2 className="text-white text-3xl font-semibold">
                      Current bid {FormatCurrencyValue(product.price)}
                    </h2>
                  </div>

                  <div className="absolute bottom-0 w-full space-y-5 p-5">
                    <div className="grid gap-y-3">
                      {comments.slice(0, 3).map((comment, idx) => (
                        <div
                          key={idx}
                          className="flex flex-row gap-x-2 text-white items-center"
                        >
                          <Image
                            alt={comment.name}
                            src={comment.image}
                            width={500}
                            height={500}
                            className="w-7 h-7 object-cover rounded-full"
                          />

                          <div className="flex flex-col">
                            <h3 className="capitalize text-base">
                              {comment.name}
                            </h3>
                            <p className="font-normal capitalize text-sm">
                              {comment.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-5">
                      <div className="basis-4/5">
                        <div className="relative items-center rounded-2xl flex  w-full border">
                          <Input
                            type="text"
                            placeholder="Place a bid..."
                            className="w-full bg-transparent text-sm placeholder:text-white text-white focus:outline-none border-none"
                          />
                          <Button type="submit">
                            <MessageIcon className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                      <Like />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Popup>
    </div>
  );
};

export default LiveAuction;
