import React, { useState } from "react";
import blogsData from "./Blogs.json";
import BlogCard from "./BlogCard";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(blogsData.map((blog) => blog.category))];

  const filteredBlogs = selectedCategory
    ? blogsData.filter((blog) => blog.category === selectedCategory)
    : blogsData;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-10">
        <h1 className="text-4xl font-bold text-red-700 mb-6">Our Blogs</h1>
        <div className="flex flex-wrap gap-8">
          {/* Categories Section */}
          <div className="flex-shrink-0 w-full md:w-1/4 bg-white shadow-lg rounded-lg p-4 bg-yellow-100">
            <h2 className="text-xl text-red-700 font-semibold mb-4">
              Blog Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? "" : category
                      )
                    }
                    className={`text-gray-700 hover:text-red-700 transition ${
                      selectedCategory === category ? "font-bold" : ""
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts Section */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
            {filteredBlogs.length === 0 && (
              <p className="text-gray-700">
                No blogs available for the selected category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
