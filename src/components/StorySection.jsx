import { motion } from "framer-motion";

const StorySection = ({ title, paragraphs, img }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-300">{p}</p>
          ))}
        </motion.div>

        {/* Image */}
        {img && (
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="About Story" className="rounded-lg shadow-lg" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default StorySection;
