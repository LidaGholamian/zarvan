import { Blog } from "@/types/blog.type";
import { Swiper, SwiperSlide } from "swiper/react";

import { MobileSlider } from "../slider/mobile-slider";
import Image from "next/image";

export const MobileBlogs: React.FC = () => {
  const topics: Blog[] = [
    {
      id: 1,
      title: "بهترین شهر برای ماه عسل کدامند؟",
      image: "/images/safar.svg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 2,
      title: "هتل اسپیناس تهران چه خدماتی دارد؟",
      image: "/images/spinas.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 3,
      title: "اتاق‌ 5 ستاره چه ویژگی‌هایی دارند؟",
      image: "/images/room.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 4,
      title: "بهترین شهر برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
  ];
  const blogs: Blog[] = [
    {
      id: 1,
      title: "بهترین شهر برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 2,
      title: "هتل اسپیناس تهران چه خدماتی دارد؟",
      image: "/images/spinas.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 3,
      title: "اتاق‌ 5 ستاره چه ویژگی‌هایی دارند؟",
      image: "/images/room.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 4,
      title: "بهترین شهر برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <div className="flex justify-center items-center gap-4 pr-4">
        <Image
          src="/images/hot-blogs.png"
          width={63}
          height={63}
          alt="hot blogs"
        />
        <h1 className="text-primary font-semibold text-xl">
          مطالب داغ زروان تریپ
        </h1>
      </div>
      <div className="pr-5 flex flex-col gap-6">
        <Swiper
          className="w-[450px] pr-10"
          spaceBetween={5}
          slidesPerView={1.6}
        >
          <div className="flex gap-1 justify-start items-center overflow-hidden rounded-lg w-[380px]">
            {topics.map((topic, id) => (
              <SwiperSlide key={id}>
                <MobileSlider
                  title={topic.title}
                  image={topic.image}
                  content={topic.content}
                  id={topic.id}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Swiper
          className="w-[450px] pr-10"
          spaceBetween={5}
          slidesPerView={1.6}
        >
          <div className="flex gap-1 justify-start items-center overflow-hidden rounded-lg w-[380px]">
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
