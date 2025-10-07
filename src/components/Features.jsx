import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCloud,
  FaCog,
  FaHeadset,
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={30} className="text-blue-600" />,
    title: "Custom Software Development",
    desc: "Tailored solutions to meet your specific business needs. Agile development ensures fast delivery and flexibility, with scalable applications for long-term growth.",
  },
  {
    icon: <FaCloud size={30} className="text-blue-600" />,
    title: "Cloud Services & Management",
    desc: "Comprehensive cloud solutions including strategy, migration, deployment, and ongoing management with expert monitoring and cost optimization.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-600" />,
    title: "Cybersecurity & Compliance",
    desc: "Protect your systems and sensitive data from cyber threats through regular audits, compliance checks, and advanced security protocols.",
  },
  {
    icon: <FaChartLine size={30} className="text-blue-600" />,
    title: "Data Analytics & BI",
    desc: "Transform raw data into insights using analytics, AI, and BI tools. Empower your teams with data-driven decision-making.",
  },
  {
    icon: <FaCog size={30} className="text-blue-600" />,
    title: "DevOps & Automation",
    desc: "Accelerate your development lifecycle with CI/CD automation, infrastructure provisioning, and efficient deployment processes.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-blue-600" />,
    title: "Mobile & Web Applications",
    desc: "Design and develop high-performance, user-centric mobile and web apps with responsive and seamless experiences across devices.",
  },
  {
    icon: <FaUsers size={30} className="text-blue-600" />,
    title: "IT Consulting & Strategy",
    desc: "Define and execute a technology roadmap aligned with your business goals. Optimize IT investments and embrace digital transformation.",
  },
  {
    icon: <FaHeadset size={30} className="text-blue-600" />,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock technical support with proactive monitoring, updates, and performance optimization for business continuity.",
  },
];

// Animation Variants
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
      {/* Animated Background Blobs (Soft Professional Style) */}
      <motion.div
        className="absolute w-80 h-80 bg-blue-200 rounded-full opacity-20 top-[-50px] left-[-50px] blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-indigo-200 rounded-full opacity-20 bottom-[-50px] right-[-50px] blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center mb-12 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover what makes Quick Management Services stand out in delivering exceptional IT solutions.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-100 hover:border-blue-200 p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:bg-gradient-to-b from-white to-blue-50"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-5 p-3 bg-blue-100 rounded-full">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;