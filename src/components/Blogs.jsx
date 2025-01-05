import React from "react";
import blogsData from "./Blogs.json"; // Renaming import to avoid conflict

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-700">{blog.title}</h2>
        <p className="text-sm text-gray-500 mb-2">Category: {blog.category}</p>
        <p className="text-gray-700 text-sm mb-2">
          {blog.contentEnglish.substring(0, 100)}...
        </p>
        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition text-sm">
          Read More
        </button>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
