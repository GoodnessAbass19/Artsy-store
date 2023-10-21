"use client";
import { ProductType } from "@/types";
// import swiper component
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Fetch from "./Fetch";

const Auction = ({ product }: { product: ProductType[] }) => {
  return (
    <section>
      <Swiper
        slidesPerView="auto"
        breakpoints={breakpoints}
        slidesPerGroupAuto={true}
        spaceBetween={40}
        modules={[FreeMode, Pagination]}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="max-w-7xl mx-auto"
      >
        {product.map((item) => (
          <SwiperSlide
            key={item._id}
            className="my-10 relative cursor-pointer overflow-hidden max-w-[480px]"
          >
            <Fetch
              children={
                <div>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="rounded-xl w-[480px] h-[390px] object-cover"
                  />
                  <div className="absolute transition-all ease-in-out bg-white/40 backdrop-blur-2xl duration-500 text-center w-full bottom-5 left-0 font-semibold flex justify-center flex-col items-center text-white text-3xl py-1.5">
                    6hr : 40mins: 15s
                  </div>
                </div>
              }
              product={item.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Auction;

const breakpoints = {
  // when window width is >= 640px
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1.5,
  },
  1024: {
    slidesPerView: 2.5,
  },
};
