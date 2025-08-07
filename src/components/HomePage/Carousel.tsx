"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define a proper type for the slide data
interface Slide {
  image: string;
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
          spaceBetween={10}
          slidesPerView={slidesPerView}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // navigation
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
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={image.image}
                  alt={image.title}
                  className="block h-full w-full object-cover"
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
