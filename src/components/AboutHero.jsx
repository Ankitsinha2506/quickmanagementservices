import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LiquidEther from "./ui/Liquid/LiquidEther";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-black">
      
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6">
        {/* 🖤 Updated Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-black"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Who We Are
        </motion.h1>

        {/* 🖤 Updated Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Quick Management Services Pvt Ltd, we combine expertise, innovation, 
          and technology to help businesses succeed.
        </motion.p>

        {/* 🖤 Updated CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <NavLink
            to="/about"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More About Us
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
