import Carousel from "@/components/HomePage/Carousel";
import heroSlides from "@/components/HomePage/heroSection.json";

const ProjectPage = () => {
  // Sample project data - replace with your CMS/data source
  const project = {
    title: "Urban Meadow Transformation",
    location: "City Park, Chicago, IL",
    type: "Public Space",
    size: "2.5 Acres",
    duration: "8 Weeks",
    featuredImage: "/project-urban-meadow.jpg",
    images: [
      "/project-meadow-1.jpg",
      "/project-meadow-2.jpg",
      "/project-meadow-3.jpg",
    ],
    description:
      "Conversion of traditional turf grass to native prairie landscape",
    features: [
      "Drought-resistant planting scheme",
      "Pollinator-friendly habitat",
      "Stormwater management system",
      "Community education spaces",
    ],
    plants: [
      {
        name: "Switchgrass (Panicum virgatum)",
        type: "Native Grass",
        height: "4-6 ft",
      },
      {
        name: "Purple Coneflower (Echinacea purpurea)",
        type: "Perennial",
        height: "2-3 ft",
      },
      {
        name: "Little Bluestem (Schizachyrium scoparium)",
        type: "Ornamental Grass",
        height: "2-4 ft",
      },
    ],
    services: [
      "Site Analysis",
      "Native Planting",
      "Irrigation Design",
      "Maintenance Planning",
    ],
  };

  const slidePerView = 1;
  const className = "sm:h-64 lg:h-80 w-full ";

  return (
    <div className="min-h-screen">
      {/* Project Header */}
      <div className="flex flex-col mt-10 lg:mt-14 pt-12 md:pt-16 lg:pt-20 container">
        <div className="flex flex-col text-center max-w-3xl mx-auto pb-8">
          <p className="mb-2 font-semibold text-blue-900 ">
            Where Grasses Flourish and Perennials Bloom.
          </p>
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Urban Meadow Transformation
          </h2>
          <div className="flex items-center gap-4 mx-auto">
            <p className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-900 text-center ">
              public space
            </p>
            <p className="text-sm text-center">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 md:pt-4  lg:pt-6 pb-12">
        <div className="flex flex-col lg:flex-row  lg:gap-10">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Project Overview */}
            {/* <section className="mb-12">
              <h2 className="text-xl font-bold text-priColor mb-4">
                Project Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <DetailItem label="Project Size" value={project.size} />
                <DetailItem label="Duration" value={project.duration} />
                <DetailItem
                  label="Services Included"
                  value={project.services.join(", ")}
                />
                <DetailItem label="Description" value={project.description} />
              </div>
            </section> */}

            {/* Image Gallery */}
            <section className="mb-10 w-full">
              <h2 className="text-xl font-bold text-priColor mb-4">
                Project Gallery
              </h2>
              <div className="w-full">
                <Carousel
                  slides={heroSlides}
                  className={className}
                  slidesPerView={slidePerView}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    // 1024: { slidesPerView: 2 },
                    // 1280: { slidesPerView: 4 },
                  }}
                />
              </div>
            </section>

            {/* Plant List */}
            {/* <section className="mb-12 max-w-xl mx-auto lg:mx-0">
              <h2 className="text-xl font-bold text-priColor mb-6">
                Featured Plants
              </h2>
              <div className="grid gap-4">
                {project.plants.map((plant, index) => (
                  <PlantCard
                    key={index}
                    name={plant.name}
                    type={plant.type}
                    height={plant.height}
                  />
                ))}
              </div>
            </section> */}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-bold text-priColor mb-2">
              Project Overview
            </h2>
            <p className="flex-wrap text-muted-foreground text-sm leading-7">
              At Stauden Peters, we are passionate about cultivating
              high-quality perennials and grasses that enrich landscapes and
              ecosystems. Rooted in German precision and sustainability, we have
              been dedicated to producing premium, eco-friendly greenery for 55
              years.
            </p>
            {/* Key Features */}
            {/* <section className="bg-white p-6 rounded-lg shadow-md mb-12 max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-priColor">
                Project Highlights
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-muted-foreground text-sm"
                  >
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section> */}

            {/* Sustainability Impact */}
            {/* <section className="bg-blue-50 text-priColor p-6 rounded-lg max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                Environmental Impact
              </h3>
              <div className="space-y-4">
                <ImpactStat value="75%" label="Water Use Reduction" />
                <ImpactStat value="200+" label="Pollinator Species Supported" />
                <ImpactStat value="Native" label="Plant Species" />
              </div>
            </section> */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-12 md:py-16  bg-yellow-50/50">
        <div className="max-w-7xl mx-auto text-center container">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Schaffen Sie Ihre nachhaltige Landschaft
          </h3>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Create Your Sustainable Landscape
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
          Vereinbaren Sie einen Beratungstermin mit unseren Gartenexperten
          </p>
          <p className="text-muted-foreground mb-6 text-sm">
            Schedule a consultation with our expert horticulturalists
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-sm text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Starten Sie Ihr Projekt
            Start Your Project
          </a>
        </div>
      </div> */}
    </div>
  );
};
// Reusable components
// const DetailItem = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string | number;
// }) => (
//   <div className="border-b border-blue-100 py-2">
//     <dt className="text-sm font-medium text-blue-900">{label}</dt>
//     <dd className="mt-1 text-sm text-muted-foreground">{value}</dd>
//   </div>
// );

// const PlantCard = ({
//   name,
//   type,
//   height,
// }: {
//   name: string;
//   type: string;
//   height: string;
// }) => (
//   <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
//     <h4 className="text-blue-900">{name}</h4>
//     <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//       <span>{type}</span>
//       <span>{height}</span>
//     </div>
//   </div>
// );

// const ImpactStat = ({ value, label }: { value: string; label: string }) => (
//   <div className="text-center p-4 bg-blue-100 rounded-lg">
//     <div className="text-lg font-bold mb-1 text-priColor ">{value}</div>
//     <div className="text-sm text-blue-900">{label}</div>
//   </div>
// );

export default ProjectPage;
