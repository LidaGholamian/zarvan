"use client";
import { useEffect, useState } from "react";
import { DesktopHero } from "./desktop-hero";
import { MobileHero } from "./mobile-hero";

export const HomeHereoSection: React.FC = () => {
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
  return isDesktop ? <DesktopHero /> : <MobileHero />;
};
