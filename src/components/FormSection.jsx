import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaPaperPlane } from "react-icons/fa";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "", service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "", email: "", phone: "", company: "", subject: "", message: "", service: ""
      });
      setTimeout(() => setSubmitStatus(""), 3000);
    }, 2000);
  };

  return (
    <motion.div
      id="contact-form"
      className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Ready to transform your business? Let's discuss your IT needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text" name="name" placeholder="Full Name *"
              value={formData.name} onChange={handleChange} required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email" name="email" placeholder="Email Address *"
              value={formData.email} onChange={handleChange} required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="relative">
            <FaBuilding className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text" name="company" placeholder="Company Name"
              value={formData.company} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Service */}
        <select
          name="service" value={formData.service} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Service *</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>Cloud Services</option>
          <option>IT Consulting</option>
          <option>Digital Transformation</option>
          <option>Cybersecurity</option>
          <option>Data Analytics</option>
          <option>Other</option>
        </select>

        {/* Subject & Message */}
        <input
          type="text" name="subject" placeholder="Subject *"
          value={formData.subject} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <textarea
          name="message" placeholder="Your message *"
          value={formData.message} onChange={handleChange} required
          rows="5"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          {isSubmitting ? (
            <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </motion.button>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default FormSection;