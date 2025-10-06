import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Acme Corp",
    message: "QMS transformed our business strategy and helped us achieve exponential growth in record time.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Founder, Tech Solutions",
    message: "The financial planning services were precise, actionable, and delivered measurable results.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "COO, InnovateX",
    message: "Their market analysis insights gave us the competitive edge we were missing.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Hear from businesses who’ve grown with Quick Management Services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, type: "spring", damping: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-800 italic mb-4">"{testimonial.message}"</p>
              <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
              <span className="text-gray-500 text-sm">{testimonial.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
