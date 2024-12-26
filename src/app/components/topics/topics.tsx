"use client";

import { useEffect, useState } from "react";
import { TopicDesktop } from "./topic-desktop";
import { TopicMobile } from "./topic-mobile";

export const Topics: React.FC = () => {
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
  return isDesktop ? <TopicDesktop /> : <TopicMobile />;
};
