"use client";
import { MenuSquare, XCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import LocaleSwitcher from "./LocaleSwitcher";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const MenuItemsEn = [
    { name: "home", link: `/` },
    { name: "about us", link: `/about` },
    { name: "locations", link: `/locations` },
    { name: "products", link: `/products` },
    { name: "projects", link: `/projects` },
    { name: "contact", link: `/contact` },
  ];
  //   const MenuItemsDe = [
  //     { name: "Heim", link: `/${locale}` },
  //     { name: "über", link: `/${locale}/about` },
  //     { name: "Produkte", link: `/${locale}/products` },
  //     { name: "Blogs", link: `/${locale}/blogs` },
  //     { name: "Kontakt", link: `/${locale}/contact` },
  //     // { name: "Galerie", link: `/${locale}/gallery` },
  //   ];

  const handleClickOutside = (event: Event) => {
    // Check if the clicked element is outside the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={menuRef}>
      <MenuSquare
        size={32}
        strokeWidth={1}
        className="cursor-pointer text-blue-900"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="bg-white w-60 sm:w-72 absolute z-50 right-0  top-0  p-4  flex flex-col pb-6 rounded-b-lg items-end shadow-lg lg:hidden transition-all ease-in duration-300">
          <XCircle
            strokeWidth={1}
            size={32}
            className="cursor-pointer  bg-white text-blue-900"
            onClick={() => setIsOpen(false)}
          />

          <div>{/* <LocaleSwitcher /> */}</div>
          <div className="flex flex-col items-end pt-6 gap-6">
          {MenuItemsEn.map((menu) => (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href={menu.link}
              key={menu.name}
              className=" capitalize text-blue-900 pr-2 "
            >
              {menu.name}
            </Link>
          ))}
          </div>

          
        </div>
      )}
    </div>
  );
};

export default MobileNav;
