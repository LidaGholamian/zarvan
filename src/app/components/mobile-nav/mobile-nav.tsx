"use client";
import Image from "next/image";

export const MobileNav: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-primary text-white gap-4 px-4 py-4 h-auto">
      <div className="w-[60%] flex justify-center items-center">
        <span className="font-semibold text-xl text-white border-l-2 border-neutral/95 pl-2">
          ZARVANTRIP
        </span>
        <Image
          src="/images/logo.png"
          width={39}
          height={36}
          alt="logo"
          className="pr-2"
        />
      </div>
      <div className="w-[80%] bg-white flex justify-between items-center p-2 z-10 rounded-md">
        <Image src="/images/menu.png" width={35} height={35} alt="menu" />
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2 border-l-2 border-grey pl-2">
            <Image src="/images/call.png" width={35} height={35} alt="menu" />
            <Image
              src="/images/message.png"
              width={35}
              height={35}
              alt="menu"
            />
          </div>
          <Image src="/images/user.png" width={35} height={35} alt="menu" />
        </div>
      </div>
    </div>
  );
};
