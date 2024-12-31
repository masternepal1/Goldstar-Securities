import React, { useState } from "react";
import { X } from "lucide-react";

const ServiceForm = ({ selectedService, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    serviceNeeds: "",
    contactNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.serviceNeeds)
      newErrors.serviceNeeds = "Please describe your service needs.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required.";
    if (!formData.email) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Inquiry submitted successfully!");
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h4 className="text-xl font-bold mb-4">
          Inquiry Form - {selectedService}
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "companyName",
            "location",
            "serviceNeeds",
            "contactNumber",
            "email",
          ].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 mb-1" htmlFor={field}>
                {field === "companyName"
                  ? "Company Name"
                  : field === "location"
                  ? "Location"
                  : field === "serviceNeeds"
                  ? "Service Needs"
                  : field === "contactNumber"
                  ? "Contact Number"
                  : "Email Address"}
              </label>
              {field === "serviceNeeds" ? (
                <textarea
                  id={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <input
                  type={
                    field === "contactNumber"
                      ? "tel"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  id={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${field}`}
                />
              )}
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Submit Inquiry
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
