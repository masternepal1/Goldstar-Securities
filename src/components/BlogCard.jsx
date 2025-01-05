import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden">
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
        <Link
          to={`/blogs/${encodeURIComponent(blog.title)}`}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition text-sm inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
