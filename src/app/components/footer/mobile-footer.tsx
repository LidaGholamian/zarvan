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
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

export const MobileFooter: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-start border-t-4 border-t-secondary bg-primary text-white gap-6 mt-20 p-4 container">
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
              height={83}
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
          <li className="w-[68px] h-[68px] bg-secondary rounded-lg flex justify-center items-center">
            <Image
              src="/images/arrow-up.png"
              width={35}
              height={35}
              alt="social"
            />
          </li>
          <li className="w-[68px] h-[68px] bg-neutral rounded-lg flex justify-center items-center">
            <FaLinkedin className="w-8 h-8" />
          </li>
          <li className="w-[68px] h-[68px] bg-neutral rounded-lg flex justify-center items-center">
            <FaWhatsapp className="w-8 h-8" />
          </li>
          <li className="w-[68px] h-[68px] bg-neutral rounded-lg flex justify-center items-center">
            <FaInstagramSquare className="w-8 h-8" />
          </li>
          <li className="w-[68px] h-[68px] bg-neutral rounded-lg flex justify-center items-center">
            <FaTelegram className="w-8 h-8" />
          </li>
        </ul>

        {/* contact us */}
        <div className="flex justify-center items-center gap-6">
          <div className="w-[68px] h-[68px] bg-secondary rounded-lg flex justify-center items-center">
            <CiLocationOn className="w-8 h-8" />
          </div>
          <div className="w-[350px] h-[68px] bg-neutral flex justify-start items-center pr-4 rounded-xl">
            <p className="text-white text-xs ">
              بلوار فروسی خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="w-[68px] h-[68px] bg-secondary rounded-lg flex justify-center items-center">
            <FiPhoneCall />
          </div>
          <div className="w-[350px] h-[68px] bg-neutral flex justify-start items-center pr-4 rounded-xl">
            <p className="text-white text-xs ">7756938 - 021</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="w-[68px] h-[68px] bg-secondary rounded-lg flex justify-center items-center">
            <CiMail className="w-8 h-8" />
          </div>
          <div className="w-[350px] h-[68px] bg-neutral flex justify-start items-center pr-4 rounded-xl">
            <p className="text-white text-xs ">zarvantrip@gmail.com</p>
          </div>
        </div>

        {/* quick access */}
        <div className="flex justify-start items-start gap-12">
          <div className="flex flex-col justify-center items-start gap-4 p-4">
            <h3 className="text-white">دسترسی سریع</h3>
            <div className="flex flex-col justify-start items-start gap-4">
              <ul className="flex flex-col justify-start items-start gap-2 text-white list-disc pr-4">
                <li className="text-xs">صفحه اصلی</li>
                <li className="text-xs">خدمات</li>
                <li className="text-xs text-secondary">تماس با ما</li>
                <li className="text-xs">درباره ما</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4 p-4">
            <h3 className="text-white">خدمات شرکت</h3>
            <div className="flex flex-col justify-start items-start gap-4">
              <ul className="flex flex-col justify-start items-start gap-2 text-white list-disc pr-4">
                <li className="text-xs">صفحه اصلی</li>
                <li className="text-xs text-secondary">خدمات</li>
                <li className="text-xs">تماس با ما</li>
                <li className="text-xs">درباره ما</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-4 p-4">
            <h3 className="text-white">زروان تریپ</h3>
            <div className="flex flex-col justify-start items-start gap-4">
              <ul className="flex flex-col justify-start items-start gap-2 text-white list-disc pr-4">
                <li className="text-xs">صفحه اصلی</li>
                <li className="text-xs">خدمات</li>
                <li className="text-xs">تماس با ما</li>
                <li className="text-xs text-secondary">درباره ما</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* copy write */}
      <div className="flex flex-col justify-center items-center bg-neutral w-full h-[150px] gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold text-white">
            Design & Develop by{" "}
            <span className="text-secondary">Sevin Team</span>
          </p>
          <p className="font-semibold text-white">
            تمام حقوق این سایت متعلق به زروان تریپ می‌باشد
          </p>
        </div>
        <div className="w-40 h-1 bg-white rounded mt-7"></div>
      </div>
    </div>
  );
};
