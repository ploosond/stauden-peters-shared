import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div>
      <div className="padding xl:flex-row gap-16 py-12 md:py-16 xl:py-24 text-center xl:text-left items-stretch w-full max-w-[2000px] mx-auto">
        <div className="flex flex-col text-center max-w-3xl mx-auto pb-8">
          <p className="mb-2 font-semibold text-blue-900 ">
            Wo Gräser gedeihen und Stauden blühen.
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 ">
            Where Grasses Flourish and Perennials Bloom.
          </p> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Unsere Projekte
          </h2>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Our Projects
          </h2> */}
          <p className="flex-wrap text-muted-foreground text-sm leading-7">
            Entdecken Sie erstklassige Stauden und Gräser an unseren sorgfältig
            ausgewählten Standorten – das Beste aus der Natur direkt zu Ihnen
            nach Hause.
          </p>

          <p className="  flex-wrap text-muted-foreground text-sm  leading-7 ">
            Mit Standorten im ganzen Land sind wir stolz darauf, Gartenliebhaber
            und Profis gleichermaßen zu bedienen. Jede unserer Gärtnereien
            bietet erstklassige Pflanzen, kompetente Beratung und eine
            Leidenschaft für grünes Leben.
          </p>
          {/* <p className="flex-wrap text-muted-foreground text-sm leading-7">
            Discover Premium Perennials & Grasses at our carefully curated
            locations, bringing nature&apos;s finest to your doorstep.
          </p>

          <p className="  flex-wrap text-muted-foreground text-sm  leading-7 ">
            With locations across the country, we&apos;re proud to serve
            gardening enthusiasts and professionals alike. Each of our nurseries
            offers premium plants, expert advice, and a passion for green
            living.
          </p> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 space-y-6 ">
          {[...Array(4)].map((item, i) => (
            <div className="w-full" key={i}>
              <ProjectCard
                title={"Urban Meadow Transformation"}
                category="General Service"
                image="/HeroSection/image4.jpg"
                id={item?.id}
                tags={"public space"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      {/* <div className="py-12 md:py-16  bg-yellow-50/50">
        <div className="max-w-7xl mx-auto text-center container">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Create Your Sustainable Landscape
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Schedule a consultation with our expert horticulturalists
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-sm text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div> */}
    </div>
  );
}
