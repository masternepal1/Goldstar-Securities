import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./Blogs.json";

const BlogDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const blog = blogsData.find((b) => b.title === decodedTitle);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-red-700">Blog Not Found</h2>
        <p className="text-gray-700">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-8">
        <h1 className="text-3xl font-bold text-red-700 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">Category: {blog.category}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[40%] h-[40%] object-cover mb-6 rounded-lg"
        />
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-red-700 mb-2">
              English Content
            </h2>
            <p className="text-gray-700">{blog.contentEnglish}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-red-700 mb-2">
              नेपाली सामग्री
            </h2>
            <p className="text-gray-700">{blog.contentNepali}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
