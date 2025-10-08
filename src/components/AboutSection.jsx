import { motion } from "framer-motion";

  const statsData = [
    { count: "20+", label: "Courses" },
    { count: "50K+", label: "Students" },
    { count: "150+", label: "Trainers" },
    { count: "25K+", label: "Placed" },
    { count: "4.8+", label: "Ratings" },
    { count: "850+", label: "Recruiters" },
  //   { count: "24/7", label: "Support" },
  //   { count: "50+", label: "Workshops" },
  //   { count: "6", label: "Branches" },
  //   { count: "100%", label: "Placement" },
  ];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Text Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About Quick Management Services
          </h2>
          <div className="text-gray-700 space-y-4 text-justify max-w-3xl mx-auto">
            <p>
              At Quick Management Services (QMS), we specialize in empowering
              businesses to achieve their full potential through strategic
              planning, operational excellence, and innovative solutions.
            </p>
            <p>
              With over a decade of experience across diverse industries, we
              have successfully guided startups, SMEs, and large enterprises to
              streamline operations, enhance productivity, and increase
              profitability.
            </p>
            <p>
              At QMS, we believe in building long-term relationships with our
              clients. We focus on transparency, measurable results, and
              continuous support to help businesses succeed.
            </p>
            <p>
              Whether you’re looking to optimize your operations or expand into
              new markets, QMS is your trusted partner for growth and success.
            </p>
          </div>

          <a
            href="/about"
            className="mt-6 inline-block text-blue-600 font-medium hover:underline"
          >
            Learn more about us
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white w-36 sm:w-40 md:w-44 lg:w-48 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg text-center transition-all duration-300 border-t-4 border-blue-500"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.07 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-1">
                  {stat.count}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
