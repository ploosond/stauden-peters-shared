import Carousel from "@/components/HomePage/Carousel";
import heroSlides from "@/components/HomePage/heroSection.json";
import React from "react";

const Gallery = () => {
  const slidePerView = 1;
  const className = "max-w-7xl h-96";
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24">
      <p className="mb-2 font-semibold text-blue-900 text-center">Timeless Gardens Start Here</p>
      <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-6 text-priColor text-center">
        Gallery
      </h2>
      <Carousel
        slides={heroSlides}
        className={className}
        slidesPerView={slidePerView}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      />
    </section>
  );
};

export default Gallery;
