import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex justify-between items-center">
      <button
        onClick={() => swiper.slideNext()}
        className="bg-primary w-[60px] h-[60px] rounded-xl flex justify-center items-center"
      >
        <IoIosArrowForward className="text-white bg-grey rounded-md text-xl" />
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-primary w-[60px] h-[60px] rounded-xl flex justify-center items-center"
      >
        <IoIosArrowBack className="text-white bg-grey rounded-md text-xl" />
      </button>
    </div>
  );
};
