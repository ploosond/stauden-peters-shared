"use client";

// pages/products/[slug].js

import { useState } from "react";
import Image from "next/image";
import { RxHeight, RxWidth } from "react-icons/rx";
import { PiSnowflakeThin } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data - replace with your CMS/data source
  const product = {
    id: 1,
    name: "Acorus Gramineus",
    scientificName: "Ogon",
    price: 8.99,
    category: "elegrass",
    images: [
      "/product_01.jpg",
      "/product_02.jpg",
      "/product_03.jpg",
      "/image3.jpg",
    ],
    description:
      "Acorus gramineus – eine elegante, grasähnliche Staude mit schmalen, leuchtend grünen Blättern. Sie gedeiht in feuchten Böden, eignet sich perfekt für Teichränder oder Pflanzgefäße und bringt Struktur sowie natürliche Bewegung in den Garten. Pflegeleicht, robust und ideal für moderne wie traditionelle Gartengestaltungen.",
    features: [
      "Drought-tolerant",
      "Low maintenance",
      "Deer resistant",
      "Year-round interest",
    ],
    specifications: {
      height: "30 cm",
      diameter: "30 cm",
      hardiness: "-20 °C",
      light: "Sonne-Halbschatten",
      water: "Low",
      growth: "Moderate",
      bloomTime: "Summer",
      cutBack: "Early Spring",
    },
    careInstructions: [
      "Plant in well-drained soil",
      "Cut back in early spring",
      "Divide every 2-3 years",
    ],
    relatedProducts: [2, 3, 4, 5],
  };

  return (
    <div className="padding h-[100vh] xl:flex-row gap-16 py-12 md:py-16 xl:py-24 text-center xl:text-left items-stretch w-full max-w-[2000px] mx-auto">
      <div>
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-24 ">
          {/* Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className=" relative h-full w-full  rounded-xl overflow-hidden bg-white shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                layout="fill"
                className="min-h-[300px]"
              />
            </div>

            {/* Thumbnails */}
            <div className=" grid grid-cols-4 mt-4 gap-6 min-w-md mx-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square border-gray-400 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="border-b border-blue-100 pb-6">
              <h1 className="text-3xl font-bold text-priColor mb-2 text-center md:text-left">
                {product.name}
              </h1>
              <p className="text-lg text-blue-900 text-center md:text-left">
                {product.scientificName}
              </p>
            </div>

            {/* Key Features */}

            {/* Plant Specifications */}
            <div className="bg-blue-50 md:w-2/3 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">
                Pflanzenspezifikationen
              </h3>
              {/* <h3 className="text-lg font-semibold mb-3 text-blue-900">
                Plant Specifications
              </h3> */}
              <div className="grid   gap-4 space-x-4 text-sm text-muted-foreground">
                <div className="flex justify-between items-center  border-b pb-1">
                  <div className="flex items-center gap-4">
                    <RxHeight className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Höhe:</span>
                  </div>
                  <p className="">{product.specifications.height}</p>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <div className="flex items-center gap-4">
                    <PiSnowflakeThin className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Durchmesser:</span>
                  </div>
                  <p>{product.specifications.hardiness}</p>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <div className="flex items-center gap-4">
                    <RxWidth className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Winterhart:</span>
                  </div>
                  <p>{product.specifications.diameter}</p>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <div className="flex items-center gap-4">
                    <IoSunnyOutline className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Leichte:</span>
                  </div>
                  <p>{product.specifications.light}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="flex-wrap text-muted-foreground text-sm leading-7 text-justify">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        {/* <div className="mb-12">
          <div className="border-b">
            <nav className="flex space-x-8">
              {["Description", "Care Instructions", "Reviews (24)"].map(
                (tab) => (
                  <button
                    key={tab}
                    className="py-4 px-1 border-b-2 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div> */}

        {/* Tab Content */}
        {/* <div className="py-6">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">
                Detailed Description
              </h3>
              <p className="text-gray-600">
                {product.description} This stunning ornamental grass forms
                perfect mounds of icy blue foliage that retains its color
                throughout the growing season. Excellent for rock gardens,
                borders, or mass plantings.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-4">Care Guide</h3>
              <ul className="list-disc pl-6 space-y-2">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index} className="text-gray-600">
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>  */}

        {/* Related Products */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Plants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square mb-4">
                <Image
                  src="/related-plant.jpg"
                  alt="Related plant"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-1">Maiden Grass</h3>
              <p className="text-blue-600 font-medium">$12.99</p>
            </div>
     
          </div>
        </section> */}

        {/* FAQ Accordion */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Plant FAQs</h2>
          <div className="space-y-4">
            {[
              {
                question: "When is the best time to plant?",
                answer: "Early spring or fall for optimal root establishment",
              },
              {
                question: "How often should I water?",
                answer: "Water deeply once a week during first growing season",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button className="w-full px-4 py-3 text-left font-medium hover:bg-gray-50">
                  {faq.question}
                </button>
                <div className="px-4 py-3 border-t bg-gray-50">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
