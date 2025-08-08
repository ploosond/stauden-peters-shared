const AboutBrief = () => {
  return (
    <>
      <div className="padding flex flex-col xl:flex-row gap-6 py-12 md:py-16 xl:py-24 text-center xl:text-left items-stretch w-full max-w-[2000px] mx-auto">
        {/* left side */}
        <div className="w-full xl:w-1/2 ">
          {/* <p className="mb-2 font-semibold text-blue-900 ">Our Story</p> */}
          <p className="mb-2 font-semibold text-blue-900 ">Unsere Geschichte</p>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Connecting With Nature
          </h2> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Mit der Natur verbunden
          </h2>
          <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
            Bei Stauden Peters widmen wir uns mit Leidenschaft der Aufzucht
            hochwertiger, nachhaltig produzierter Stauden, Gräser und
            Blühpflanzen, die Gärten und Landschaften auf natürliche und
            stilvolle Weise bereichern. Unsere Pflanzen vertreiben wir unter den
            Marken Elegardens, Elegrass und Elerose. Mit tiefgehendem
            gärtnerischem Wissen und größter Sorgfalt sorgen wir dafür, dass
            jede Pflanze optimal gedeiht – angepasst an die jeweiligen
            Standortbedingungen und mit Blick auf langfristige Nachhaltigkeit.
            Qualität ist dabei ein Grundprinzip, bei dem wir keinerlei
            Kompromisse eingehen.
          </p>
          {/* <p className="flex-wrap text-muted-foreground text-sm leading-7">
          At Stauden Peters, we are dedicated to the passionate cultivation of high-quality, sustainably produced perennials, grasses, and flowering plants that enrich gardens and landscapes in a natural and elegant way. Our plants are marketed under their respective brands Elegardens, Elegrass, and Elerose. With expertise of grasses and perennials and the utmost care, we ensure that each plant thrives—tailored to specific site conditions and always with a focus on long-term sustainability. Quality is therefore, a core principle for us and we make no compromises in upholding it.
          </p> */}
          <br />
          <p className="hidden lg:flex flex-wrap text-muted-foreground text-sm  leading-7 xl:text-base text-justify">
            Unser Anspruch ist es, grüne Lebensräume zu gestalten, die sowohl
            ästhetisch als auch ökologisch überzeugen. Ob naturnaher
            Rückzugsort, moderne Gartenlandschaft oder stilvolle
            Objektbepflanzung: Unsere vielfältige Auswahl steht für zeitlose
            Eleganz, lebendige Gestaltung und beständige Schönheit – Saison für
            Saison. Unser Anspruch ist es, grüne Lebensräume zu gestalten, die
            sowohl ästhetisch als auch ökologisch überzeugen. Ob naturnaher
            Rückzugsort, moderne Gartenlandschaft oder stilvolle
            Objektbepflanzung: Unsere vielfältige Auswahl steht für zeitlose
            Eleganz, lebendige Gestaltung und beständige Schönheit – Saison für
            Saison.
          </p>
        </div>

        {/* right side */}
        <div className="w-full xl:w-1/2 h-auto">
          <img
            className="w-full h-full rounded-xl object-cover xl:object-left-top"
            src="/about-brief.jpg"
            alt="photo"
          />
        </div>
      </div>
    </>
  );
};

export default AboutBrief;
