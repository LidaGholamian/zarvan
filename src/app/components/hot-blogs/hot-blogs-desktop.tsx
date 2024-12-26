import Image from "next/image";
import { Bestblog } from "./best-blog";
import { BlogSlider } from "./blog-slider";

export const HotBlogsDesktop: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 w-full container pr-4 pl-4">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/images/hot-blogs.png"
          width={63}
          height={63}
          alt="hot blogs"
        />
        <h1 className="text-primary font-semibold text-xl">
          مقالات داغ زروان تریپ
        </h1>
      </div>
      <div className="flex justify-between items-start gap-4 w-full h-[500px]">
        <div className="w-[65%] rounded-lg">
          <BlogSlider />
        </div>
        <div className="w-[35%] pr-4 pl-4 rounded-lg flex flex-col justify-center items-center h-[480px]">
          <Bestblog />
        </div>
      </div>
    </div>
  );
};
