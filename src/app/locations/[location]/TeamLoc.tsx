import React from "react";

const TeamLoc = () => {
  return (
    <section className=" py-12 md:py-16 lg:py-24">
      <div className="container ">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-blue-900 ">
            United by Passion, Driven by Excellence
          </p>
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            Our Team
          </h2>
        </div>

        {/* team Photos */}

        <div className="grid grid-cols-1  gap-y-12 gap-6 sm:grid-cols-2 xl:grid-cols-3 ">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col max-w-sm shadow-xl px-4 rounded-b-2xl mx-auto">
              <div className=" mb-2 mx-auto overflow-hidden rounded-full size-20">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-[102%] duration-300"
                  src="https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className=" text-center">
                <div className="flex flex-col">
                <h2 className="text-sm font-semibold text-blue-900 dark:text-white capitalize">
                    John Doe
                  </h2>
                  <p className="block text-xs text-blue-500 capitalize dark:text-blue-300">
                    Director
                  </p>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 leading-7">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLoc;
