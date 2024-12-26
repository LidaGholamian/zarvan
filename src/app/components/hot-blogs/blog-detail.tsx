import { Blog } from "@/types/blog.type";
import Image from "next/image";

export const BlogDetails: React.FC<Blog> = ({ title, image, content }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-md h-[200px] pl-6 pr-6 gap-6 border-r-secondary border-r-4">
      <div className="flex justify-center items-center gap-4">
        <Image
          src={image}
          width={155}
          height={160}
          alt="city"
          className=" rounded-2xl w-[155px] h-[160px]"
        />
        <div className="flex flex-col justify-center items-start gap-2 pt-8 pb-8">
          <p className="font-semibold text-lg text-primary">{title}</p>
          <p className="text-grey flex justify-items-center">{content}</p>
        </div>
      </div>
      <div className="w-[170px] h-[160px] flex justify-center items-center bg-grey-content rounded-xl">
        <Image src="/images/add.png" width={35} height={35} alt="archive-add" />
      </div>
    </div>
  );
};
