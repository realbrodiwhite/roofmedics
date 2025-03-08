"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function ServiceArea({ center = { lat: 37.5793, lng: -106.1479 }, zoom = 7 }) {
  const [map, setMap] = useState(null);
  const [circle, setCircle] = useState(null);

  const majorCities = [
    { name: "Denver, CO", distance: "230 miles" },
    { name: "Colorado Springs, CO", distance: "175 miles" },
    { name: "Albuquerque, NM", distance: "245 miles" },
    { name: "Santa Fe, NM", distance: "180 miles" },
    { name: "Pueblo, CO", distance: "145 miles" },
    { name: "Durango, CO", distance: "135 miles" },
    { name: "Grand Junction, CO", distance: "230 miles" },
    { name: "Taos, NM", distance: "120 miles" },
  ];

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    googleMapsScript.async = true;
    googleMapsScript.onload = () => {
      const mapInstance = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom,
        styles: [
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ visibility: "on" }],
          },
        ],
      });

      const circleInstance = new google.maps.Circle({
        strokeColor: "#1B365D",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#CBD5E1",
        fillOpacity: 0.2,
        map: mapInstance,
        center: center,
        radius: 402336, // 250 miles in meters
      });

      setMap(mapInstance);
      setCircle(circleInstance);
    };
    document.head.appendChild(googleMapsScript);

    return () => {
      document.head.removeChild(googleMapsScript);
    };
  }, [center, zoom]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-roboto text-[#1B365D]">
            Our Service Area
          </h2>
          <p className="text-lg text-gray-600 font-roboto">
            Serving communities within 250 miles of Monte Vista, Colorado
          </p>
        </div>

        <div
          id="map"
          className="w-full h-[500px] rounded-lg shadow-lg border-2 border-[#1B365D]"
        ></div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold font-roboto text-[#1B365D] mb-4">
            Major Cities We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorCities.map((city, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow border border-gray-200"
              >
                <div className="font-roboto text-lg font-semibold text-[#1B365D]">
                  {city.name}
                </div>
                <div className="text-gray-600 font-roboto">{city.distance}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceAreaStory() {
  return (
    <div className="w-full">
      <ServiceArea />
    </div>
  );
}

export default ServiceArea;