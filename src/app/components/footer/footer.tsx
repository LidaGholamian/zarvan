"use client";

import { useEffect, useState } from "react";
import { MobileFooter } from "./mobile-footer";

export const Footer: React.FC = () => {
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
  return isDesktop ? <p>Footer</p> : <MobileFooter />;
};
