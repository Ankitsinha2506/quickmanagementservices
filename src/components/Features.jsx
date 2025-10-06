import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaCloud,
    FaShieldAlt,
    FaChartLine,
    FaMobileAlt,
    FaUsers,
    FaCog,
    FaHeadset
  } from "react-icons/fa";
  

const features = [
  {
    icon: <FaLaptopCode size={30} className="text-blue-500" />,
    title: "Custom Software Development",
    desc: "Tailored solutions to meet your specific business needs. Agile development ensures fast delivery and flexibility, with scalable applications for long-term growth.",
  },
  {
    icon: <FaCloud size={30} className="text-blue-500" />,
    title: "Cloud Services & Management",
    desc: "Cloud migration, infrastructure setup, and continuous monitoring for cost-efficient, secure, and scalable cloud solutions.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-500" />,
    title: "Cybersecurity & Compliance",
    desc: "Protect your systems and sensitive data from cyber threats. Regular audits and compliance with industry standards using advanced security protocols.",
  },
  {
    icon: <FaChartLine size={30} className="text-blue-500" />,
    title: "Data Analytics & BI",
    desc: "Transform raw data into actionable insights. Business Intelligence dashboards and predictive analytics help anticipate trends and opportunities.",
  },
  {
    icon: <FaCog size={30} className="text-blue-500" />,
    title: "DevOps & Automation",
    desc: "Continuous integration and delivery (CI/CD), automated testing, and infrastructure as code for reliable and faster release cycles.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-blue-500" />,
    title: "Mobile & Web Applications",
    desc: "Responsive, high-performance web applications and custom mobile apps for iOS and Android with intuitive UI/UX design.",
  },
  {
    icon: <FaUsers size={30} className="text-blue-500" />,
    title: "IT Consulting & Strategy",
    desc: "Expert guidance on technology adoption and digital transformation, roadmap planning aligned with business objectives, maximizing ROI.",
  },
  {
    icon: <FaHeadset size={30} className="text-blue-500" />,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock technical support with regular updates, patching, and performance monitoring to minimize downtime and ensure business continuity.",
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
          Our Features for IT Companies
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

        {/* Feature Cards Grid */}
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
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
