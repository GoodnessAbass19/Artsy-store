"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import ArrowRightIcon from "./custom-icons/ArrowRightIcon";
import ItemCard from "./ItemCard";
import useSwiperRef from "@/app/hooks/useSwiperRef";
import { useCartStore } from "@/app/store/Cart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { CategoryConnection } from "../category";

interface Props {
  data: CategoryConnection | undefined;
  title: string;
  boldTitle: string;
  loading: boolean;
}

const CategorySection = ({ data, boldTitle, title, loading }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <div className="pt-5 md:pt-6 lg:pt-7 pb-2 md:pb-3 lg:pb-4">
      <div className="relative pt-4">
        <div className="mx-auto max-w-7xl mb-3 px-3 md:px-5 lg:px-0">
          <h3 className="text-lg md:text-xl  text-[#828282] font-semibold">
            {title} <span className="text-[#1e1e1e] ">{boldTitle}</span>
          </h3>
          <hr className="mb-10 mt-3 hr border-[#828282]/60" />
        </div>

        <div className="w-full pl-3 md:pl-5 lg:pl-0">
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
            className="max-w-7xl px-4 sm:px-5 md:px-7 mx-auto pt-[85px] -mt-[85px] pb-1 pl-4 sm:pl-5 md:pl-7"
          >
            {/*---------------------------*/}
            {/*---- Navigation Button ----*/}
            {/*---------------------------*/}
            <div className="absolute top-0 z-10 hidden items-end justify-center space-x-6 md:right-0 md:flex md:justify-end pr-4 md:pr-6 xl:pr-8">
              <button
                ref={prevElRef}
                className="hover:cursor-pointer rounded-full border bg-white px-2 py-2"
              >
                <ArrowRightIcon className=" h-3.5 w-3.5 text-[#44484e]" />
              </button>
              <button
                ref={nextElRef}
                className="hover:cursor-pointer rounded-full border bg-white p-2"
              >
                <ArrowRightIcon className="-scale-100 h-3.5 w-3.5 text-[#44484e]" />
              </button>
            </div>
            {/*---------------------------*/}
            {/*---- Navigation Button ----*/}
            {/*---------------------------*/}
            {data?.category?.topdeals?.map((item: any) => (
              <SwiperSlide key={item?.id} className="h-auto mt-[85px]">
                <ItemCard
                  onAddToCart={() =>
                    addToCart({
                      id: item?.id,
                      name: item?.name,
                      price: parseFloat(item?.price),
                      image: item?.thumbnail?.url,
                      quantity: 1,
                      slug: item?.slug,
                    })
                  }
                  imageUrl={item?.thumbnail?.url}
                  loading={loading}
                  href={`/products/${item?.slug}`}
                  name={item?.name}
                  price={item?.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

const breakpoints = {
  // when window width is >= 640px
  0: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2.5,
  },
  768: {
    slidesPerView: 3,
  },
  // when window width is >= 1024px
  1200: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 5,
  },
  // 1500: {
  //   slidesPerView: 5,
  // },
};
