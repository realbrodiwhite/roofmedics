"use client";
import React from "react";
import ContactForm from "../components/contact-form";
import HeaderWithAnnouncement from "../components/header-with-announcement";
import EmergencyBanner from "../components/emergency-banner";
import Footer from "../components/footer";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function MainComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const testimonials = [
    {
      name: "John Anderson",
      location: "Denver",
      image: "/testimonials/john.jpg",
      rating: 5,
      content:
        "Outstanding roofing service! They replaced our old roof with high-quality materials that look amazing and provide excellent protection against all weather conditions.",
      project: "Complete Roof Replacement",
    },
    {
      name: "Sarah Thompson",
      location: "Chicago",
      image: "/testimonials/sarah.jpg",
      rating: 5,
      content:
        "After storm damage to our roof, their team responded quickly and provided excellent repair service. Their knowledge of roofing systems is impressive.",
      project: "Emergency Roof Repair",
    },
    {
      name: "Michael Rodriguez",
      location: "Houston",
      image: "/testimonials/michael.jpg",
      rating: 5,
      content:
        "Their annual maintenance program has kept our roof in perfect condition. Great value and exceptional service!",
      project: "Roof Maintenance",
    },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (autoplay && testimonials.length > 0) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => {
          const nextIndex = prev + 1;
          return nextIndex >= testimonials.length ? 0 : nextIndex;
        });
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = position / height;
      setScrollProgress(progress);
      setShowBackToTop(position > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentTestimonial((prev) => {
        const newIndex = prev - 1;
        return newIndex < 0 ? testimonials.length - 1 : newIndex;
      });
    }
    setAutoplay(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="fixed top-0 left-0 w-full h-1 bg-[#FFD700] transform origin-left transition-transform duration-300"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <head>
        <title>Professional Roofing Services | Roof Medics</title>
        <meta
          name="description"
          content="Expert roofing services specializing in installations, repairs & maintenance. Quality craftsmanship and superior customer service. Free estimates - Call Now!"
        />
        <meta
          name="keywords"
          content="roofing services, roof repair, roof installation, roofing contractor, residential roofing, commercial roofing"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          property="og:title"
          content="Professional Roofing Services | Roof Medics"
        />
        <meta
          property="og:description"
          content="Expert roofing services specializing in installations, repairs & maintenance. Quality craftsmanship and superior customer service."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          as="image"
          href="https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/"
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "name": "Roof Medics",
        "image": "https://example.com/photos/1x1/photo.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Your City",
          "addressRegion": "ST",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "url": "https://yourwebsite.com",
        "telephone": "+18005555555",
        "priceRange": "$",
        "areaServed": "United States"
      }
    `}
        </script>
      </head>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <HeaderWithAnnouncement />
      </div>

      <main className="flex-grow mt-[45px]" role="main">
        <RoofMedicHero
          backgroundImage="https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/"
          overlay="dark"
          title="Your Trusted Roofing Experts"
          subtitle="Professional roof installation, repair & maintenance services"
          primaryAction={{
            href: "#get-quote",
            text: "Get Free Quote",
            className: "bg-[#FFD700] text-[#1B365D] hover:bg-[#FFE55C]",
          }}
          secondaryAction={{
            href: "tel:+18005555555",
            text: "Call Now",
            className:
              "bg-transparent border-2 border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white",
          }}
          titleColor="text-[#1B365D]"
          subtitleColor="text-[#1B365D]"
          overlayClassName="bg-white/80"
        />
        <div className="bg-[#FFD700] py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="bg-[#1B365D] rounded-full p-3">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-[#1B365D] font-bold text-xl">
                    Limited Time Special Offer
                  </h3>
                  <p className="text-[#1B365D]/80">
                    Free roof inspection & 10% off maintenance packages
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#1B365D] font-bold">
                  Offer ends March 1st at 12:00 am
                </div>
                <a
                  href="#get-quote"
                  className="bg-[#1B365D] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2B466D] transition-colors duration-300 whitespace-nowrap animate-claim-offer"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="py-20 bg-[#1B365D]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-3">
              Why Choose Roof Medics
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              With decades of experience in the industry, we specialize in
              comprehensive roofing solutions designed to protect your property
              and provide lasting value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Roofing Expertise",
                  description:
                    "Specialized in comprehensive roofing solutions for all types of buildings and climate conditions",
                  icon: "tools",
                },
                {
                  title: "Licensed & Insured",
                  description:
                    "Fully licensed contractors with comprehensive insurance coverage for your peace of mind",
                  icon: "shield-check",
                },
                {
                  title: "Proven Experience",
                  description:
                    "25+ years of excellence in roofing installations and repairs",
                  icon: "star",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <i
                    className={`fas fa-${item.icon} text-[#FFD700] text-3xl mb-4`}
                  ></i>
                  <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1B365D] mb-3">
              Our Roofing Services
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Comprehensive roofing solutions for residential and commercial
              properties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Roof Installation",
                  description:
                    "Expert installation of quality roofing materials for optimal protection and durability",
                  icon: "home",
                },
                {
                  title: "Roof Repairs",
                  description:
                    "Swift, reliable repairs for storm damage and general wear on all types of roofs",
                  icon: "tools",
                },
                {
                  title: "Emergency Repairs",
                  description:
                    "24/7 emergency roofing repair services when you need them most",
                  icon: "bolt",
                },
                {
                  title: "Roof Maintenance",
                  description:
                    "Comprehensive preventive maintenance programs to extend roof life",
                  icon: "calendar",
                },
                {
                  title: "Inspections",
                  description:
                    "Thorough roof inspections with detailed reports and recommendations",
                  icon: "search",
                },
                {
                  title: "Insurance Claims",
                  description:
                    "Expert assistance with roof-related insurance claims",
                  icon: "file-contract",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <i
                    className={`fas fa-${service.icon} text-[#FFD700] text-3xl mb-4`}
                  ></i>
                  <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <a
                    href="/contact"
                    className="inline-block mt-4 text-[#1B365D] hover:text-[#FFD700]"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <EmergencyBanner phoneNumber="7194805235" />
        <style jsx global>{`
          @keyframes pulse-text {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          .emergency-text {
            display: inline-block;
            animation: pulse-text 3s ease-in-out infinite;
          }

          @keyframes claim-offer-pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.12);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-claim-offer {
            animation: claim-offer-pulse 4s ease-in-out infinite;
          }
        `}</style>
        <section className="py-20 bg-[#1B365D]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-3">
              Roofing Tips & Resources
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Expert advice and guides to help maintain and protect your roof
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogPostCard
                title="Winter Roof Maintenance Tips"
                excerpt="Essential maintenance tasks to protect your roof during harsh winter weather."
                imageUrl="https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/"
                author={{
                  name: "John Smith",
                  avatar: "/team/john.jpg",
                }}
                publishDate="2024-01-15"
                categories={["Maintenance", "Winter"]}
                href="/blog/winter-roof-maintenance"
              />
              <BlogPostCard
                title="Signs You Need a Roof Replacement"
                excerpt="Learn the key indicators that suggest it's time to replace your roof."
                imageUrl="https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/"
                author={{
                  name: "Sarah Johnson",
                  avatar: "/team/sarah.jpg",
                }}
                publishDate="2024-01-10"
                categories={["Education", "Tips"]}
                href="/blog/roof-replacement-signs"
              />
              <BlogPostCard
                title="How to Choose the Right Roofing Material"
                excerpt="A comprehensive guide to selecting the best roofing materials for your home."
                imageUrl="https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/"
                author={{
                  name: "Mike Wilson",
                  avatar: "/team/mike.jpg",
                }}
                publishDate="2024-01-05"
                categories={["Materials", "Guide"]}
                href="/blog/choosing-materials"
              />
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1B365D] mb-12">
              What Our Customers Say
            </h2>

            <div className="relative max-w-7xl mx-auto overflow-hidden">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}
                >
                  {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <div
                        key={index}
                        className="w-full md:w-1/3 flex-shrink-0 px-4"
                      >
                        <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center">
                              <img
                                src={testimonial.image}
                                alt={`${testimonial.name}'s testimonial`}
                                className="w-16 h-16 rounded-full object-cover mr-4"
                              />
                              <div>
                                <div className="font-bold text-lg text-[#1B365D]">
                                  {testimonial.name}
                                </div>
                                <div className="text-gray-500 text-sm">
                                  {testimonial.location}
                                </div>
                              </div>
                            </div>
                            <div className="text-[#FFD700] text-lg">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-base italic mb-6 line-clamp-4">
                            "{testimonial.content}"
                          </p>
                          <div className="text-[#1B365D] font-semibold text-sm">
                            Project: {testimonial.project}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => {
                    const newIndex = prev - 1;
                    return newIndex < 0 ? testimonials.length - 1 : newIndex;
                  });
                  setAutoplay(false);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors duration-300 z-10"
                aria-label="Previous testimonials"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  );
                  setAutoplay(false);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors duration-300 z-10"
                aria-label="Next testimonials"
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setAutoplay(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-[#1B365D] scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div
              className="touch-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </section>
        <section className="py-20 bg-[#1B365D]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-3">
              Our Service Area
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Serving communities within 250 miles of Monte Vista, Colorado
            </p>

            <div className="mb-12">
              <ReactGoogleMaps.APIProvider
                apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                libraries={["places"]}
              >
                <ReactGoogleMaps.Map
                  id="service-area-map"
                  mapId="map"
                  center={{ lat: 37.5793, lng: -106.1479 }}
                  defaultCenter={{ lat: 37.5793, lng: -106.1479 }}
                  zoom={7}
                  className="w-full h-[400px] rounded-lg shadow-lg border-2 border-white"
                >
                  <ReactGoogleMaps.AdvancedMarker
                    position={{ lat: 37.5793, lng: -106.1479 }}
                  >
                    <ReactGoogleMaps.InfoWindow>
                      <div className="p-2">
                        <strong>Roof Medics Headquarters</strong>
                        <br />
                        Monte Vista, CO
                      </div>
                    </ReactGoogleMaps.InfoWindow>
                  </ReactGoogleMaps.AdvancedMarker>
                </ReactGoogleMaps.Map>
              </ReactGoogleMaps.APIProvider>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { city: "Denver, CO", distance: "230 miles" },
                { city: "Colorado Springs, CO", distance: "175 miles" },
                { city: "Albuquerque, NM", distance: "245 miles" },
                { city: "Santa Fe, NM", distance: "180 miles" },
                { city: "Pueblo, CO", distance: "145 miles" },
                { city: "Durango, CO", distance: "135 miles" },
                { city: "Grand Junction, CO", distance: "230 miles" },
                { city: "Taos, NM", distance: "120 miles" },
                { city: "Alamosa, CO", distance: "35 miles" },
                { city: "Del Norte, CO", distance: "30 miles" },
                { city: "South Fork, CO", distance: "45 miles" },
                { city: "Creede, CO", distance: "60 miles" },
                { city: "Pagosa Springs, CO", distance: "85 miles" },
                { city: "La Jara, CO", distance: "25 miles" },
                { city: "Center, CO", distance: "15 miles" },
                { city: "Crestone, CO", distance: "40 miles" },
                { city: "Saguache, CO", distance: "50 miles" },
                { city: "Villa Grove, CO", distance: "55 miles" },
                { city: "Hooper, CO", distance: "20 miles" },
                { city: "Moffat, CO", distance: "45 miles" },
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur p-4 rounded-lg"
                >
                  <h3 className="text-white font-bold mb-1">{location.city}</h3>
                  <p className="text-gray-300 text-sm">{location.distance}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <a
                href="#get-quote"
                className="inline-block bg-[#FFD700] text-[#1B365D] px-8 py-3 rounded-lg font-bold hover:bg-[#FFE55C] transition-colors duration-300"
              >
                Get Free Quote
              </a>
              <a
                href="/roofmedic-service-page/contact"
                className="inline-block bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-lg font-bold hover:bg-[#FFD700] hover:text-[#1B365D] transition-colors duration-300"
              >
                Check Your Location
              </a>
            </div>
          </div>
        </section>
        <div className="bg-white py-8 relative">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1B365D] mb-3">
              The Roof Medics Advantage
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Why thousands of homeowners trust us with their roofing needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <i className="fas fa-calendar-alt text-[#1B365D] text-3xl mb-2"></i>
                <div className="text-3xl font-bold text-[#1B365D] mb-1">
                  20+
                </div>
                <div className="text-gray-600 text-sm">Years in the SLV</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-home text-[#1B365D] text-3xl mb-2"></i>
                <div className="text-3xl font-bold text-[#1B365D] mb-1">
                  1,000+
                </div>
                <div className="text-gray-600 text-sm">Jobs Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-star text-[#1B365D] text-3xl mb-2"></i>
                <div className="text-3xl font-bold text-[#1B365D] mb-1">
                  4.9
                </div>
                <div className="text-gray-600 text-sm">Star Rating</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-clock text-[#1B365D] text-3xl mb-2"></i>
                <div className="text-3xl font-bold text-[#1B365D] mb-1">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-16 bg-[#1B365D]">
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long do roofs typically last?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With proper installation and maintenance, quality roofing materials can last 20-30 years or more, depending on the material type and environmental conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What roofing materials do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer a wide range of roofing materials including asphalt shingles, metal roofing, tile, slate, and flat roof systems to suit different needs and preferences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer emergency roof repair services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide 24/7 emergency roof repair services with prompt response times to protect your property.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer financing options?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we work with trusted financial partners to provide flexible payment options that can help make your roofing project more manageable. Contact us to learn more about available plans.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are you licensed and insured?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we are fully licensed and insured, providing comprehensive coverage for all our roofing projects for your peace of mind.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What warranties do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer comprehensive warranties on both materials and workmanship. As an Owens Corning Preferred Contractor, we provide industry-leading warranty coverage.",
                  },
                },
              ],
            })}
          </script>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  How long do roofs typically last?
                </h3>
                <p className="text-gray-600">
                  With proper installation and maintenance, quality roofing
                  materials can last 20-30 years or more, depending on the
                  material type and environmental conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  What roofing materials do you offer?
                </h3>
                <p className="text-gray-600">
                  We offer a wide range of roofing materials including asphalt
                  shingles, metal roofing, tile, slate, and flat roof systems to
                  suit different needs and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  Do you offer emergency roof repair services?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide 24/7 emergency roof repair services with
                  prompt response times to protect your property.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  Do you offer financing options?
                </h3>
                <p className="text-gray-600">
                  Yes, we work with trusted financial partners to provide
                  flexible payment options that can help make your roofing
                  project more manageable. Contact us to learn more about
                  available plans.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  Are you licensed and insured?
                </h3>
                <p className="text-gray-600">
                  Yes, we are fully licensed and insured, providing
                  comprehensive coverage for all our roofing projects for your
                  peace of mind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-[#1B365D]">
                  What warranties do you offer?
                </h3>
                <p className="text-gray-600">
                  We offer comprehensive warranties on both materials and
                  workmanship. As an Owens Corning Preferred Contractor, we
                  provide industry-leading warranty coverage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-quote" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1B365D] mb-12">
              Need a New Roof?
            </h2>
            <ContactForm />
          </div>
        </section>
        <RoofingTipsResourcesBlogs
          title="Roofing Tips & Resources"
          description="Expert advice and guides to help maintain and protect your roof"
          posts={[
            {
              title: "Winter Roof Maintenance Tips",
              excerpt:
                "Essential maintenance tasks to protect your roof during harsh winter weather and prevent ice dam formation.",
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
                "Learn the key indicators that suggest it's time to replace your roof, from aging shingles to water damage.",
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
                "A comprehensive guide to selecting the best roofing materials for your climate and architectural style.",
              imageUrl:
                "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
              author: { name: "Mike Wilson", avatar: "/team/mike.jpg" },
              publishDate: "2024-01-05",
              categories: ["Materials", "Guide"],
              href: "/blog/choosing-materials",
            },
            {
              title: "Spring Roofing Maintenance Checklist",
              excerpt:
                "Your complete guide to spring roof maintenance, including inspection tips and cleaning procedures.",
              imageUrl:
                "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
              author: { name: "Emily Davis", avatar: "/team/emily.jpg" },
              publishDate: "2024-01-03",
              categories: ["Maintenance", "Spring"],
              href: "/blog/spring-maintenance-checklist",
            },
            {
              title: "Understanding Roof Ventilation",
              excerpt:
                "Why proper roof ventilation is crucial for your home's efficiency and how to ensure your system is working.",
              imageUrl:
                "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
              author: { name: "Tom Brown", avatar: "/team/tom.jpg" },
              publishDate: "2024-01-01",
              categories: ["Education", "Ventilation"],
              href: "/blog/roof-ventilation-guide",
            },
            {
              title: "Emergency Roof Repair Guide",
              excerpt:
                "What to do when you need emergency roof repairs and how to prevent further damage until help arrives.",
              imageUrl:
                "https://ucarecdn.com/eb7d2314-d883-4b5e-b5a7-ab6916b8da72/-/format/auto/",
              author: { name: "Chris Martinez", avatar: "/team/chris.jpg" },
              publishDate: "2023-12-28",
              categories: ["Emergency", "Repairs"],
              href: "/blog/emergency-repair-guide",
            },
          ]}
        />
      </main>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#1B365D] text-white p-4 rounded-full shadow-lg hover:bg-[#2B466D] transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}

      <Footer />
    </div>
  );
}

export default MainComponent;