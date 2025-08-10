const Features = () => {
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24">
      <div className="  padding">
        <div className="pt-2 flex justify-between gap-6 xl:gap-14 2xl:gap-24 flex-col xl:flex-row ">
          {/* left section */}
          <div className="xl:w-[240px]  2xl:w-[350px] flex flex-col text-center xl:text-left">
            <p className="mb-2 font-semibold text-blue-900 ">
              Über unsere Funktionen
            </p>
            {/* <p className="mb-2 font-semibold text-blue-900 ">
              About Our Features
            </p> */}
            <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
              Bereitstellung Ihres grünen Himmels
            </h2>
            {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
              Providing Your Green Heaven
            </h2> */}
            {/* <p className=" text-muted-foreground text-sm leading-7">
              Sustainably grown, robust, and diverse – our perennials and
              grasses combine beauty with ecological responsibility.
            </p> */}
            <p className=" text-muted-foreground text-sm leading-7 text-justify">
              Nachhaltig angebaut, robust & artenreich – unsere Stauden und
              Gräser vereinen Schönheit mit ökologischer Verantwortung.
            </p>
          </div>

          {/* right section */}
          <div className="flex gap-4 justify-center flex-col lg:flex-row text-justify">
            <div
              className="max-w-[400px] mx-auto
             bg-white flex flex-col gap-2 p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%] hover:-rotate-1 "
            >
              <img
                src="/grass.png"
                alt=""
                className="h-auto max-h-16 w-auto max-w-full object-contain"
              />

              <div className=" overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src="/grass_main.jpg"
                  alt=""
                />
              </div>

              <p className="mb-2 text-muted-foreground text-sm leading-7 ">
                Unsere Gräser bringen Struktur und Bewegung in jeden Garten und
                sind das ganze Jahr über interessant.
              </p>
            </div>
            <div
              className="max-w-[400px] mx-auto
             bg-white flex flex-col gap-2 p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%]  "
            >
              <img
                src="/gardens.png"
                alt=""
                className="h-auto max-h-16 w-auto max-w-full object-contain"
              />

              <div className=" overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src="/gardens_main.jpg"
                  alt=""
                />
              </div>

              <p className="mb-2 text-muted-foreground text-sm leading-7 ">
                Unsere Stauden liefern Saison für Saison mühelose Farbe und
                Struktur und sind tief in der Nachhaltigkeit verwurzelt.
              </p>
              {/* <p className="mb-2 text-muted-foreground text-sm leading-7">
              Our perennials deliver effortless color and texture season after season, with deep roots in sustainability.
              </p> */}
            </div>
            <div
              className="max-w-[400px] mx-auto
             bg-white flex flex-col gap-2 p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%] hover:rotate-1 "
            >
              <img
                src="/rose.png"
                alt=""
                className="h-auto max-h-16 w-auto max-w-full object-contain"
              />

              <div className=" overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src="/rose_main.jpg"
                  alt=""
                />
              </div>

              <p className="mb-2 text-muted-foreground text-sm leading-7 ">
                Unsere Pfingstrosen blühen Jahr für Jahr atemberaubend und
                duftend und werden mit der Zeit immer prächtiger.
              </p>
              {/* <p className="mb-2 text-muted-foreground text-sm leading-7">
              Our peonies deliver breathtaking, fragrant blooms year after year, growing more magnificent with time.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
