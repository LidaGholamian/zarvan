"use client";
import Image from "next/image";
import { TopNavigation } from "../header";

export const DesktopHeader: React.FC = () => {
  return (
    <header className="flex justify-center items-center font-semibold">
      <div className=" container flex items-center justify-between ">
        {/* logo */}
        <div className="flex justify-between items-center gap-4">
          <Image
            src="/images/Logo-Zarvantrip.png"
            width={72}
            height={71}
            alt="زروان تریپ"
          />
          <div>
            <p>ZARVANTRIP</p>
            <p>هتلداری زروان تریپ</p>
          </div>
        </div>
        <TopNavigation />

        {/* left side */}
        <div className="flex justify-between items-center gap-2">
          <Image
            src="/images/calling.png"
            width={55}
            height={55}
            alt="تماس با ما"
          />
          <Image src="/images/star.png" width={55} height={55} alt="امتیاز" />
          <button className="w-[169px] h-[54px] bg-primary text-primary-content flex justify-center items-center rounded-md gap-2">
            <Image
              src="/images/profile-2user.png"
              width={25}
              height={25}
              alt="user-account"
              className="bg-primary text-primary-content"
            />
            ورود به حساب
          </button>
        </div>
      </div>
    </header>
  );
};
