import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LiquidEther from "./ui/Liquid/LiquidEther";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-black"> {/* 🖤 Changed from text-white to text-black */}
      
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-black"  
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Quick <span className="text-blue-700">Management</span> Services 
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10"  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Empowering businesses with innovative strategies and expert solutions to
            achieve sustainable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <NavLink
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-transform transform hover:scale-105" 
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/contact"
              className="border border-black text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 shadow-md" 
            >
              Get in Touch
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
