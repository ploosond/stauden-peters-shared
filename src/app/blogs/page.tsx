"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const BlogsPage = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Sustainable Landscaping with Native Grasses",
      excerpt:
        "Discover how native grasses can transform your garden while supporting local ecosystems your garden while supporting local ecosystems.",
      category: "Landscaping Tips",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/about-us.jpg",
      tags: ["Native Plants", "Sustainability", "Gardening"],
    },
    {
      id: 2,
      title: "Seasonal Care for Ornamental Grasses",
      excerpt:
        "Learn the essential maintenance routines for keeping your ornamental grasses healthy year-round",
      category: "Plant Care",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/about-us.jpg",
      tags: ["Maintenance", "Seasonal Care", "Pruning"],
    },
    {
      id: 3,
      title: "Seasonal Care for Ornamental Grasses",
      excerpt:
        "Learn the essential maintenance routines for keeping your ornamental grasses healthy year-round",
      category: "Plant Care",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/about-us.jpg",
      tags: ["Maintenance", "Seasonal Care", "Pruning"],
    },
    {
      id: 4,
      title: "Seasonal Care for Ornamental Grasses",
      excerpt:
        "Learn the essential maintenance routines for keeping your ornamental grasses healthy year-round",
      category: "Plant Care",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/about-us.jpg",
      tags: ["Maintenance", "Seasonal Care", "Pruning"],
    },
    {
      id: 5,
      title: "Seasonal Care for Ornamental Grasses",
      excerpt:
        "Learn the essential maintenance routines for keeping your ornamental grasses healthy year-round",
      category: "Plant Care",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/about-us.jpg",
      tags: ["Maintenance", "Seasonal Care", "Pruning"],
    },
    {
      id: 6,
      title: "Seasonal Care for Ornamental Grasses",
      excerpt:
        "Learn the essential maintenance routines for keeping your ornamental grasses healthy year-round",
      category: "Plant Care",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/about-us.jpg",
      tags: ["Maintenance", "Seasonal Care", "Pruning"],
    },
    // Add more blog posts
  ];

  // Blog categories
  const categories = [
    "All",
    "Landscaping Tips",
    "Plant Care",
    "Sustainability",
    "Seasonal Guides",
    "Company News",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10; // Number of blogs per page

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // If no blogs in the selected category, display a message
  const noBlogsMessage = filteredBlogs.length === 0 && (
    <div className="text-center text-muted-foreground mt-8 text-sm ">
      <p>
        No blogs available for this category. Try selecting another category.
      </p>
    </div>
  );

  // Get the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Get the current page's blogs
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 min-h-screen">
      <div className="">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 font-semibold text-blue-900 max-w-xl text-center mx-auto">
            Experteneinblicke zu mehrjährigen Pflanzen, nachhaltiger
            Gartenarbeit und Landschaftsgestaltung.
          </p>
          {/* <p className="mb-2 font-semibold text-blue-900 max-w-xl text-center mx-auto">
            Expert insights on perennial plants, sustainable gardening, and
            landscape design.
          </p> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Blogs
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center my-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors text-sm ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border border-blue-200 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display no blogs message if no blogs in selected category */}
        {noBlogsMessage}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="hover:scale-105 transition-transform object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>

                <p className=" text-sm text-muted-foreground mt-2 mb-4 leading-7 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={cn(
                "px-4 py-2 bg-blue-900 text-white rounded-lg disabled:opacity-50 text-sm",
                {
                  hidden: totalPages === 0,
                }
              )}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === index + 1
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900 border"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={cn(
                "px-4 py-2 bg-blue-900 text-white rounded-lg disabled:opacity-50 text-sm",
                {
                  hidden: totalPages === 0,
                }
              )}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
