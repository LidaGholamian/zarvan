import Image from "next/image";
import image1 from "../../../../public/images/namad.png";
import image2 from "../../../../public/images/namad.png";
import image3 from "../../../../public/images/namad.png";
import image4 from "../../../../public/images/namad.png";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";

export const MobileFooter: React.FC = () => {
  const image = [image1, image2, image3, image4];
  return (
    <div className="flex flex-col justify-center items-start border-t-4 border-t-secondary bg-primary text-white gap-6 mt-20 p-4">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex justify-between items-center gap-2">
          <Image src="/images/logo.png" width={60} height={58} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <p>زروان تریپ</p>
            <p>Agency Zarvantrip Hotel</p>
          </div>
        </div>
        <p className="text-grey">
          لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو
          اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم
          لورو اپیسوم لورو اپیسوم لورو اپیسوم لورو اپیسوم
        </p>
      </div>

      {/* enamad */}
      <ul className="flex justify-center items-center gap-4">
        <li className="bg-white rounded-lg">
          <Image
            src={image1}
            width={75}
            height={85}
            alt="enamad"
            className="m-4"
          />
        </li>
        <li className="bg-white rounded-lg">
          <Image
            src={image2}
            width={75}
            height={85}
            alt="enamad"
            className="m-4"
          />
        </li>
        <li className="bg-white rounded-lg">
          <Image
            src={image3}
            width={75}
            height={85}
            alt="enamad"
            className="m-4"
          />
        </li>
        <li className="bg-white rounded-lg">
          <Image
            src={image4}
            width={75}
            height={85}
            alt="enamad"
            className="m-4"
          />
        </li>
      </ul>

      {/* social media */}
      <ul className="flex justify-center items-center gap-6">
        <li className="w-[52px] h-[52px] bg-secondary rounded-lg flex justify-center items-center">
          <Image
            src="/images/arrow-up.png"
            width={25}
            height={25}
            alt="social"
          />
        </li>
        <li className="w-[60px] h-[60px] bg-neutral rounded-lg flex justify-center items-center">
          <span className="rounded-md">
            <FaLinkedin className="w-7 h-7" />
          </span>
        </li>
        <li className="w-[60px] h-[60px] bg-neutral rounded-lg flex justify-center items-center">
          <span className="rounded-md">
            <FaWhatsapp className="w-7 h-7" />
          </span>
        </li>
        <li className="w-[60px] h-[60px] bg-neutral rounded-lg flex justify-center items-center">
          <span className="rounded-md">
            <FaInstagramSquare className="w-7 h-7" />
          </span>
        </li>
        <li className="w-[60px] h-[60px] bg-neutral rounded-lg flex justify-center items-center">
          <span className="rounded-md">
            <FaTelegram className="w-7 h-7" />
          </span>
        </li>
      </ul>
      <p>zarvan trip</p>
    </div>
  );
};
