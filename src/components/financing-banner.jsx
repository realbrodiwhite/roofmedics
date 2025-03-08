"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function FinancingBanner({
  title = "Flexible Financing Options Available",
  description = "Get your roofing project started today with our easy financing solutions",
  primaryButton = {
    text: "Apply Now",
    href: "/financing/apply",
  },
  secondaryButton = {
    text: "Learn More",
    href: "/financing",
  },
}) {
  return (
    <div className="bg-[#FFD700] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-[#1B365D] text-2xl font-bold font-roboto mb-2">
            {title}
          </h2>
          <p className="text-[#1B365D] font-roboto">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={primaryButton.href}
            className="inline-block bg-[#1B365D] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#152C4D] transition-colors duration-300"
          >
            <i className="fas fa-credit-card mr-2"></i>
            {primaryButton.text}
          </a>
          <a
            href={secondaryButton.href}
            className="inline-block bg-white text-[#1B365D] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            <i className="fas fa-info-circle mr-2"></i>
            {secondaryButton.text}
          </a>
        </div>
      </div>
    </div>
  );
}

function FinancingBannerStory() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-2">Default Financing Banner</h3>
        <FinancingBanner />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Custom Text and Buttons</h3>
        <FinancingBanner
          title="Special Financing for Winter Projects"
          description="0% APR for 12 months on qualifying roofing projects"
          primaryButton={{
            text: "Get Started",
            href: "/winter-financing",
          }}
          secondaryButton={{
            text: "View Terms",
            href: "/financing/terms",
          }}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Emergency Financing Banner</h3>
        <FinancingBanner
          title="Emergency Roof Repair Financing"
          description="Quick approval process for urgent roofing needs"
          primaryButton={{
            text: "Apply Now",
            href: "/emergency-financing",
          }}
          secondaryButton={{
            text: "Call Us",
            href: "tel:+17194805235",
          }}
        />
      </div>
    </div>
  );
}

export default FinancingBanner;