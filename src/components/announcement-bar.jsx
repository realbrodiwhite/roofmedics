"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function AnnouncementBar({ message }) {
  return (
    <div className="bg-[#FFD700] text-[#1B365D] py-2 text-center font-roboto text-xs font-semibold overflow-hidden sticky top-0 z-50">
      <div className="ticker-wrapper">
        <div className="ticker-container hidden lg:block">
          <span className="animate-ticker inline-block whitespace-nowrap">
            🚨 {message} 🚨
          </span>
        </div>
        <div className="lg:hidden">
          <span className="animate-ticker inline-block whitespace-nowrap">
            🚨 {message} 🚨
          </span>
        </div>
      </div>

      <style jsx global>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .ticker-container {
          width: 90%;
          margin: 0 auto;
          overflow: hidden;
        }
        @keyframes ticker {
          0% {
            transform: translateX(45%);
          }
          50% {
            transform: translateX(-45%);
          }
          100% {
            transform: translateX(45%);
          }
        }
        @keyframes ticker-mobile {
          0% {
            transform: translateX(50%);
          }
          50% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-ticker {
          animation: ticker 10s linear infinite;
          position: relative;
          white-space: nowrap;
          padding: 0 1rem;
          display: inline-block;
          width: auto;
        }
        .animate-ticker-mobile {
          animation: ticker-mobile 10s linear infinite;
          position: relative;
          white-space: nowrap;
          padding: 0 1rem;
          display: inline-block;
          width: auto;
        }
      `}</style>
    </div>
  );
}

function AnnouncementBarStory() {
  return (
    <div>
      <AnnouncementBar message="Ask us about our Spring Time Roofing Spectacular sales event" />
    </div>
  );
}

export default AnnouncementBar;