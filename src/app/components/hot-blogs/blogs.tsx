"use client";

import { useEffect, useState } from "react";
import { HotBlogsDesktop } from "./hot-blogs-desktop";
import { MobileBlogs } from "./mobile-blog";

export const Blogs: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isDesktop ? <HotBlogsDesktop /> : <MobileBlogs />;
};
