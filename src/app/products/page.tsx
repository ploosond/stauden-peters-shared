"use client";

import { useState } from "react";
import { ProductCard } from "./ProcuctCard";

const ProductsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string>("");
  // const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  // const [selectedLight, setSelectedLight] = useState<string[]>([]);
  // const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // const [searchQuery, setSearchQuery] = useState("");

  // Sample product data with extended properties
  const products = [
    {
      id: "1",
      name: "Blue Fescue Grass",
      subName: "Karl Foerster",
      category: "elegrass",
      size: "L",
      light: "Sun",
      color: "Variegated",
      image: "/about-us.jpg",
    },
    {
      id: "2",
      name: "Black-Eyed Susan",
      subName: "Goldsturm",
      category: "elegardens",
      size: "M",
      light: "Half Shadow",
      color: "Yellow",
      image: "/about-us.jpg",
    },
    {
      id: "3",
      name: "Black-Eyed Susan",
      subName: "Goldsturm",
      category: "elerose",
      size: "M",
      light: "Half Shadow",
      color: "Yellow",
      image: "/about-us.jpg",
    },
    {
      id: "4",
      name: "Black-Eyed Susan",
      subName: "Goldsturm",
      category: "elegrass",
      size: "M",
      light: "Half Shadow",
      color: "Yellow",
      image: "/about-us.jpg",
    },
    {
      id: "5",
      name: "Black-Eyed Susan",
      subName: "Goldsturm",
      category: "elegardens",
      size: "M",
      light: "Half Shadow",
      color: "Yellow",
      image: "/about-us.jpg",
    },
    {
      id: "6",
      name: "Black-Eyed Susan",
      subName: "Goldsturm",
      category: "elerose",
      size: "M",
      light: "Half Shadow",
      color: "Yellow",
      image: "/about-us.jpg",
    },
    // Add more products...
  ];

  // Available filter options
  // const categories = ["elegrass", "elegardens", "elerose"];

  // const sizes = ["S", "M", "L", "XL"];
  // const lightOptions = ["Sun", "Half Shadow", "Shadow"];
  // const colors = [
  //   "Green",
  //   "Blue-Green",
  //   "Yellow",
  //   "Red",
  //   "Purple",
  //   "Variegated",
  // ];

  // Filtered products
  const filteredProducts = products.filter((product) => {
    return (
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
      // (selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
      // (selectedLight.length === 0 || selectedLight.includes(product.light)) &&
      // (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      // product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mt-10 lg:mt-14 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <p className="mb-2 font-semibold text-blue-900 ">
          Nachhaltige Premium-Pflanzen – direkt vom Niederrhein
        </p>
        {/* <p className="mb-2 font-semibold text-blue-900 ">
          Sustainable premium plants – straight from the Lower Rhine
        </p> */}
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
        Unsere Produkte
        </h2>
        {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Our Products
        </h2> */}
        <p className="flex-wrap text-muted-foreground text-sm leading-7">
        Von sonnenliebend bis schattenverträglich: Unsere Stauden begeistern mit langer Blütezeit und ökologischem Nutzen. Unsere Pfingstrosen überzeugen mit üppigen Blüten und Langlebigkeit – ein Investment für Generationen.
        </p> 
        {/* <p className="flex-wrap text-muted-foreground text-sm leading-7">
          At Stauden Peters, we are passionate about cultivating high-quality
          perennials and grasses that enrich landscapes and ecosystems. Rooted
          in German precision and sustainability, we have been dedicated to
          producing premium, eco-friendly greenery for 55 years.
        </p> */}
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-6 lg:gap-10 justify-center items-center border-b max-w-4xl mx-auto mb-4">
        <button
          onClick={() => setSelectedCategories("")}
          className={`w-20 h-15 sm:m-4  rounded-md cursor-pointer p-2 text-lg font-semibold text-blue-900 ${
            selectedCategories === "" ? " border-8 border-blue-100" : ""
          }`}
        >
          Alle
          {/* All */}
        </button>
        <div className="border-r h-10 hidden sm:block" />
        <button onClick={() => setSelectedCategories("elegrass")}>
          <img
            src="/grass.png"
            alt=""
            className={`w-auto h-14 md:h-16 sm:m-4  rounded-md cursor-pointer p-2 ${
              selectedCategories === "elegrass" ? " bg-blue-100" : ""
            }`}
          />
        </button>
        <div className="border-r h-10 hidden sm:block" />
        <button onClick={() => setSelectedCategories("elegardens")}>
          <img
            src="/gardens.png"
            alt=""
            className={`w-auto h-14 md:h-16 sm:m-4  rounded-md cursor-pointer $ p-2 ${
              selectedCategories === "elegardens" ? " bg-blue-100 " : ""
            }`}
          />
        </button>
        <div className="border-r h-10 hidden sm:block" />
        <button onClick={() => setSelectedCategories("elerose")}>
          <img
            src="/rose.png"
            alt=""
            className={`w-auto h-14 md:h-16 sm:m-4  rounded-md cursor-pointer p-2 mb-4 ${
              selectedCategories === "elerose" ? " bg-blue-100" : ""
            }`}
          />
        </button>
      </div>

      {/* Filters Section */}
      <div>
        {/* Sidebar Filters */}
        {/* <div className="col-span-1 bg-white py-6 px-4 rounded-lg shadow-sm space-y-6"> */}
        {/* Search Input */}
        {/* <div>
            <input
              type="text"
              placeholder="Search plants..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div> */}

        {/* Category Filter */}
        {/* <div>
            <h3 className="text-blue-900 font-semibold mb-1">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer text-sm text-muted-foreground"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedCategories.includes(category)}
                    onChange={() => {
                      setSelectedCategories((prev) =>
                        prev.includes(category)
                          ? prev.filter((c) => c !== category)
                          : [...prev, category]
                      );
                    }}
                  />
                  <span className="text-muted-foreground">{category}</span>
                </label>
              ))}
            </div>
          </div> */}

        {/* Size Filter */}
        {/* <div>
            <h3 className="text-blue-900 font-semibold mb-1">Plant Sizes</h3>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <label
                  key={size}
                  className="flex items-center space-x-2 cursor-pointer text-sm text-muted-foreground"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedSizes.includes(size)}
                    onChange={() => {
                      setSelectedSizes((prev) =>
                        prev.includes(size)
                          ? prev.filter((s) => s !== size)
                          : [...prev, size]
                      );
                    }}
                  />
                  <span className="text-muted-foreground">{size}</span>
                </label>
              ))}
            </div>
          </div> */}

        {/* Light Requirements Filter */}
        {/* <div>
            <h3 className="text-blue-900 font-semibold mb-1">Light Needs</h3>
            <div className="space-y-2">
              {lightOptions.map((light) => (
                <label
                  key={light}
                  className="flex items-center space-x-2 cursor-pointer text-sm text-muted-foreground"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedLight.includes(light)}
                    onChange={() => {
                      setSelectedLight((prev) =>
                        prev.includes(light)
                          ? prev.filter((l) => l !== light)
                          : [...prev, light]
                      );
                    }}
                  />
                  <span className="text-muted-foreground">{light}</span>
                </label>
              ))}
            </div>
          </div> */}

        {/* Color Filter */}
        {/* <div>
            <h3 className="text-blue-900 font-semibold mb-1">Colors</h3>
            <div className="grid grid-cols-2 gap-2">
              {colors.map((color) => (
                <label
                  key={color}
                  className="flex items-center space-x-2 cursor-pointer text-sm"
                 
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedColors.includes(color)}
                    onChange={() => {
                      setSelectedColors((prev: string[]) =>
                        prev.includes(color)
                          ? prev.filter((c) => c !== color)
                          : [...prev, color]
                      );
                    }}
                  />
                  <span className="text-muted-foreground">{color}</span>
                </label>
              ))}
            </div>
          </div> */}

        {/* Reset Filters */}
        {/* <button
            onClick={() => {
              setSelectedCategories([]);
              setSelectedSizes([]);
              setSelectedLight([]);
              setSelectedColors([]);
              setSearchQuery("");
            }}
            className="w-full py-2 text-sm text-blue-900 hover:bg-gray-100 rounded-lg"
          >
            Clear All Filters
          </button> */}
        {/* </div> */}

        {/* Products Grid */}
        <div className="">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No plants found matching your criteria
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center w-full">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
