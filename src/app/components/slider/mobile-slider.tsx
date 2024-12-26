import { Blog } from "@/types/blog.type";
import Image from "next/image";

export const MobileSlider: React.FC<Blog> = ({ title, image, content }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white rounded-2xl p-4"
      dir="rtl"
    >
      <Image
        src={image}
        width={280}
        height={160}
        alt="city"
        className=" rounded-2xl w-[280px] h-[160px]"
      />
      <div className="flex flex-col justify-center items-start mr-auto gap-2 pt-4 pb-8">
        <p className="font-semibold text-primary">{title}</p>
        <p className="text-grey flex justify-items-center">{content}</p>
      </div>
      <div className="w-full flex justify-between items-center rounded-xl">
        <button className="bg-primary text-white font-semibold p-2 rounded-xl text-xs">
          مشاهده مقاله
        </button>
        <div className="flex justify-center items-center gap-2">
          <span className="bg-grey-content p-3 rounded-xl text-xs">
            1403/10/07
          </span>
          <span className="bg-grey-content p-2 rounded-xl text-xs">
            <Image
              src="/images/add.png"
              width={35}
              height={35}
              alt="archive-add"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
