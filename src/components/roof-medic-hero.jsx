"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function RoofMedicHero({
  backgroundImage = "/hero-roof.jpg",
  overlay = "dark",
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}) {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: "translateZ(0)",
        }}
      >
        <div
          className={`absolute inset-0 ${
            overlay === "dark"
              ? "bg-[#1B365D]/70"
              : "bg-gradient-to-r from-white/70 to-transparent"
          }`}
        ></div>
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-roboto mb-4 max-w-2xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-roboto mb-8 max-w-xl animate-fade-in-delay">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
          {primaryAction && (
            <a
              href={primaryAction.href}
              className="inline-block bg-[#FFD700] text-[#1B365D] px-8 py-4 rounded-lg font-bold hover:bg-[#FFE55C] transition-colors duration-300 text-center"
            >
              {primaryAction.text}
            </a>
          )}
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="inline-block bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 text-center"
            >
              {secondaryAction.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function RoofMedicHeroStory() {
  return (
    <div className="space-y-8">
      <RoofMedicHero
        title="Professional Roofing Services"
        subtitle="Expert solutions for all your roofing needs"
        primaryAction={{ href: "#get-quote", text: "Get Free Quote" }}
        secondaryAction={{ href: "tel:+17194805235", text: "Call Now" }}
      />

      <RoofMedicHero
        backgroundImage="/commercial-roof.jpg"
        overlay="light"
        title="Commercial Roofing Excellence"
        subtitle="Trusted by businesses across Colorado"
        primaryAction={{ href: "#contact", text: "Contact Us" }}
        secondaryAction={{ href: "/projects", text: "View Projects" }}
      />

      <RoofMedicHero
        backgroundImage="/emergency-repair.jpg"
        title="24/7 Emergency Repairs"
        subtitle="Fast response when you need it most"
        primaryAction={{ href: "tel:+17194805235", text: "Emergency Service" }}
      />
    </div>
  );
}

export default RoofMedicHero;