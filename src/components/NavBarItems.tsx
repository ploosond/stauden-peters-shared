"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";

const NavBarItems = () => {
  const pathname = usePathname();

  // const MenuItemsEn = [
  //   { name: "home", link: `/` },
  //   { name: "about us", link: `/about` },
  //   { name: "locations", link: `/locations` },
  //   { name: "products", link: `/products` },
  //   { name: "projects", link: `/projects` },
  //   { name: "contact", link: `/contact` },
  // ];

  const MenuItemsDe = [
    { name: "home", link: `/` },
    { name: "Über uns", link: `/about` },
    { name: "Standorte", link: `/locations` },
    { name: "Produkte", link: `/products` },
    { name: "Projekte", link: `/projects` },
    { name: "Kontakt", link: `/contact` },
  ];

  let content;

  if (pathname.startsWith(`/auth`) || pathname.startsWith(`/dashboard`)) {
    content = <></>;
  } else {
    content = (
      <div className="padding h-16 lg:h-[65px] flex items-center justify-between">
        <div>
          <Link href={`/`}>
            <Icons.logo />
          </Link>
          {/* <Link href={`/`} className="lg:hidden">
              <Icons.smallLogo />
            </Link> */}
        </div>

        {/* Menu items */}
        <div className="lg:flex divide-x hidden ">
          {MenuItemsDe.map((menu) => (
            <Link
              href={menu.link}
              key={menu.name}
              className={cn("px-5  text-black hover:text-blue-600 capitalize", {
                "font-semibold text-blue-900":
                  pathname.includes(menu.name) || pathname === menu.link,
              })}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <div>
          <div className="hidden lg:flex">
            <LocaleSwitcher />
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default NavBarItems;
