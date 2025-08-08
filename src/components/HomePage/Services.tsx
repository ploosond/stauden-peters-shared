const Services = () => {
  return (
    <div className="padding py-12 md:py-16 lg:py-24 flex flex-col justify-center items-center px-6">
      {/* section1 */}
      <div className=" flex flex-col text-center">
        {/* <p className="mb-2 font-semibold text-blue-900">Rooted in Excellence, Growing Trust</p> */}
        <p className="mb-2 font-semibold text-blue-900">
          In Exzellenz verwurzelt, wachsendes Vertrauen
        </p>
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-10 text-priColor">
          Verpflichtung zu Qualität und Vertrauen
        </h2>
        {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-10 text-priColor">
          Commitment to Quality and Trust
        </h2> */}
      </div>

      {/* section2 */}
      <div className="flex justify-center flex-wrap gap-4 text-justify">
        <div
          className="relative max-w-[440px] p-4 px-10 
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                   min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900 h-12 min-w-12 flex justify-center items-center rounded-lg">
                <img src="/icon1.png" alt="" className="size-8" />
              </div>
              {/* <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Sustainable </span>
                Cultivation
              </h2> */}
              <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Nachhaltiger </span>
                Anbau
              </h2>
            </div>

            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7">
              Jede Pflanze wird mit umweltbewussten Methoden angebaut, um die
              Artenvielfalt und die Bodengesundheit für zukünftige Generationen
              zu schützen.
            </p>
          </div>
        </div>

        <div
          className="relative flex max-w-[440px]  p-4 px-10  
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                   min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900  h-12 min-w-12 p-1  flex justify-center items-center rounded-lg">
                <img src="/icon2.png" alt="" className="h-9 object-cover" />
              </div>
              <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Regional </span>
                Sachverstand
              </h2>
            </div>

            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7 ">
              Unsere Pflanzen sind im einzigartigen Klima des Niederrheins
              verwurzelt und auf Widerstandsfähigkeit und lokale
              Anpassungsfähigkeit gezüchtet.
            </p>
          </div>
        </div>

        <div
          className="relative max-w-[440px]  p-4 px-10 
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                   min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900 h-12 min-w-12  flex justify-center items-center rounded-lg">
                <img src="/icon3.png" alt="" className="h-7 object-cover " />
              </div>
              <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Kompromisslose </span>
                Qualität
              </h2>
              {/* <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Uncompromising </span>
                Quality
              </h2> */}
            </div>
            {/* <p className="mb-4 text-muted-foreground  text-sm leading-7">
            From seed to sale, we hand-select only the healthiest grasses and perennials, ensuring vigor and longevity.
            </p> */}
            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7">
              Von der Saat bis zum Verkauf wählen wir von Hand nur die
              gesündesten Gräser und Stauden aus, um Vitalität und Langlebigkeit
              zu gewährleisten.
            </p>
          </div>
        </div>

        {/* <div
          className="relative flex justify-between gap-6 max-w-[370px] p-4 px-10 
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                   min-h-[250px] items-center rounded-2xl 
                   before:content-[''] before:absolute before:left-0 before:bg-blue-500 before:w-1.5 
                   before:h-full before:rounded-md overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-600 size-12  flex justify-center items-center rounded-lg">
                <img src="/icon1.png" alt="" className="size-8" />
              </div>
              <h2 className="text-xl font-semibold flex flex-wrap">
                <span className="text-priColor mr-2">Customer-Centric</span>
                Knowledge
              </h2>
            </div>
            <p className="mb-4 text-muted-foreground  text-sm leading-7">
            We share decades of horticultural wisdom, helping you choose the right plants for your garden&apos;s needs.
            </p>
            <p className="mb-4 text-muted-foreground  text-sm leading-7">
            Wir teilen unser jahrzehntelanges gärtnerisches Wissen und helfen Ihnen, die richtigen Pflanzen für die Bedürfnisse Ihres Gartens auszuwählen.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
