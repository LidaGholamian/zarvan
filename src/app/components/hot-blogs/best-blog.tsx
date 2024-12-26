import { Blog } from "@/types/blog.type";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DesktopSlider } from "../slider/desktop-slider";

export const Bestblog: React.FC = () => {
  const blog: Blog[] = [
    {
      id: 1,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/safar.svg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 2,
      title: "هتل اسپیناس پالاس تهران چه خدماتی دارد؟",
      image: "/images/spinas.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 3,
      title: "اتاق‌های 5 ستاره چه ویژگی‌هایی دارند؟",
      image: "/images/room.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
    {
      id: 4,
      title: "بهترین شهرها برای ماه عسل کدامند؟",
      image: "/images/hamedan.jpg",
      content:
        "ورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم",
    },
  ];
  return (
    <Swiper
      className="container flex justify-center items-center h-[480px]"
      direction={"vertical"}
      spaceBetween={2}
      slidesPerView={1}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
    >
      <div className="flex justify-center items-center">
        {blog.map((b, id) => (
          <SwiperSlide key={id}>
            <div className="pr-4 pl-4">
              <div className="rounded-md flex justify-center items-center cursor-pointer">
                <DesktopSlider
                  title={b.title}
                  image={b.image}
                  content={b.content}
                  id={b.id}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
