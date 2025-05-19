"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address",
      });
      return;
    }

    // In a real application, you'd send the data to your backend here
    try {
      // Mock API call - replace with your actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } catch {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Status Message */}
        {formStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-center ${
              formStatus.error
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {formStatus.message}
          </motion.div>
        )}

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg border ${
              touched.name && !formData.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            } transition-all duration-200 outline-none focus:ring-2 focus:ring-opacity-30`}
            placeholder="Your name"
          />
          {touched.name && !formData.name && (
            <p className="mt-1 text-xs text-red-600">Please enter your name</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg border ${
              (touched.email && !formData.email) ||
              (touched.email && !validateEmail(formData.email))
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            } transition-all duration-200 outline-none focus:ring-2 focus:ring-opacity-30`}
            placeholder="your.email@example.com"
          />
          {touched.email && !formData.email && (
            <p className="mt-1 text-xs text-red-600">Please enter your email</p>
          )}
          {touched.email &&
            formData.email &&
            !validateEmail(formData.email) && (
              <p className="mt-1 text-xs text-red-600">
                Please enter a valid email address
              </p>
            )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              touched.message && !formData.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            } transition-all duration-200 outline-none focus:ring-2 focus:ring-opacity-30`}
            placeholder="Tell us about your project or idea"
          ></motion.textarea>
          {touched.message && !formData.message && (
            <p className="mt-1 text-xs text-red-600">
              Please enter your message
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow transition-colors duration-300 ease-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
