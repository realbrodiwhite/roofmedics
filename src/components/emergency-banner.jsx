"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function EmergencyBanner({ phoneNumber }) {
  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return number;
  };

  return (
    <div className="bg-red-600 text-white py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <span className="font-bold flex items-center">
        <i className="fas fa-exclamation-circle mr-2"></i>
        24/7 Emergency Roof Repair Available
      </span>
      <a
        href={`tel:${phoneNumber}`}
        className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
      >
        <i className="fas fa-phone-alt mr-2"></i>
        {formatPhoneNumber(phoneNumber)}
      </a>
    </div>
  );
}

function EmergencyBannerStory() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold mb-2">Default Emergency Banner</h3>
        <EmergencyBanner phoneNumber="7194805235" />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Different Phone Number</h3>
        <EmergencyBanner phoneNumber="8001234567" />
      </div>
    </div>
  );
}

export default EmergencyBanner;