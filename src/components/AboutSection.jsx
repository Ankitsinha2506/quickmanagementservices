import { motion } from "framer-motion";

const statsData = [
    { count: "20+", label: "Courses" },
    { count: "50K+", label: "Students" },
    { count: "150+", label: "Trainers" },
    { count: "25K+", label: "Placed" },
    { count: "4.8+", label: "Ratings" },
    { count: "850+", label: "Recruiters" },
    { count: "24/7", label: "Support" },
    { count: "50+", label: "Workshops" },
    { count: "6", label: "Branches" },
    { count: "100%", label: "Placement" },
];

const AboutSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Text Section */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                >
                    <h2 className="text-4xl font-bold mb-4">About Quick Management Services</h2>
                    <p className="text-gray-700 mb-3">
                        At Quick Management Services (QMS), we specialize in empowering businesses to achieve their full potential through strategic planning, operational excellence, and innovative solutions. Our team of experts partners with clients to identify opportunities, optimize processes, and implement effective strategies that drive sustainable growth.
                    </p>
                    <p className="text-gray-700 mb-5">
                        With over a decade of experience across diverse industries, we have successfully guided startups, SMEs, and large enterprises to streamline operations, enhance productivity, and increase profitability. Our holistic approach combines business consulting, financial planning, market analysis, and technology solutions, ensuring that every client receives tailored, actionable insights.
                    </p>
                    <p className="text-gray-700 mb-5">
                        At QMS, we believe in building long-term relationships with our clients. By focusing on transparency, measurable results, and continuous support, we help businesses navigate challenges, seize new opportunities, and achieve excellence in a rapidly evolving marketplace.
                    </p>
                    <p className="text-gray-700 mb-5">
                        Whether you’re looking to optimize your operations, implement innovative technologies, or expand into new markets, QMS is your trusted partner for growth, efficiency, and lasting success.
                    </p>




                    <a href="/about" className="text-blue-600 font-medium hover:underline">
                        Learn more about us
                    </a>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {statsData.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow text-center"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-bold mb-1">{stat.count}</h3>
                            <p className="text-gray-500">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
