import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    experience: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) newErrors.name = "Name is required.";

    // Contact validation (basic phone number format)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contact) {
      newErrors.contact = "Contact details are required.";
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit phone number.";
    }

    // Experience validation (at least 20 characters)
    if (!formData.experience) {
      newErrors.experience = "Experience is required.";
    } else if (formData.experience.length < 20) {
      newErrors.experience =
        "Experience description must be at least 20 characters long.";
    }

    // File validation (ensure a file is selected and it is a valid type)
    const allowedFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!formData.file) {
      newErrors.file = "File upload is required.";
    } else if (!allowedFileTypes.includes(formData.file.type)) {
      newErrors.file =
        "Invalid file type. Please upload a PDF or Word document.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // You can proceed to send the form data to the server here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4">Apply for this Job</h3>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      {/* Contact Field */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Contact Details</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        {errors.contact && (
          <p className="text-red-600 text-sm">{errors.contact}</p>
        )}
      </div>

      {/* Experience Field */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Experience</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        {errors.experience && (
          <p className="text-red-600 text-sm">{errors.experience}</p>
        )}
      </div>

      {/* File Upload Field */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Upload CV</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        {errors.file && <p className="text-red-600 text-sm">{errors.file}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
