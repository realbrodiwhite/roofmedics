"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function ServiceTypeCard({
  image,
  serviceName,
  description,
  priceRange,
  onSelect,
  selected = false,
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
        selected ? "ring-2 ring-[#1B365D]" : ""
      }`}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={`${serviceName} service`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1B365D] mb-2 font-roboto">
          {serviceName}
        </h3>
        <p className="text-gray-600 mb-4 font-roboto min-h-[48px]">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-sm text-gray-500 font-roboto">
              Starting from
            </span>
            <div className="text-lg font-bold text-[#1B365D] font-roboto">
              ${priceRange}
            </div>
          </div>
          <button
            onClick={onSelect}
            className="inline-block bg-[#1B365D] text-white px-6 py-2 rounded-lg hover:bg-[#2B466D] transition-colors duration-300 font-roboto"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceTypeCardStory() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image: "/residential-roof.jpg",
      serviceName: "Residential Roof Repair",
      description: "Complete repair services for residential roofing systems",
      priceRange: "499",
    },
    {
      id: 2,
      image: "/commercial-roof.jpg",
      serviceName: "Commercial Roofing",
      description: "Professional roofing solutions for commercial buildings",
      priceRange: "1,499",
    },
    {
      id: 3,
      image: "/emergency-repair.jpg",
      serviceName: "Emergency Repairs",
      description: "24/7 emergency roof repair services",
      priceRange: "299",
    },
    {
      id: 4,
      image: "/maintenance.jpg",
      serviceName: "Preventive Maintenance",
      description: "Regular maintenance to extend roof life and prevent issues",
      priceRange: "199",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1B365D] mb-6 font-roboto">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceTypeCard
              key={service.id}
              {...service}
              selected={selectedService === service.id}
              onSelect={() => setSelectedService(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceTypeCard;