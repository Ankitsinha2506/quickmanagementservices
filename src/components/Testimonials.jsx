import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../assets/testimonials/user1.jfif";
import user2 from "../assets/testimonials/user2.jpg";
import user3 from "../assets/testimonials/user3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Software Engineer",
      image: user2,
      text: "The team’s service was excellent! They made my project run smoothly and delivered before the deadline.",
    },
    {
      name: "Sneha Patil",
      role: "UI/UX Designer",
      image: user1,
      text: "I’m really impressed by the professionalism and quality of work. Highly recommended!",
    },
    {
      name: "Rahul Sharma",
      role: "Marketing Manager",
      image: user3,
      text: "An amazing experience! Communication was clear and results exceeded expectations.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1 justify-items-center">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
