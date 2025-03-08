"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function BlogPostCard({
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
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
              <time className="text-sm text-gray-500 font-roboto">
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

function BlogPostCardStory() {
  const samplePosts = [
    {
      title: "10 Essential Roof Maintenance Tips for Spring",
      excerpt:
        "Learn how to prepare your roof for the spring season with these essential maintenance tips that will help extend its lifespan and prevent costly repairs.",
      imageUrl: "/blog-post-1.jpg",
      author: {
        name: "John Smith",
        avatar:
          "https://ucarecdn.com/05de7f1e-6038-4b8a-8bb0-3cb45a152b2c/-/preview/200x200/",
      },
      publishDate: "2025-03-15",
      categories: ["Maintenance", "Tips"],
      href: "/blog/roof-maintenance-tips",
    },
    {
      title: "Understanding Different Roofing Materials",
      excerpt:
        "A comprehensive guide to different roofing materials available in the market, their pros and cons, and how to choose the right one for your home.",
      imageUrl: "/blog-post-2.jpg",
      author: {
        name: "Sarah Johnson",
        avatar:
          "https://ucarecdn.com/f4c7c77c-e7d6-4aa7-8342-c41b2e960f4c/-/preview/200x200/",
      },
      publishDate: "2025-03-10",
      categories: ["Education", "Materials"],
      href: "/blog/roofing-materials-guide",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {samplePosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default BlogPostCard;