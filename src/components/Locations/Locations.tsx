import Link from "next/link";

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Stauden Peters Pflanzenvertriebs-GmbH",
      address: "Drüller Weg 14, 47559 Kranenburg, Germany",
      phone: "(217) 555-0123",
      hours: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
      description:
        "Our flagship location offering a wide variety of perennials and ornamental grasses.",
    },
    {
      id: 2,
      name: "Colossus Plants, Lda, Portugal",
      address:
        "Courela dos Alagadoures-CP 30, 7630-303 Colos-Odemira, Portugal",
      phone: "(919) 555-0145",
      hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-3PM",
      description:
        "Specializing in native plants and sustainable landscaping solutions.",
    },
    {
      id: 3,
      name: "Stauden Peters gmbH, Kranenburg",
      address: "Drüller Weg 14, 47559 Kranenburg, Germany",
      phone: "(503) 555-0167",
      hours: "Tue-Sun: 9AM-6PM",
      description:
        "A cozy shop with expert staff and seasonal plant collections.",
    },
    {
      id: 4,
      name: "Stauden Peters GbR, Kleve",
      address: "Auf dem Kamp 9A, 47533 Kleve, Germany",
      phone: "(503) 555-0167",
      hours: "Tue-Sun: 9AM-6PM",
      description:
        "A cozy shop with expert staff and seasonal plant collections.",
    },
    {
      id: 5,
      name: "Stauden Peters GbR, Weeze",
      address: "Gocher Straße 188, 47652 Weeze, Germany",
      phone: "(503) 555-0167",
      hours: "Tue-Sun: 9AM-6PM",
      description:
        "A cozy shop with expert staff and seasonal plant collections.",
    },
  ];

  return (
    <div className=" flex flex-col mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 ">
      <div className="flex flex-col text-center max-w-3xl mx-auto pb-8">
        <p className="mb-2 font-semibold text-blue-900 ">
          Finden Sie Ihr lokales Pflanzenparadies.
        </p>
        {/* <p className="mb-2 font-semibold text-blue-900 ">
          Find Your Local Plant Heaven.
        </p> */}
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Unser wachsendes Netzwerk
        </h2>
        {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Our Growing Network
        </h2> */}
        <p className="flex-wrap text-muted-foreground text-sm leading-7">
          Entdecken Sie erstklassige Stauden und Gräser an unseren sorgfältig
          ausgewählten Standorten und bringen Sie das Beste der Natur direkt zu
          Ihnen nach Hause.
        </p>
        {/* <p className="flex-wrap text-muted-foreground text-sm leading-7">
          Discover Premium Perennials & Grasses at our carefully curated
          locations, bringing nature&apos;s finest to your doorstep.
        </p> */}

        <p className="  flex-wrap text-muted-foreground text-sm  leading-7 ">
          Mit Standorten im ganzen Land sind wir stolz darauf, Gartenliebhaber
          und Profis gleichermaßen zu bedienen. Jede unserer Gärtnereien bietet
          erstklassige Pflanzen, kompetente Beratung und eine Leidenschaft für
          grünes Leben.
        </p>
        {/* <p className="  flex-wrap text-muted-foreground text-sm  leading-7 ">
          With locations across the country, we&apos;re proud to serve gardening
          enthusiasts and professionals alike. Each of our nurseries offers
          premium plants, expert advice, and a passion for green living.
        </p> */}
      </div>
      {/* image */}
      <div className="h-auto max-w-3xl  overflow-hidden mx-auto mb-12 md:mb-20 px-4">
        <img
          src="/HeroSection/image7.jpg"
          alt="locations image"
          className="rounded-2xl"
        />
      </div>
      {/* Locations Grid */}
      <div className="py-12 md:py-16  bg-yellow-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
            Besuchen Sie uns
          </h3>
          {/* <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
            Visit Us
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {locations.map((location) => (
              <Link
                href={`/locations/${location.address}`}
                key={location.id}
                className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-200"
              >
                <img
                  src="/image2.jpg"
                  alt="location"
                  className="rounded-xl mb-2 w-full sm:min-h-52 object-cover"
                />
                <h2 className="font-semibold text-blue-900 mb-3">
                  {location.name}
                </h2>
                {/* <p className="text-muted-foreground leading-7 text-sm mb-4">
                  {location.description}
                </p> */}
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <span className="mr-2 text-sm">📍</span>
                    <p className="text-sm">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">📞</span>
                    <p className="text-sm">{location.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2 text-sm">⏰</span>
                    <p className="text-sm">{location.hours}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Call-to-Action Section */}
      {/* <div className="px-4 sm:px-6 lg:px-8 bg-blu-50/50 max-w-2xl mx-auto rounded-2xl mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Kein Standort in der Nähe?
          </h3>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Not Near a Location?
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Wir expandieren ständig! Teilen Sie uns mit, wo Sie uns als Nächstes
            sehen möchten, oder fragen Sie nach Versandoptionen.
          </p>
          <p className="text-muted-foreground mb-6 text-sm">
            We&apos;re always expanding! Let us know where you&apos;d like to
            see us next or inquire about shipping options.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-sm text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Kontakt
            Contact Us
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Locations;
