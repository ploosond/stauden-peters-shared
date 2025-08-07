

const plants = [
  { name: "Lavender", image: "/connectNature.jpg", desc: "Fragrant and drought-tolerant" },
  { name: "Feather Grass", image: "/connectNature.jpg", desc: "Elegant and soft texture" },
  { name: "Echinacea", image: "/connectNature.jpg", desc: "Attracts pollinators and birds" },
];

export default function FeaturedPlants() {
  return (
    <section className="py-12 container">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Plants</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.name} className="p-4 border rounded-lg text-center">
            <img src={plant.image} alt={plant.name} width={300} height={200} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">{plant.name}</h3>
            <p className="text-gray-600">{plant.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
