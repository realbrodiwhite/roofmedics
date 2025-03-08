"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function FormValidation({
  onSubmit,
  fields = [],
  submitText = "Submit",
  showPasswordStrength = false,
  requirePasswordConfirm = false,
  className = "",
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    return {
      isValid:
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChar &&
        isLongEnough,
      score: [
        hasUpperCase,
        hasLowerCase,
        hasNumbers,
        hasSpecialChar,
        isLongEnough,
      ].filter(Boolean).length,
    };
  };

  const validateField = (name, value) => {
    const field = fields.find((f) => f.name === name);
    if (!field) return "";

    if (field.required && !value) {
      return "This field is required";
    }

    if (field.type === "email" && value && !validateEmail(value)) {
      return "Please enter a valid email address";
    }

    if (
      field.type === "password" &&
      value &&
      !validatePassword(value).isValid
    ) {
      return "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters";
    }

    if (field.type === "passwordConfirm" && value !== values.password) {
      return "Passwords do not match";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, values[name]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field.name, values[field.name]);
      if (error) newErrors[field.name] = error;
    });

    setErrors(newErrors);
    setTouched(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );

    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(values);
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { score: 0, label: "" };
    const { score } = validatePassword(password);
    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return { score, label: labels[score - 1] };
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map((field) => {
        const showError = touched[field.name] && errors[field.name];
        const strength =
          field.type === "password" && showPasswordStrength
            ? getPasswordStrength(values[field.name])
            : null;

        return (
          <div key={field.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 font-roboto">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <input
              type={field.type}
              name={field.name}
              value={values[field.name] || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-lg font-roboto focus:ring-2 focus:ring-offset-2 focus:outline-none
                ${
                  showError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#1C77A3]"
                }`}
              placeholder={field.placeholder}
            />

            {showError && (
              <p className="text-red-500 text-sm font-roboto">
                {errors[field.name]}
              </p>
            )}

            {strength && (
              <div className="mt-1">
                <div className="flex h-2 overflow-hidden rounded bg-gray-200">
                  {[...Array.from({ length: 5 })].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${
                        i < strength.score ? "bg-[#1C77A3]" : ""
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1 font-roboto">
                  Password strength: {strength.label}
                </p>
              </div>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-[#1C77A3] text-white px-6 py-3 rounded-lg font-roboto 
          hover:bg-[#15618C] focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-[#1C77A3] transition-colors duration-300"
      >
        {submitText}
      </button>
    </form>
  );
}

function FormValidationStory() {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const loginFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
  ];

  const registrationFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
    {
      name: "passwordConfirm",
      label: "Confirm Password",
      type: "password",
      required: true,
      placeholder: "Confirm your password",
    },
  ];

  const contactFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Enter your message",
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#1C77A3] mb-6 font-roboto">
          Login Form
        </h2>
        <FormValidation
          fields={loginFields}
          onSubmit={handleSubmit}
          submitText="Sign In"
        />
      </div>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#1C77A3] mb-6 font-roboto">
          Registration Form
        </h2>
        <FormValidation
          fields={registrationFields}
          onSubmit={handleSubmit}
          submitText="Sign Up"
          showPasswordStrength={true}
        />
      </div>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#1C77A3] mb-6 font-roboto">
          Contact Form
        </h2>
        <FormValidation
          fields={contactFields}
          onSubmit={handleSubmit}
          submitText="Send Message"
        />
      </div>
    </div>
  );
}

export default FormValidation;