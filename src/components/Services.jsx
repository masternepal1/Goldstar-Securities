import React, { useState } from "react";
import { Shield, Users, Building, ChevronRight } from "lucide-react";
import serviceDetails from "./ServiceDetails.json";
import ServiceForm from "./ServiceForm";

function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const handleInquiry = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const toggleDetails = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Security Services
        </h3>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Expanded Service */}
          {expandedService && (
            <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-2/3">
              {Object.entries(serviceDetails)
                .filter(([key]) => key === expandedService)
                .map(([key, details]) => (
                  <div key={key}>
                    {key === "guard" && (
                      <Shield className="w-12 h-12 text-blue-900 mb-4" />
                    )}
                    {key === "corporate" && (
                      <Building className="w-12 h-12 text-blue-900 mb-4" />
                    )}
                    {key === "event" && (
                      <Users className="w-12 h-12 text-blue-900 mb-4" />
                    )}
                    <h4 className="text-xl font-semibold mb-3">
                      {details.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{details.description}</p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                      {details.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleInquiry(details.title)}
                      className="text-blue-900 font-semibold flex items-center hover:text-yellow-400"
                    >
                      Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button
                      onClick={() => toggleDetails(key)}
                      className="text-sm text-blue-900 mt-2"
                    >
                      Show Less
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* Sidebar for Non-Selected Services */}
          {expandedService && (
            <div
              className={`${
                expandedService ? "md:w-1/3 md:sticky md:top-16" : ""
              } w-full md:max-h-screen overflow-y-auto`}
            >
              <h2 className="text-2xl font-bold mb-4">Other Services</h2>
              <div
                className={`space-y-4 ${expandedService ? "mt-8 md:mt-0" : ""}`}
              >
                {Object.entries(serviceDetails)
                  .filter(([key]) => key !== expandedService)
                  .map(([key, details]) => (
                    <div
                      key={key}
                      className="bg-white shadow-md rounded-md p-6"
                    >
                      {key === "guard" && (
                        <Shield className="w-12 h-12 text-blue-900 mb-4" />
                      )}
                      {key === "corporate" && (
                        <Building className="w-12 h-12 text-blue-900 mb-4" />
                      )}
                      {key === "event" && (
                        <Users className="w-12 h-12 text-blue-900 mb-4" />
                      )}
                      <h3 className="text-xl font-semibold mb-2">
                        {details.title}
                      </h3>
                      <button
                        onClick={() => toggleDetails(key)}
                        className="text-blue-600 hover:underline"
                      >
                        Show More
                      </button>
                      <button
                        onClick={() => handleInquiry(details.title)}
                        className="text-blue-900 font-semibold flex items-center hover:text-yellow-400 mt-2"
                      >
                        Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Main Grid - Only Visible When No Service is Expanded */}
          {!expandedService && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(serviceDetails).map(([key, details]) => (
                <div
                  key={key}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition"
                >
                  {key === "guard" && (
                    <Shield className="w-12 h-12 text-blue-900 mb-4" />
                  )}
                  {key === "corporate" && (
                    <Building className="w-12 h-12 text-blue-900 mb-4" />
                  )}
                  {key === "event" && (
                    <Users className="w-12 h-12 text-blue-900 mb-4" />
                  )}
                  <h4 className="text-xl font-semibold mb-3">
                    {details.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {details.description.slice(0, 50)}...
                  </p>
                  <button
                    onClick={() => handleInquiry(details.title)}
                    className="text-blue-900 font-semibold flex items-center hover:text-yellow-400"
                  >
                    Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    onClick={() => toggleDetails(key)}
                    className="text-sm text-blue-900 mt-2"
                  >
                    Show More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inquiry Form Modal */}
        {showForm && (
          <ServiceForm
            selectedService={selectedService}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </section>
  );
}

export default Services;
