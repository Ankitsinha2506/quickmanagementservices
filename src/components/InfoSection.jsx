import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const InfoSection = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-indigo-600 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold">Our Office</h3>
            <p>203, Changbhale Heights, Jawalkar Nagar, Pune, MH 411061</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-indigo-600 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p>+91 7066521234</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-indigo-600 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p>hr@quickmanagementservices.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaClock className="text-indigo-600 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p>Mon–Fri: 9 AM – 6 PM</p>
            <p>Sat: 10 AM – 2 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
        <h4 className="font-semibold mb-2">Our Commitment</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          We guarantee a response within 24 hours during business days. For
          urgent matters, please call us directly.
        </p>
      </div>
    </motion.div>
  );
};

export default InfoSection;