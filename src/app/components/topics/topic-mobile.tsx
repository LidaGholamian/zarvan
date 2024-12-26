"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { MobileSlider } from "../slider/mobile-slider";
import { Blog } from "@/types/blog.type";
import Image from "next/image";

export const TopicMobile: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 2,
      title: "هتل اسپیناس تهران چه خدماتی دارد؟",
      image: "/images/spinas.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 3,
      title: "اتاق‌ 5 ستاره چه ویژگی‌هایی دارند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 4,
      title: "بهترین شهر برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 5,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 6,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 7,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 8,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 9,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 10,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/room.jpg",
      content:
        "اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <div className="flex justify-center items-center gap-4 pr-4">
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
      <div className="pl-5">
        <Swiper
          className="w-[450px] flex flex-col"
          spaceBetween={30}
          slidesPerView={1.6}
          dir="ltr"
        >
          <div className="flex gap-1 justify-start items-center rounded-lg w-[380px]">
            {blogs.map((blog, id) => (
              <SwiperSlide key={id}>
                <MobileSlider
                  title={blog.title}
                  image={blog.image}
                  content={blog.content}
                  id={blog.id}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="pr-5">
        <Swiper
          className="w-[450px] flex flex-col"
          spaceBetween={30}
          slidesPerView={1.6}
        >
          <div className="flex gap-1 justify-start items-center rounded-lg w-[380px]">
            {blogs.map((blog, id) => (
              <SwiperSlide key={id}>
                <MobileSlider
                  title={blog.title}
                  image={blog.image}
                  content={blog.content}
                  id={blog.id}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
