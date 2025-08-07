"use client";

// pages/products/[slug].js

import { useState } from "react";
import Image from "next/image";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data - replace with your CMS/data source
  const product = {
    id: 1,
    name: "Blue Fescue Grass",
    scientificName: "Festuca glauca",
    price: 8.99,
    category: "Ornamental Grasses",
    images: ["/about-us.jpg", "/image1.jpg", "/image2.jpg", "/image3.jpg"],
    description: "A stunning ornamental grass with silvery-blue foliage",
    features: [
      "Drought-tolerant",
      "Low maintenance",
      "Deer resistant",
      "Year-round interest",
    ],
    specifications: {
      height: "12-18 inches",
      diameter: "6-9 inches",
      hardiness: "Zones 4-8",
      light: "Full Sun",
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
    <div className="flex flex-col mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 container">
      <div>
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4 ">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg max-w-md mx-auto md:mx-0">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto md:mx-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
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
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">
              Pflanzenspezifikationen
              </h3>
              {/* <h3 className="text-lg font-semibold mb-3 text-blue-900">
                Plant Specifications
              </h3> */}
              <div className="grid gap-6 text-sm text-muted-foreground">
                <div className="flex justify-between border-b pb-1">
                  <span className=" capitalize">height:</span>
                  <span className="">{product.specifications.height}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className=" capitalize">diameter:</span>
                  <span className="">{product.specifications.diameter}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className=" capitalize">hardiness:</span>
                  <span className="">{product.specifications.hardiness}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className=" capitalize">light:</span>
                  <span className="">{product.specifications.light}</span>
                </div>
             
              </div>
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
