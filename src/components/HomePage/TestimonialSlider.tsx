"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1536: { slidesPerView: 4 },
      }}
      modules={[Autoplay, Pagination]}
      autoplay
      pagination={{ clickable: true }}
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="m-2 w-full mx-auto p-6 flex justify-center items-center bg-white rounded-xl shadow-lg dark:bg-gray-700 hover:scale-[102%] transition duration-200">
            <div className="relative z-20 flex flex-col justify-center items-center text-center">
              <div className="flex flex-col items-center mb-2 gap-2">
                <div className="relative size-20 rounded-full">
                  <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="info">
                  <h2 className="text-sm font-semibold text-blue-900 dark:text-white capitalize">
                    Hugh Denims
                  </h2>
                  <span className="block text-xs text-blue-500 capitalize dark:text-blue-300">
                    Gardner
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-7 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem ea necessitatibus voluptates aliquid rerum officiis
                explicabo laborum molestiae id.
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
