import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "IT Consulting",
    description: "Strategic IT planning and advisory services that align technology investments with your business goals, improve efficiency, and drive digital transformation.",
    image: "https://i.pinimg.com/1200x/4a/2c/88/4a2c8848704a58a5df346cc19e25593a.jpg",
  },
  {
    id: 2,
    title: "Cloud Solutions & Migration",
    description: "Comprehensive cloud strategy, migration, and management services to optimize scalability, reduce costs, and enhance data accessibility across platforms like AWS, Azure, and Google Cloud.",
    image: "https://i.pinimg.com/736x/ef/76/c9/ef76c963cfcaefc87bcbd2c89ec83417.jpg",
  },
  {
    id: 3,
    title: "Cybersecurity & Network Protection",
    description: "Robust cybersecurity solutions including threat detection, firewall implementation, vulnerability assessments, and network security to protect your critical data and infrastructure.",
    image: "https://i.pinimg.com/1200x/da/5a/5f/da5a5fabbae6b78453d5687b1f817d09.jpg",
  },
  {
    id: 4,
    title: "Managed IT Services",
    description: "Proactive monitoring, IT support, infrastructure management, and maintenance to ensure seamless business operations with minimized downtime and faster issue resolution.",
    image: "https://i.pinimg.com/736x/ac/db/49/acdb4981cb44c215fc3c358e51fee26e.jpg",
  },
  {
    id: 5,
    title: "Software Development & Modernization",
    description: "Custom software application development, legacy system modernization, and integration services to enhance functionality, security, and user experience.",
    image: "https://i.pinimg.com/736x/cf/f4/46/cff4462d4e344a686bcab3cf0dbb91f2.jpg",
  },
  {
    id: 6,
    title: "Data & Analytics",
    description: "Data strategy, advanced analytics, and business intelligence solutions that empower data-driven decision-making and unlock actionable insights.",
    image: "https://i.pinimg.com/1200x/1e/95/30/1e9530694cfcc1d368a95d2b3056f69d.jpg",
  },
  {
    id: 7,
    title: "IT Infrastructure Management",
    description: "End-to-end management of IT hardware, servers, networks, and cloud infrastructure to ensure high availability, performance, and scalability.",
    image: "https://i.pinimg.com/1200x/5d/46/76/5d46761d4f358e389108f2d6fe1eff80.jpg",
  },
  {
    id: 8,
    title: "IT Support & Helpdesk",
    description: "Comprehensive technical support and troubleshooting services to quickly address IT issues, helping your teams stay productive and focused.",
    image: "https://i.pinimg.com/736x/6d/64/80/6d6480289cfd2355a43f2544c9443702.jpg",
  }
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
