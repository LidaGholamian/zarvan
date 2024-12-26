"use client";

import { NavigationMenuItem } from "@/types/navigation-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/main" },
  { title: "بهترین هتل‌ها", href: "/hotels" },
  { title: "مجله گردشگری", href: "/" },
  { title: "تماس با ما", href: "/contact-us" },
  { title: "درباره ما", href: "/about-us" },
];
export const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className=" flex gap-x-8 mr-12 ">
        {menuItems.map((items) => {
          const isActive = pathname === items.href;
          return (
            <li key={`navigation-${items.href}`}>
              <Link
                href={items.href}
                className={`text-primary transition-colors pb-2 font-semibold ${
                  isActive && "border-b-2 border-secondary"
                }`}
              >
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
