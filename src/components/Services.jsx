import React, { useState } from "react";
import { Shield, Users, Building, ChevronRight } from "lucide-react";
import serviceDetails from "./ServiceDetails.json";
import ServiceForm from "./ServiceForm";

function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleInquiry = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Security Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
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
              <h4 className="text-xl font-semibold mb-3">{details.title}</h4>
              <p className="text-gray-600 mb-4">
                {showMore
                  ? details.description
                  : `${details.description.slice(0, 50)}...`}
              </p>
              {showMore && (
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {details.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => handleInquiry(details.title)}
                className="text-blue-900 font-semibold flex items-center hover:text-yellow-400"
              >
                Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
              </button>
              {!showMore && (
                <button
                  className="text-sm text-blue-900 mt-2"
                  onClick={() => setShowMore(!showMore)}
                >
                  Show More
                </button>
              )}
            </div>
          ))}
        </div>

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
