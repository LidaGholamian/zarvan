"use client";

import { Blog } from "@/types/blog.type";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "swiper/css";
import { DesktopSlider } from "../slider/desktop-slider";

export const TopicDesktop: React.FC = () => {
  const blog: Blog[] = [
    {
      id: 1,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/spinas.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 2,
      title: "هتل اسپیناس تهران چه خدماتی دارد؟",
      image: "/images/spinas.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 3,
      title: "اتاق‌های 5 ستاره چه ویژگی‌هایی دارند؟",
      image: "/images/spinas.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 4,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 5,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 6,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-start gap-5 w-full container pr-4 pl-4">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/images/topics.png"
          width={63}
          height={63}
          alt="hot blogs"
        />
        <h1 className="text-primary font-semibold text-xl">
          تمام مطالب پیشنهادی زروان تریپ
        </h1>
      </div>
      <Swiper spaceBetween={5} slidesPerView={4} className="w-full mx-auto">
        {blog.map((b, i) => (
          <SwiperSlide key={i}>
            <DesktopSlider
              id={b.id}
              title={b.title}
              content={b.content}
              image={b.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
