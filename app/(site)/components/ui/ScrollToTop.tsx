'use client'

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return showButton ? (
    <>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        type="button"
        className="fixed right-[30px] bottom-[40px] p-[0.6rem] w-9 h-9 bg-white rounded-full cursor-pointer focus:outline-none focus:shadow-outline shadow-[0_0_1.5rem_rgba(0,0,0,.3)] z-50 transition-all duration-200 ease-in-out"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full">
          <path
            fill="currentColor"
            d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
          ></path>
        </svg>
      </button>
    </>
  ) : null;
};

export default ScrollToTop;
