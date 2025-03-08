"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    roofType: "",
    timeline: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.roofType) newErrors.roofType = "Roof type is required";
    if (!formData.timeline) newErrors.timeline = "Timeline is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        projectType: "",
        roofType: "",
        timeline: "",
        comments: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center space-y-4">
          <i className="fas fa-check-circle text-5xl text-green-500"></i>
          <h2 className="text-2xl font-bold font-roboto text-[#1B365D]">
            Thank You!
          </h2>
          <p className="text-gray-600 font-roboto">
            We've received your quote request and will contact you within 24
            hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#1B365D] text-white px-6 py-2 rounded-md hover:bg-[#2B466D] transition-colors duration-300"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-roboto text-[#1B365D] mb-6">
        Request a Free Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-roboto mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md font-roboto ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-roboto mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md font-roboto ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-roboto mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md font-roboto ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 font-roboto mb-2"
          >
            Property Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md font-roboto ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.address ? "true" : "false"}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="projectType"
              className="block text-gray-700 font-roboto mb-2"
            >
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md font-roboto ${
                errors.projectType ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={errors.projectType ? "true" : "false"}
            >
              <option value="">Select Project Type</option>
              <option value="repair">Roof Repair</option>
              <option value="replacement">Roof Replacement</option>
              <option value="inspection">Roof Inspection</option>
              <option value="maintenance">Maintenance</option>
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="roofType"
              className="block text-gray-700 font-roboto mb-2"
            >
              Roof Type
            </label>
            <select
              id="roofType"
              name="roofType"
              value={formData.roofType}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md font-roboto ${
                errors.roofType ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={errors.roofType ? "true" : "false"}
            >
              <option value="">Select Roof Type</option>
              <option value="asphalt">Asphalt Shingles</option>
              <option value="metal">Metal Roof</option>
              <option value="tile">Tile Roof</option>
              <option value="slate">Slate Roof</option>
              <option value="other">Other</option>
            </select>
            {errors.roofType && (
              <p className="text-red-500 text-sm mt-1">{errors.roofType}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-gray-700 font-roboto mb-2"
          >
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md font-roboto ${
              errors.timeline ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.timeline ? "true" : "false"}
          >
            <option value="">Select Timeline</option>
            <option value="immediate">Immediate (Emergency)</option>
            <option value="1month">Within 1 Month</option>
            <option value="3months">Within 3 Months</option>
            <option value="6months">Within 6 Months</option>
            <option value="planning">Just Planning</option>
          </select>
          {errors.timeline && (
            <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="comments"
            className="block text-gray-700 font-roboto mb-2"
          >
            Additional Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md font-roboto"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B365D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#2B466D] transition-colors duration-300"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
}

function ContactFormStory() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <ContactForm />
    </div>
  );
}

export default ContactForm;