"use client";
import { cn } from "@/lib/utils";
import NavBarItems from "./NavBarItems";

const Navbar = () => {
  return (
    <>
      <nav className={cn("fixed z-40 top-0 inset-x-0 bg-white shadow-lg")}>
        <NavBarItems />
      </nav>
    </>
  );
};

export default Navbar;
