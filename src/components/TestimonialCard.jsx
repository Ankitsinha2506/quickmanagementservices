import React from "react";
import { Quote } from "lucide-react"; // quote icon

const TestimonialCard = ({ name, role, image, text }) => {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 pt-14 text-center max-w-sm mx-auto hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Quote Icon */}
      <div className="flex justify-center mb-3">
        <Quote className="text-blue-500 w-6 h-6 opacity-70" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 italic mb-5 px-2 leading-relaxed">
        “{text}”
      </p>

      {/* Divider line */}
      <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>

      {/* Name & Role */}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;
