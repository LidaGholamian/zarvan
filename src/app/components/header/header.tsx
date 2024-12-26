"use client";
import { useEffect, useState } from "react";
import { DesktopHeader } from "../desktop-header";
import { MobileNav } from "../mobile-nav";

export const Header: React.FC = () => {
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
  return isDesktop ? <DesktopHeader /> : <MobileNav />;
};
