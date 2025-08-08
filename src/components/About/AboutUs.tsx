const AboutUs = () => {
  return (
    <div className="padding flex flex-col xl:flex-row gap-10 mt-10 lg:mt-16 py-12 md:py-16 lg:py-24 text-center xl:text-left w-full max-w-[2000px] mx-auto">
      {/* left side */}
      <div className="w-full xl:w-1/2">
        <p className="mb-2 font-semibold text-blue-900 ">
          In der Leidenschaft verwurzelt, für die Zukunft wachsend.
        </p>
        {/* <p className="mb-2 font-semibold text-blue-900 ">
          Rooted in Passion, Growing for the Future.
        </p> */}
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Über uns
        </h2>
        {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          About Us
        </h2> */}
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          Bei Stauden Peters kultivieren wir mit Leidenschaft hochwertige
          Stauden und Gräser, die Landschaften und Ökosysteme bereichern. Mit
          deutscher Präzision und Nachhaltigkeit widmen wir uns seit 55 Jahren
          der Produktion hochwertiger, umweltfreundlicher Grünpflanzen. Von
          sorgfältig ausgewählten Samen bis hin zu blühenden Feldern – unser
          Engagement für Spitzenqualität stellt sicher, dass jede von uns
          angebaute Pflanze den höchsten Standards entspricht. Ob in der
          Landwirtschaft, im Landschaftsbau oder bei der Umweltsanierung – wir
          sind stolz darauf, die Natur für eine grünere Zukunft zu fördern.
        </p>

        <br />
        <p className="  flex-wrap text-muted-foreground text-sm  leading-7 xl:text-base text-justify">
          Von sorgfältig ausgewählten Samen bis hin zu blühenden Feldern – unser
          Engagement für Spitzenqualität stellt sicher, dass jede von uns
          angebaute Pflanze den höchsten Standards entspricht. Ob in der
          Landwirtschaft, im Landschaftsbau oder bei der Umweltsanierung – wir
          sind stolz darauf, die Natur für eine grünere Zukunft zu fördern. Von
          sorgfältig ausgewählten Samen bis hin zu blühenden Feldern – unser
          Engagement für Spitzenqualität stellt sicher, dass jede von uns
          angebaute Pflanze den höchsten Standards entspricht. Ob in der
          Landwirtschaft, im Landschaftsbau oder bei der Umweltsanierung – wir
          sind stolz darauf, die Natur für eine grünere Zukunft zu fördern.
        </p>
      </div>

      {/* right side */}
      <div className="w-full xl:w-1/2 h-auto">
        <img
          className="w-full h-full rounded-xl object-cover"
          src="/about-us.jpg"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default AboutUs;
