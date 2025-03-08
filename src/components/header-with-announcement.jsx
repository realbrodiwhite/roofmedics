"use client";
import React from "react";
import AnnouncementBar from "../components/announcement-bar";
import Header from "../components/header";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function HeaderWithAnnouncement() {
  const { data: user, loading } = useUser();

  if (loading) {
    return <div className="text-2xl">Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-[100]">
        <div className="relative z-[110]">
          <AnnouncementBar message="Ask us about our Spring Time Roofing Spectacular sales event" />
        </div>
        <div className="relative z-[120]">
          <Header />
        </div>
      </div>
      {!user && (
        <div className="text-center py-4 bg-gray-50 border-b text-2xl">
          <a
            href="/account/signin"
            className="text-[#1B365D] text-2xl font-roboto hover:underline px-4 py-2"
          >
            Sign in
          </a>{" "}
          or{" "}
          <a
            href="/account/signup"
            className="text-[#1B365D] text-2xl font-roboto hover:underline px-4 py-2"
          >
            Sign up
          </a>
        </div>
      )}
    </div>
  );
}

function HeaderWithAnnouncementStory() {
  return (
    <div>
      <HeaderWithAnnouncement />
    </div>
  );
}

export default HeaderWithAnnouncement;