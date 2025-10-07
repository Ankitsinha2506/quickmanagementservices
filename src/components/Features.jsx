import { motion } from "framer-motion";
import {
  FaLaptopCode, FaCloud, FaShieldAlt, FaChartLine,
  FaMobileAlt, FaUsers, FaCog, FaHeadset
} from "react-icons/fa";
import ElectricBorder from './ui/ElectricBorder/ElectricBorder'; 
const features = [
  {
    icon: <FaLaptopCode size={30} className="text-blue-500" />,
    title: "Custom Software Development",
    desc: "Tailored solutions to meet your specific business needs. Agile development ensures fast delivery and flexibility, with scalable applications for long-term growth.",
  },
  {
    icon: <FaCloud size={30} className="text-blue-500" />,
    title: "Cloud Services & Management",
    desc: "Comprehensive cloud solutions including strategy, migration, deployment, and ongoing management. Optimize costs, ensure high availability, and leverage multi-cloud or hybrid environments with expert monitoring and security.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-500" />,
    title: "Cybersecurity & Compliance",
    desc: "Protect your systems and sensitive data from cyber threats. Regular audits and compliance with industry standards using advanced security protocols.",
  },
  {
    icon: <FaChartLine size={30} className="text-blue-500" />,
    title: "Data Analytics & BI",
    desc: "Transform raw data into strategic assets using advanced analytics, machine learning, and business intelligence tools. Create interactive dashboards, perform predictive modeling, and empower data-driven decision making across your enterprise.",
  },
  {
    icon: <FaCog size={30} className="text-blue-500" />,
    title: "DevOps & Automation",
    desc: "Accelerate development lifecycles and improve product quality with end-to-end DevOps solutions. Automate CI/CD pipelines, infrastructure provisioning, testing, and deployment processes using cutting-edge tools and best practices.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-blue-500" />,
    title: "Mobile & Web Applications",
    desc: "Design and develop high-performance, user-centric mobile and web applications. Use the latest frameworks and technologies to ensure responsive, accessible apps that deliver seamless experiences across devices.",
  },
  {
    icon: <FaUsers size={30} className="text-blue-500" />,
    title: "IT Consulting & Strategy",
    desc: "Leverage expert IT consulting to define and execute technology roadmaps aligned with business goals. Optimize IT investments, embrace digital transformation, and foster innovation to gain a competitive advantage.",
  },
  {
    icon: <FaHeadset size={30} className="text-blue-500" />,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock technical support with regular updates, patching, and performance monitoring to minimize downtime and ensure business continuity.",
  },
];


// Animation Variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const Features = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-200 rounded-full opacity-20 top-[-50px] left-[-50px] blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-200 rounded-full opacity-20 bottom-[-50px] right-[-50px] blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-center mb-12 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover what makes us stand out in delivering exceptional IT solutions
        </motion.p>

        {/* Feature Cards Grid with Glowing ElectricBorder Animation */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, i) => (
            // --- **START: ElectricBorder wrapping each card** change --
            <ElectricBorder
              key={i}
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 cursor-pointer relative z-10"
                variants={cardVariants}
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm md:text-base">{feature.desc}</p>
              </motion.div>
            </ElectricBorder>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;