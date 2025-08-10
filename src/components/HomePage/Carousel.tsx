"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define a proper type for the slide data
interface Slide {
  image: string;
  imageMobile: string;
  title: string;
}

interface CarouselProps {
  slides: Slide[];
  className?: string;
  slidesPerView?: number;
  breakpoints?: { [key: number]: { slidesPerView: number } };
}

const Carousel = ({
  slides,
  className,
  slidesPerView,
  breakpoints,
}: CarouselProps) => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={slidesPerView}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // navigation
          pagination
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
          className={className}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[94vh] relative">
                <img
                  src={image.imageMobile}
                  alt={image.title}
                  className="w-full h-full object-cover block md:hidden"
                />
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover hidden md:block"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
