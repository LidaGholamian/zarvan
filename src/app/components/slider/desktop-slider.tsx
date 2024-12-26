import { Blog } from "@/types/blog.type";
import Image from "next/image";

export const DesktopSlider: React.FC<Blog> = ({ image, title, content }) => {
  return (
    <div className="flex flex-col justify-center items-start bg-white rounded-2xl pr-3 pl-3 pt-2">
      <Image
        src={image}
        width={350}
        height={155}
        alt="city"
        className="rounded-2xl"
      />
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="flex flex-col justify-center items-start pt-2">
          <p className="font-semibold text-primary">{title}</p>
          <p className="text-grey">{content}</p>
        </div>
        <div className="flex justify-between items-center bg-white rounded-xl w-full mb-2">
          <button className="bg-primary text-white font-semibold p-2 rounded-lg text-xs">
            مشاهده مقاله
          </button>
          <div className="flex justify-between items-center bg-white gap-2">
            <span className="bg-grey-content p-3 rounded-lg text-xs">
              1403/10/07
            </span>
            <span className="bg-grey-content p-2 rounded-lg">
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
    </div>
  );
};
