const AboutUs = () => {
  return (
    <div className="padding flex flex-col lg:flex-row gap-10 mt-10 lg:mt-16 py-12 md:py-16 lg:py-24 text-center lg:text-left">
      {/* left side */}
      <div className="flex flex-col lg:w-1/2">
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
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base">
          Bei Stauden Peters kultivieren wir mit Leidenschaft hochwertige
          Stauden und Gräser, die Landschaften und Ökosysteme bereichern. Mit
          deutscher Präzision und Nachhaltigkeit widmen wir uns seit 55 Jahren
          der Produktion hochwertiger, umweltfreundlicher Grünpflanzen.
        </p>
        {/* <p className="flex-wrap text-muted-foreground text-sm leading-7">
          At Stauden Peters, we are passionate about cultivating high-quality
          perennials and grasses that enrich landscapes and ecosystems. Rooted
          in German precision and sustainability, we have been dedicated to
          producing premium, eco-friendly greenery for 55 years.
        </p> */}
        <br />
        <p className="  flex-wrap text-muted-foreground text-sm  leading-7 xl:text-base">
          Von sorgfältig ausgewählten Samen bis hin zu blühenden Feldern – unser
          Engagement für Spitzenqualität stellt sicher, dass jede von uns
          angebaute Pflanze den höchsten Standards entspricht. Ob in der
          Landwirtschaft, im Landschaftsbau oder bei der Umweltsanierung – wir
          sind stolz darauf, die Natur für eine grünere Zukunft zu fördern.
        </p>
        {/* <p className="  flex-wrap text-muted-foreground text-sm  leading-7 xl:text-base">
          From carefully selected seeds to thriving fields, our commitment to
          excellence ensures that every plant we grow meets the highest
          standards. Whether for agriculture, landscaping, or environmental
          restoration, we take pride in nurturing nature for a greener future.
        </p> */}
      </div>

      {/* right side */}
      <div className="lg:w-1/2 flex flex-col sm:flex-row justify-center gap-6 ">
        <img
          className="w-full max-h-[500px] lg:min-h-96 sm:min-w-[500px] xl:min-w-[600px] rounded-xl  object-cover object-right-bottom"
          src="/about-us.jpg"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default AboutUs;
