import heroSlides from "@/components/HomePage/heroSection.json";
import { Button } from "../ui/button";

import Link from "next/link";
import Carousel from "./Carousel";

const HeroSlider = () => {
  const slidePerView = 1;
  const className = "w-screen h-screen opacity-60";
  return (
    <>
      <div className="relative">
        <div className=" bg-black w-screen ">
          <Carousel
            slides={heroSlides}
            className={className}
            slidesPerView={slidePerView}
          />

          <div className=" absolute justify-center inset-0 z-10 flex flex-col w-full items-center text-center padding">
            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl  font-semibold mb-2 text-white ">
              {/* Sustainably Grown, <br /> Beautifully Thriving */}
              Nachhaltig angebaut, <br /> Prächtig gedeihend
            </h1>
            <div className=" text-white rounded-md px-4 py-2 opacity-90 flex justify-center items-center text-center mb-3 mx-2">
              <h5 className=" font-light tracking-wide ">
                {/* Premium Perennials & Grasses From The Lower Rhine */}
                Premium-Stauden & Gräser vom Niederrhein
              </h5>
            </div>
            <Link href={"/about"} className="mt-2">
              <Button className="w-32 bg-blue-600 hover:bg-blue-800 cursor-pointer  font-normal tracking-wide text-white ">
                {/* Read More */}
                Mehr lesen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
