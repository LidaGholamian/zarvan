import Image from "next/image";

export const DesktopHero: React.FC = () => {
  return (
    <div>
      <Image
        src="/images/bannerbox.png"
        width={1716}
        height={416}
        alt="banner"
      />
      <div className="relative w-full max-w-md mx-auto bg-white py-2 rounded-lg -mt-32">
        <span className="absolute inset-y-0 left-0 p-4 flex items-center pointer-events-none bg-primary rounded-md m-2">
          <Image
            src="/images/search-normal.png"
            width={25}
            height={20}
            alt="search"
          />
        </span>
        <input
          type="text"
          placeholder="دنبال چه مقاله‌ای میگردی؟!"
          className="pl-10 pr-4 py-2 w-full rounded-lg bg-white text-sm"
        />
      </div>
    </div>
  );
};
