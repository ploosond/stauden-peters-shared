"use client";
import { useState } from "react";

import { Sprout, Globe2 } from "lucide-react";

const Mission = () => {
  const activeClass =
    "flex flex-col gap-4 items-center text-blue-900  justify-center w-full h-40 transition duration-300 ease-in ";
  const updatedClass = activeClass + " bg-priColor text-white";

  const [div1, setDiv1] = useState(updatedClass);
  const [div2, setDiv2] = useState(activeClass);

  const handleChange1 = () => {
    setDiv1(updatedClass);
    setDiv2(activeClass);
  };
  const handleChange2 = () => {
    setDiv1(activeClass);
    setDiv2(updatedClass);
  };

  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 padding">
      <div className="flex flex-col">
        <div className="text-center">
          <p className="mb-2 font-semibold text-blue-900 ">
            Exzellenz für Generationen fördern
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 ">
            Cultivating Excellence for Generations
          </p> */}

          <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            Unsere Geschichte
          </h2>
          {/* <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            Our Story
          </h2> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-6 justify-center items-center lg:items-start w-full">
          <div className="flex  flex-col gap-6 lg:max-w-3xl">
            <p className="text-muted-foreground text-center lg:text-start text-sm leading-7 xl:text-base">
              Die Wurzeln von Stauden Peters reichen zurück bis ins Jahr 1953,
              als Großvater Theo Peters mit dem Anbau von Schnittblumen begann –
              insbesondere mit prachtvollen Gladiolen. Schon damals war seine
              Leidenschaft für Pflanzen spürbar. Doch mit der Zeit entwickelte
              sich das Unternehmen weiter. 1970 fiel der Startschuss für die
              Produktion von Stauden und Gräsern für den europäischen
              Versandhandel. Seitdem haben wir uns auf robuste, langlebige
              Pflanzen spezialisiert, die sowohl Gärten als auch große
              Landschaftsprojekte bereichern.
            </p>
            {/* <p className="text-muted-foreground text-center lg:text-start text-sm leading-7">
            Stauden Peters has deep roots that stretch back to 1953 when Grandfather Theo Peters began cultivating cut flowers, particularly magnificent gladioli. His passion for plants was evident from the very beginning. Over time, the business evolved, and in 1970, we expanded into the production of perennials and grasses for the European mail-order market. Since then, we have focused on robust, long-lasting plants that enhance both private gardens and large landscaping projects.
            </p> */}
            <div className="flex flex-col sm:flex-row items-center gap-10 mx-auto lg:mx-0">
              <div className="flex flex-col lg:flex-row items-center lg:items-end lg:gap-4">
                <div className="h-36 rounded-md sm:w-36 sm:h-36 overflow-hidden ">
                  <img
                    className="w-full h-full  hover:scale-[102%] duration-300 object-cover transition-all"
                    src="/MainTeam/Klaus.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col text-center">
                  <h2 className=" font-semibold text-blue-900 mt-1">
                    Klaus Peters
                  </h2>

                  <p className="text-blue-600 text-sm font-medium lg:text-left">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white sm:min-w-[500px] max-w-[600px] h-fit  flex-col gap-2  shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-3xl">
            <div className="relative flex justify-between">
              <div
                onClick={handleChange1}
                className={`${div1}  rounded-tl-3xl`}
              >
                {/* <img className="w-12" src="/mission.png" alt="" /> */}
                <Sprout className="size-12 stroke-1" />
                <h4 className="text-lg font-semibold">Mission</h4>
              </div>
              <div
                onClick={handleChange2}
                className={`${div2}  rounded-tr-3xl`}
              >
                <Globe2 className="size-12 stroke-1 " />

                <h4 className="text-lg font-semibold">Vision</h4>
              </div>

              <hr className="absolute bottom-0 w-full" />
            </div>

            {div1 === updatedClass ? (
              <div className="p-8 text-gray-500 leading-7 text-sm xl:text-base">
                Nachhaltigkeit ist für uns kein Trend, sondern eine Überzeugung.
                Unser Ziel ist es, langfristig alle Produkte nach den
                EU-Bio-Zertifizierungsregeln zu produzieren – so wie wir es
                bereits seit 2024 bei unseren Stauden tun.
              </div>
            ) : (
              // <div className="p-8 text-gray-500 leading-7 text-sm">
              //   Sustainability is not a trend for us—it is a core belief. We are committed to producing all our plants in line with EU organic certification regulations, a goal we have already achieved for perennials since 2024.
              // </div>
              <div className="p-8 text-gray-500 leading-7 text-sm xl:text-base">
                Darüber hinaus arbeiten wir an zukunftsweisenden Projekten, wie
                der Gartenstadt Kranenburg und einem Naturpark, der
                CO₂-Kompensierung mit Naherholungsmöglichkeiten für die
                Bevölkerung verbindet. Wir wollen nicht nur Pflanzen
                kultivieren, sondern auch einen Beitrag zur Umwelt und zur
                Lebensqualität in der Region leisten.
              </div>
              // <div className="p-8 text-gray-500 leading-7 text-sm">
              //   Beyond our business, we are investing in forward-thinking initiatives like Gartenstadt Kranenburg and a nature park, which will merge CO₂ compensation with public recreational spaces. Our ambition extends beyond growing plants—we want to create a greener future for both nature and local communities.
              // </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
