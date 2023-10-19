"use client";
import { useEffect, useRef, useState } from "react";
import { getProductsByCategory } from "@/sanity/sanity.query";
import { ProductType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRightIcon } from "lucide-react";
import ArrowLeftIcon from "../ui/custom-icons/ArrowLeftIcon";
import Image from "next/image";
import HeartIcon from "../ui/custom-icons/HeartIcon";
import { FormatCurrencyValue } from "@/utils/formatCurrency";

const SimilarProduct = ({ product }: { product: ProductType[] }) => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <div>
      <div className="w-full mt-20">
        <Swiper
          slidesPerView="auto"
          breakpoints={breakpoints}
          slidesPerGroupAuto={true}
          spaceBetween={30}
          modules={[FreeMode, Navigation]}
          freeMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          className="max-w-7xl mx-auto"
        >
          <div className="absolute w-full top-0 z-10 flex justify-between items-center bg-slate-100 p-3">
            <h2 className="text-xl md:text-3xl font-medium">
              Explore more from this collection
            </h2>

            {/*---- Navigation Button ----*/}
            <div className="flex justify-between items-center gap-x-2 md:gap-x-6">
              <button
                ref={prevElRef}
                className="hover:cursor-pointer rounded-full border p-2"
              >
                <ArrowLeftIcon className="h-5 w-5 text-[#44484e]" />
              </button>
              <button
                ref={nextElRef}
                className="hover:cursor-pointer rounded-full border p-2"
              >
                <ArrowRightIcon className="h-5 w-5 text-[#44484e]" />
              </button>
            </div>
            {/*---- Navigation Button ----*/}
          </div>

          {product.map((item) => (
            <SwiperSlide
              key={item?._id}
              className="mt-32 border-2 border-black p-5 space-y-2.5"
            >
              <div className="flex flex-col items-end justify-end w-full h-full">
                <HeartIcon className="w-7 h-7 hover:fill-[#F44336] hover:stroke-none" />
              </div>

              <div className="lg:px-5">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-[450px] h-[420px] object-cover"
                />
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-2xl font-medium capitalize">
                    {item.title}
                  </h3>
                  <span className="text-2xl font-medium">
                    {FormatCurrencyValue(item.price)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProduct;

const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
  const [wrapper, setWrapper] = useState<T | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
};

const breakpoints = {
  // when window width is >= 640px
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2.5,
  },
};
