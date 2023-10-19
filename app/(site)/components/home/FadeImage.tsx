"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import { fadeImage } from "../constants";
import Image from "next/image";

const FadeImage = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 3000,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      modules={[EffectFade, Autoplay]}
      className="lg:max-w-xl md:max-w-md max-w-xs"
    >
      {fadeImage.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Image
            alt="fade"
            src={img}
            width={500}
            height={500}
            className="w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FadeImage;
