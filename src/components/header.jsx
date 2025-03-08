"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const linkClasses =
    "text-[0.8rem] font-semibold hover:text-[#CBD5E1] whitespace-nowrap flex items-center h-[24px]";

  const quoteButtonClasses =
    "bg-[#FFD700] text-[#1B365D] px-3 py-1.5 rounded-md text-[0.8rem] font-semibold hover:bg-[#FFE55C] transition-colors duration-300 whitespace-nowrap flex items-center h-[24px]";

  return (
    <header className="bg-[#1B365D] text-white w-full relative h-[45px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <a
            href="/"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="h-[67px] w-[67px] relative">
              <div className="logo-outline absolute inset-0"></div>
              <div className="h-full w-full rounded-full overflow-hidden relative z-10">
                <img
                  src="https://ucarecdn.com/acedd757-7727-48ba-b5f1-74e26d35e87e/-/format/auto/"
                  alt="Roof Medics - Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center justify-between w-full">
            <nav className="flex items-center justify-between w-full font-roboto">
              <div className="flex items-center space-x-8 h-full">
                <div className="flex items-center h-full">
                  <a href="tel:17194805235" className={linkClasses}>
                    <i className="fas fa-phone text-[0.7rem] mr-2"></i>
                    <span className="inline-flex items-center font-bold">
                      (719) 480-5235
                    </span>
                  </a>
                </div>
                <div className="flex items-center h-full">
                  <a href="/services" className={linkClasses}>
                    Roofing Services
                  </a>
                </div>
                <div className="flex items-center h-full">
                  <a href="/blog" className={linkClasses}>
                    DIY Roof Repair Blog
                  </a>
                </div>
                <div className="relative flex items-center h-full">
                  <button
                    onClick={toggleMoreMenu}
                    className={`flex items-center h-full ${linkClasses}`}
                  >
                    More
                    <i
                      className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
                        isMoreMenuOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {isMoreMenuOpen && (
                    <div className="absolute top-[40px] left-0 w-48 bg-[#1B365D] rounded-md shadow-lg py-2 z-50">
                      <a
                        href="/testimonials"
                        className="flex items-center px-4 py-2 hover:bg-[#2A4A7F] text-sm font-semibold"
                      >
                        Testimonials
                      </a>
                      <a
                        href="/faq"
                        className="flex items-center px-4 py-2 hover:bg-[#2A4A7F] text-sm font-semibold"
                      >
                        FAQ
                      </a>
                      <a
                        href="/about"
                        className="flex items-center px-4 py-2 hover:bg-[#2A4A7F] text-sm font-semibold"
                      >
                        About Us
                      </a>
                      <a
                        href="/contact"
                        className="flex items-center px-4 py-2 hover:bg-[#2A4A7F] text-sm font-semibold"
                      >
                        Contact Us
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-8 h-full">
                <div className="flex items-center space-x-8 h-full">
                  <a href="/account/signin" className={linkClasses}>
                    Sign In
                  </a>
                  <a href="/account/signup" className={linkClasses}>
                    Sign Up
                  </a>
                  <a
                    href="/account"
                    className="hover:text-[#CBD5E1] flex items-center h-full"
                  >
                    <i className="fas fa-user-circle text-xl"></i>
                  </a>
                </div>
                <div className="flex items-center h-full">
                  <a href="/quote" className={quoteButtonClasses}>
                    <span className="text-[0.8rem]">Get a Quote Now</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div className="lg:hidden flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <a href="tel:17194805235" className={linkClasses}>
                <i className="fas fa-phone text-[0.7rem] mr-2"></i>
                <span className="inline-flex items-center font-bold">
                  (719) 480-5235
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/quote" className={`${quoteButtonClasses}`}>
                Get a Quote
              </a>
              <button
                className="text-lg focus:outline-none flex items-center h-[24px]"
                onClick={toggleMenu}
              >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#CBD5E1] w-full">
              <nav className="flex flex-col space-y-4 font-roboto">
                <div className="flex items-center">
                  <a href="/services" className={linkClasses}>
                    Services
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="/blog" className={linkClasses}>
                    Blog
                  </a>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={toggleMoreMenu}
                    className={`flex items-center ${linkClasses}`}
                  >
                    More
                    <i
                      className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
                        isMoreMenuOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                </div>
                {isMoreMenuOpen && (
                  <div className="space-y-2 pl-4">
                    <div className="flex items-center">
                      <a
                        href="/testimonials"
                        className={`flex items-center ${linkClasses}`}
                      >
                        Testimonials
                      </a>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="/faq"
                        className={`flex items-center ${linkClasses}`}
                      >
                        FAQ
                      </a>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="/about"
                        className={`flex items-center ${linkClasses}`}
                      >
                        About Us
                      </a>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="/contact"
                        className={`flex items-center ${linkClasses}`}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  <a href="/account/signin" className={linkClasses}>
                    Sign In
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="/account/signup" className={linkClasses}>
                    Sign Up
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="/account" className={linkClasses}>
                    My Account
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .logo-outline {
          box-shadow: 0 0 0 1.75px white;
          border-radius: 50%;
          z-index: 20;
        }
      `}</style>
    </header>
  );
}

function HeaderStory() {
  return <Header />;
}

export default Header;