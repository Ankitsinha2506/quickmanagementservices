import React from "react";
import LiquidEther from "./ui/Liquid/LiquidEther";

const ContactHero = () => {
  return (
    <section className="relative w-full h-screen bg-white text-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background Liquid Animation */}
      <LiquidEther
        colors={['#A3A3FF', '#FFE4F1', '#D6CCFF']} // lighter/pastel colors for white background
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

      {/* Hero Content */}
      <div className="absolute text-center text-gray-900 px-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">Connect With Us Today</h1>
        <p className="mt-4 text-lg md:text-2xl">
          We're here to help you achieve your business goals. <br />
          Reach out to discuss your IT solutions and start your journey toward success.
        </p>
        <button className="mt-6 border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
