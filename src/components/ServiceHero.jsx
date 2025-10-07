import { NavLink } from "react-router-dom";
import LiquidEther from './ui/Liquid/LiquidEther';

const ServiceHero = () => (
  <div className="relative w-full h-screen flex items-center justify-center">
    {/* LiquidEther Background */}
    <LiquidEther
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
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
    <div className="absolute text-center text-black px-4 z-10">
      {/* 🖤 Updated Headline */}
      <h1 className="text-4xl md:text-6xl font-bold">
        Our IT Services
      </h1>

      {/* 🖤 Updated Subheadline */}
      <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
        Tailored solutions for web development, software, consulting, cloud services, 
        and cybersecurity to take your business to the next level.
      </p>

      {/* 🖤 Updated CTA */}
      <NavLink
        to="/services"
        className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium text-lg shadow-md transition-all duration-300"
      >
        Explore Our Services
      </NavLink>
    </div>
  </div>
);

export default ServiceHero;
