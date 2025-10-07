import React from "react";
import { NavLink } from "react-router-dom";
import LiquidEther from "./ui/Liquid/LiquidEther";

const ContactHero = () => {
  return (
    <section className="relative w-full h-screen bg-white text-gray-900 overflow-hidden flex items-center justify-center">
      
      {/* Background Liquid Animation */}
      <LiquidEther
        colors={['#A3A3FF', '#FFE4F1', '#D6CCFF']} // pastel colors for white bg
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      {/* Foreground Content */}
      <div className="absolute text-center text-gray-900 px-4 max-w-xl z-10">
        {/* 🖤 Updated Headline */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in Touch
        </h1>

        {/* 🖤 Updated Subheadline */}
        <p className="mt-4 text-lg md:text-2xl">
          Have questions or a project in mind? Our team at Quick Management Services Pvt Ltd 
          is ready to help you.
        </p>

        {/* 🖤 Updated CTA */}
        <NavLink
          to="/contact"
          className="mt-6 inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md"
        >
          Contact Us
        </NavLink>
      </div>
    </section>
  );
};

export default ContactHero;
