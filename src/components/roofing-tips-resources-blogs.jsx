"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function RoofingTipsResourcesBlogs({ title, description, posts }) {
  return (
    <section className="py-20 bg-[#1B365D]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          {title}
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <></>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoofingTipsResourcesBlogsStory() {
  const posts = [
    {
      title: "Winter Roof Maintenance Tips",
      excerpt:
        "Essential maintenance tasks to protect your roof during harsh winter weather.",
      imageUrl:
        "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
      author: { name: "John Smith", avatar: "/team/john.jpg" },
      publishDate: "2024-01-15",
      categories: ["Maintenance", "Winter"],
      href: "/blog/winter-roof-maintenance",
    },
    {
      title: "Signs You Need a Roof Replacement",
      excerpt:
        "Learn the key indicators that suggest it's time to replace your roof.",
      imageUrl:
        "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
      author: { name: "Sarah Johnson", avatar: "/team/sarah.jpg" },
      publishDate: "2024-01-10",
      categories: ["Education", "Tips"],
      href: "/blog/roof-replacement-signs",
    },
    {
      title: "How to Choose the Right Roofing Material",
      excerpt:
        "A comprehensive guide to selecting the best roofing materials for your home.",
      imageUrl:
        "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
      author: { name: "Mike Wilson", avatar: "/team/mike.jpg" },
      publishDate: "2024-01-05",
      categories: ["Materials", "Guide"],
      href: "/blog/choosing-materials",
    },
  ];

  return (
    <div>
      <RoofingTipsResourcesBlogs
        title="Roofing Tips & Resources"
        description="Expert advice and guides to help maintain and protect your roof"
        posts={posts}
      />
    </div>
  );
}

export default RoofingTipsResourcesBlogs;