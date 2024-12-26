"use client";

import { useState } from "react";

import { Tab } from "@/types/tab.type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Blogs } from "../hot-blogs/blogs";
import { useRef } from "react";
import { SwiperNavButtons } from "../slider/swiper-nav-buttons";

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const tabs: Tab[] = [
    { id: 1, label: "همه مطالب", content: <Blogs /> },
    { id: 2, label: "راهنمای سفر", content: "content" },
    { id: 3, label: "جاذبه‌های گردشگری", content: "content" },
    { id: 4, label: "راهنمای سفر", content: "content" },
    { id: 5, label: "جاذبه‌های گردشگری", content: "content" },
    { id: 6, label: "راهنمای سفر", content: "content" },
    { id: 7, label: "جاذبه‌های گردشگری", content: "content" },
    { id: 8, label: "راهنمای سفر", content: "content" },
    { id: 9, label: "راهنمای سفر", content: "content" },
    { id: 10, label: "جاذبه‌های گردشگری", content: "content" },
    { id: 11, label: "راهنمای سفر", content: "content" },
    { id: 12, label: "تجربه سفر", content: "content" },
    { id: 13, label: "راهنمای سفر", content: "content" },
    { id: 14, label: "تجربه سفر", content: "content" },
  ];

  const handleTabelClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col justify-center items-center container">
      <Swiper
        dir="rtl"
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        className="container flex justify-center items-center w-[400px] md:w-full lg:w-full xl:w-full"
        modules={[Navigation, A11y]}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={tab.id}>
            <div
              onClick={() => handleTabelClick(index)}
              className="pb-6 pr-4 pl-4"
            >
              <div
                className={`rounded-md p-2 w-[145px] flex justify-center items-center cursor-pointer ${
                  index === activeTab ? "bg-primary text-white" : ""
                }`}
              >
                {tab.label}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>

      {tabs.map((tab, index) => (
        <div
          className="w-full mt-6"
          key={tab.id}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
