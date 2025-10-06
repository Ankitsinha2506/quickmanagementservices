import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Business Consulting",
    description: "Expert strategies to streamline operations, boost growth, and stay ahead in today’s competitive market.",
    image: "/assets/Service/Business Consulting.jpg",
  },
  {
    id: 2,
    title: "Financial Planning",
    description: "Smart financial roadmaps designed to optimize resources, reduce risks, and maximize profitability.",
    image: "/assets/Service/Financial Planning.jpg",
  },
  {
    id: 3,
    title: "Market Analysis",
    description: "Comprehensive market insights that identify opportunities and give your business a winning edge.",
    image: "/assets/Service/Market Analysis.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Tailored solutions that empower your business to achieve more
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, type: "spring", damping: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
