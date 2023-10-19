"use client";

import { Progress } from "@/components/ui/progress";
import ArrowLeftIcon from "../ui/custom-icons/ArrowLeftIcon";

const Exhibition = () => {
  return (
    <div className="bg-gradient-to-r from-[#4693ED] from-26.21% via-[#79C2D2] via-22.16% to-[#c056097d] to-111.62% mx-auto">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="space-y-4 py-7 hidden lg:block">
          <h2 className="text-4xl font-semibold text-white">
            See Upcoming Auctions and Exhibitions
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="668"
            height="6"
            viewBox="0 0 668 6"
            fill="none"
            className="px-7"
          >
            <path
              d="M667.283 3.28284C667.439 3.12663 667.439 2.87337 667.283 2.71716L664.737 0.171573C664.581 0.0153632 664.328 0.0153632 664.172 0.171573C664.015 0.327783 664.015 0.581048 664.172 0.737258L666.434 3L664.172 5.26274C664.015 5.41895 664.015 5.67222 664.172 5.82843C664.328 5.98464 664.581 5.98464 664.737 5.82843L667.283 3.28284ZM0 3.4H667V2.6H0V3.4Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto bg-exhibition bg-cover bg-no-repeat bg-center px-5 lg:px-10 h-full lg:h-full">
          <div className="flex gap-x-5 items-start justify-start lg:pt-[300px] py-10">
            <div className="flex flex-col lg:gap-y-7 gap-y-14 items-center md:items-end justify-start pt-2">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <h3
                style={{ fontFamily: "Playfair Display SC" }}
                className="md:text-7xl text-4xl font-thin text-white"
              >
                01
              </h3>
            </div>

            <div className="flex flex-col justify-start items-start gap-y-7">
              <h1
                style={{ fontFamily: "Playfair Display SC" }}
                className="text-white uppercase font-medium text-xl md:text-3xl"
              >
                MONALISA REDEFINED IN STYLE.
              </h1>
              <h3 className="md:text-xl text-base font-semibold text-white uppercase">
                Start on : 08:00 GTS . Monday{" "}
              </h3>
              <div className="flex lg:flex-row flex-col justify-between items-center gap-x-10">
                <p className="text-white">
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>

                <div className="basis-2/3 text-white flex lg:justify-between justify-end items-center gap-x-5 pt-10">
                  <button className="p-1 text-lg md:text-xl border-b-2 border-white">
                    See more
                  </button>
                  <button className="rounded-xl p-2 text-lg md:text-xl border-2 border-white">
                    Set a reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center pt-10">
          <Progress value={20} className="w-[300px] h-2" />

          <div className="flex gap-5">
            <ArrowLeftIcon className="w-12 h-12 text-white rounded-full bg-transparent p-3 border-2 border-transparent shadow-xl" />
            <ArrowLeftIcon className="w-12 h-12 text-white -scale-100 rounded-full bg-transparent p-3 border-2 border-transparent shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
