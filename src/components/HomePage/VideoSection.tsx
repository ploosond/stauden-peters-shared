"use client";
import { useState } from "react";

import { IoPlayOutline } from "react-icons/io5";
import VideoModal from "./VideoModal";

const VideoSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(false);
  };
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 backdrop-blur-2xl">
      <div className="flex flex-col justify-center items-center text-center gap-4 px-4 z-30 ">
        <div className=" flex flex-col max-w-7xl">
          <p className="mb-2 font-semibold text-blue-900">Wir erreichen Sie</p>
          {/* <p className="mb-2 font-semibold text-blue-900">
            Reaching Out To You
          </p> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Anpassungsfähigkeit und Erfolg
          </h2>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Adaptability And Success
          </h2> */}
        </div>

        <div className="relative max-w-[800px] flex justify-center  overflow-hidden ">
          <img className=" rounded-2xl" src="/image1.jpg" alt="" />
          <div
            onClick={() => setOpenModal(true)}
            className="absolute top-[40%] bg-blue-600 rounded-full w-20 h-20 justify-center items-center flex cursor-pointer"
          >
            <div className="absolute bg-blue-600 w-20 h-20 rounded-full animate-ping"></div>
            <div className="flex justify-center items-center">
              <IoPlayOutline size={26} color={"white"} strokeWidth={2} />
            </div>
          </div>
          <VideoModal open={openModal} onClose={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
