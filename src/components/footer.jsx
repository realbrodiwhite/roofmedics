"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-roboto text-white border-b border-[#CBD5E1] pb-2">
              About Us
            </h3>
            <div className="flex items-center space-x-4">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="https://ucarecdn.com/acedd757-7727-48ba-b5f1-74e26d35e87e/-/format/auto/"
                  alt="Roof Medics Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold font-roboto">Roof Medics</div>
            </div>
            <p className="text-[#CBD5E1] font-roboto leading-relaxed">
              Your trusted roofing experts providing quality repairs,
              installations, and maintenance services with integrity and
              professionalism since 2005.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#CBD5E1] hover:text-[#FFD700] text-xl transition-colors duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-[#CBD5E1] hover:text-[#FFD700] text-xl transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#CBD5E1] hover:text-[#FFD700] text-xl transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-[#CBD5E1] hover:text-[#FFD700] text-xl transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-roboto text-white border-b border-[#CBD5E1] pb-2">
              Quick Links
            </h3>
            <nav className="grid grid-cols-1 gap-3 font-roboto">
              <a
                href="/services"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                Roofing Services
              </a>
              <a
                href="/blog"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                DIY Roof Repair Blog
              </a>
              <a
                href="/about"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="/testimonials"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="/faq"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-[#CBD5E1] hover:text-[#FFD700] transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-roboto text-white border-b border-[#CBD5E1] pb-2">
              Contact Us
            </h3>
            <div className="space-y-4 text-[#CBD5E1] font-roboto">
              <a
                href="tel:17194805235"
                className="flex items-center space-x-3 hover:text-[#FFD700] transition-colors duration-300"
              >
                <i className="fas fa-phone"></i>
                <span>(719) 480-5235</span>
              </a>
              <a
                href="mailto:info@valleyroofmedics.com"
                className="flex items-center space-x-3 hover:text-[#FFD700] transition-colors duration-300"
              >
                <i className="fas fa-envelope"></i>
                <span>info@valleyroofmedics.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt"></i>
                <span>Monte Vista, CO</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 8AM - 6PM</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-roboto text-white border-b border-[#CBD5E1] pb-2">
              Service Area
            </h3>
            <p className="text-[#CBD5E1] font-roboto leading-relaxed">
              Proudly serving communities within 250 miles of Monte Vista,
              Colorado. Contact us today for a comprehensive roofing
              consultation.
            </p>
            <div>
              <a
                href="/quote"
                className="inline-block bg-[#FFD700] text-[#1B365D] px-6 py-3 rounded-md font-semibold hover:bg-[#FFE55C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#CBD5E1]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#CBD5E1] font-roboto">
              © 2025 Brodi Branded Inc. for Roof Medics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-[#CBD5E1] font-roboto text-sm">
              <a
                href="/privacy"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterStory() {
  return (
    <div className="w-full">
      <Footer />
    </div>
  );
}

export default Footer;