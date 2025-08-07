const Newsletter = () => {
  return (
    <div className=" z-3 w-full relative padding ">
      <div className=" mx-auto bg-blue-900 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <img
                src={"/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute top-10 right-0">
                <img
                  src={"/newsletter/leaf.svg"}
                  alt="leafimg"
                  width={81}
                  height={81}
                />
              </div>
              <div className="absolute bottom-8 left-2">
                <img
                  src={"/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-white">
              Traumgarten-Ideen, <br /> direkt ins Postfach
            </h2>
            {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-white">
             Dream garden ideas, ,<br /> directly to your inbox.
            </h2> */}
            <h4 className="text-sm font-normal mb-7 text-white leading-7">
              Saisonale Gestaltungstipps für Ihren Staudenparadies
            </h4>
            {/* <h4 className="text-sm font-normal mb-7 text-white leading-7">
              Seasonal design tips for your perennial paradise
            </h4> */}
            <div className="flex gap-0">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
                placeholder="@email-address"
                autoComplete="off"
              />
              <button className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg">
                <img
                  src={"/newsletter/plane.svg"}
                  alt="plane-img"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#010c24] -z-10 h-37 inset-x-0 bottom-0 w-full" />
      </div>
    </div>
  );
};

export default Newsletter;
