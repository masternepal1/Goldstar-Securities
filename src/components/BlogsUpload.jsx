import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    contentEnglish: "",
    contentNepali: "",
    category: "",
    image: null,
  });

  const categories = [
    "Safety Tips",
    "News Insights",
    "Events",
    "Announcements",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form logic here
    alert("Blog submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl text-red-700 font-bold mb-6">Goldstar Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Upload Section */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl text-red-700 font-semibold mb-4">
              Upload a Blog
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-gray-700">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div>
                <label htmlFor="contentEnglish" className="block text-gray-700">
                  Content (English)
                </label>
                <textarea
                  id="contentEnglish"
                  name="contentEnglish"
                  value={formData.contentEnglish}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-red-700"
                  placeholder="Write the content in English"
                  required
                />
              </div>
              <div>
                <label htmlFor="contentNepali" className="block text-gray-700">
                  Content (Nepali)
                </label>
                <textarea
                  id="contentNepali"
                  name="contentNepali"
                  value={formData.contentNepali}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-red-700"
                  placeholder="लेख नेपालीमा लेख्नुहोस्"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700">
                  Select Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  required
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Submit Blog
              </button>
            </form>
          </div>

          {/* Categories Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl text-red-700 font-semibold mb-4">
              Blog Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/blogs?category=${category}`}
                    className="text-gray-700 hover:text-red-700 transition"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
