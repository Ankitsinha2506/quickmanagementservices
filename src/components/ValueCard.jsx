import { motion } from "framer-motion";

const ValueCard = ({ icon, title, desc, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`bg-white/20 backdrop-blur-md dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:rotate-1 transition-transform duration-300 ${className}`}
  >
    <div className="text-4xl mb-4 text-green-500">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{desc}</p>
  </motion.div>
);

export default ValueCard;
