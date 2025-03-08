"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function SeoBlogPostCard({
  title,
  excerpt,
  imageUrl,
  author = {
    name: "",
    avatar: "",
  },
  publishDate,
  categories = [],
  href = "#",
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: author.name,
      image: author.avatar,
    },
    datePublished: publishDate,
    articleSection: categories.join(", "),
    url: href,
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <a href={href} className="block">
        <div className="relative h-[200px]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="bg-[#1B365D] text-white px-3 py-1 rounded-full text-xs font-roboto"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </a>

      <div className="p-6">
        <a href={href} className="block">
          <h2 className="text-xl font-bold text-[#1B365D] font-roboto mb-3 hover:text-[#FFD700] transition-colors duration-300">
            {title}
          </h2>
        </a>

        <p className="text-gray-600 mb-4 line-clamp-2 font-roboto">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-roboto text-[#1B365D] font-semibold">
                {author.name}
              </p>
              <time
                dateTime={publishDate}
                className="text-sm text-gray-500 font-roboto"
              >
                {new Date(publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <a
            href={href}
            className="text-[#1B365D] hover:text-[#FFD700] transition-colors duration-300"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

function SeoBlogPostCardStory() {
  const samplePost = {
    title: "How to Safely Clean Your Gutters",
    excerpt:
      "A step-by-step guide to maintaining your gutters and preventing water damage. Learn the best practices for gutter maintenance and when to call professionals.",
    imageUrl:
      "https://ucarecdn.com/1c3d4e5f-6789-4abc-def0-123456789abc/-/format/auto/",
    author: {
      name: "Art Garza",
      avatar: "/team/art.jpg",
    },
    publishDate: "2024-01-15T00:00:00Z",
    categories: ["DIY", "Maintenance"],
    href: "/blog/how-to-safely-clean-gutters",
  };

  const technicalPost = {
    title: "Understanding Roofing R-Values",
    excerpt:
      "An in-depth look at roofing insulation values and their impact on energy efficiency. Learn how to choose the right materials for your climate.",
    imageUrl:
      "https://ucarecdn.com/2c3d4e5f-6789-4abc-def0-123456789abc/-/format/auto/",
    author: {
      name: "Jeremy Smith",
      avatar: "/team/jeremy.jpg",
    },
    publishDate: "2024-02-01T00:00:00Z",
    categories: ["Technical", "Energy Efficiency"],
    href: "/blog/understanding-r-values",
  };

  return (
    <div className="p-8 bg-gray-100 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Standard Blog Post Card</h2>
      <div className="max-w-md">
        <SeoBlogPostCard {...samplePost} />
      </div>

      <h2 className="text-2xl font-bold mb-4">Technical Blog Post Card</h2>
      <div className="max-w-md">
        <SeoBlogPostCard {...technicalPost} />
      </div>
    </div>
  );
}

export default SeoBlogPostCard;