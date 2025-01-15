"use client";

// swiper js modules and css import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { EffectCards, EffectCreative, Autoplay } from "swiper/modules";
// array of images
import { desktopImages, mobileImage } from "../constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-full mx-auto my-20 z-[-1]">
      {/* desktop slides */}
      <div className="lg:grid grid-cols-4 items-center justify-center w-full hidden gap-x-5 px-5">
        {desktopImages.map((item, idx) => (
          <Swiper
            key={idx}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[EffectCreative, Autoplay]}
            className="w-full h-full col-span-1"
          >
            {item.image.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center"
              >
                <Image
                  alt="hero-img"
                  src={img}
                  width={500}
                  height={500}
                  // loading="lazy"
                  className="object-contain object-center w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>

      {/* mobile slide */}
      <div className="lg:hidden block">
        <Swiper
          effect={"cards"}
          autoplay={true}
          loop={true}
          cardsEffect={{
            slideShadows: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="max-w-xs md:max-w-xl mx-auto lg:hidden block transition-all duration-150 ease-linear"
        >
          {mobileImage[0].Image.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                loading="lazy"
                src={img}
                alt="img"
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
