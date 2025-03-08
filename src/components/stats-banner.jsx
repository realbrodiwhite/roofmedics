"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function StatsBanner({
  stats = [],
  backgroundColor = "#1B365D",
  opacity = 90,
}) {
  return (
    <div className={`bg-[${backgroundColor}]/${opacity} py-8 relative`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <i
                className={`fas fa-${item.icon} text-[#FFD700] text-3xl mb-2`}
              ></i>
              <div className="text-3xl font-bold text-white mb-1">
                {item.stat}
              </div>
              <div className="text-gray-300 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBannerStory() {
  const defaultStats = [
    {
      stat: "25+",
      label: "Years in South Fork",
      icon: "calendar-alt",
    },
    {
      stat: "1,000+",
      label: "Roofs Installed",
      icon: "home",
    },
    {
      stat: "4.9",
      label: "Star Rating",
      icon: "star",
    },
    {
      stat: "24/7",
      label: "Emergency Service",
      icon: "clock",
    },
  ];

  const alternativeStats = [
    {
      stat: "50+",
      label: "Team Members",
      icon: "users",
    },
    {
      stat: "$10M+",
      label: "Annual Revenue",
      icon: "dollar-sign",
    },
    {
      stat: "98%",
      label: "Customer Satisfaction",
      icon: "smile",
    },
    {
      stat: "3",
      label: "Office Locations",
      icon: "building",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Default Stats Banner</h2>
        <StatsBanner stats={defaultStats} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Alternative Stats Banner</h2>
        <StatsBanner
          stats={alternativeStats}
          backgroundColor="#000000"
          opacity={80}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Empty Stats Banner</h2>
        <StatsBanner stats={[]} />
      </div>
    </div>
  );
}

export default StatsBanner;