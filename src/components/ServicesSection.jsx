import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import servicesInfo from "./servicesInfo";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
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
          {servicesInfo.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, type: "spring", damping: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
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
