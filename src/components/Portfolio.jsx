import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Matrimonial Website",
    description:
      "A modern matrimonial platform with user profiles, matchmaking algorithms, and secure chat features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s",
    link: "#",
  },
  {
    id: 2,
    title: "Educational Website",
    description:
      "An interactive platform offering online courses, live classes, and quizzes, with progress tracking and certificates to enhance student learning.",
    image:
      "https://i.pinimg.com/1200x/e5/7e/32/e57e3206fa458c41ffe495f8823c4c58.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "E-Learning Website",
    description:
      "An interactive course website with video lectures, quizzes, and certificates.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNw2O22OG43NXtADb1j-qyccTd95wUuhz5zw&s",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-100" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Portfolio</h2>
          <p className="text-gray-600 text-lg">A showcase of our latest projects.</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
