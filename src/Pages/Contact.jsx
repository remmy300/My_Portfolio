import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uz4mb3l", // Your service ID
        "template_yh7e1do", // Your template ID
        formData,
        "yl0oNiYcSihAUe4Hx" // Your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent! ✅");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Failed to send email:", error);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 bg-gradient-to-r from-purple-100 to-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Light motion only on heading */}
        <motion.h1
          className="text-4xl font-bold text-purple-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>

        <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
          {/* Form Inputs */}
          {["name", "email", "phone"].map((field) => (
            <div className="flex flex-col" key={field}>
              <label
                htmlFor={field}
                className="mb-1 font-medium text-gray-700 capitalize"
              >
                {field}
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={`Your ${field}`}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required={field !== "phone"}
              />
            </div>
          ))}

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              placeholder="Type your message here..."
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Motion only on button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-purple-600 text-white text-lg font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </motion.button>
        </form>

        <div>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-800 transition"
          >
            <FaFileDownload className="mr-3" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
