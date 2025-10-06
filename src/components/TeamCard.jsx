import { motion } from "framer-motion";

const TeamCard = ({ name, role, img, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 ${className}`}
  >
    <img src={img} alt={name} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
    </div>
  </motion.div>
);

export default TeamCard;
