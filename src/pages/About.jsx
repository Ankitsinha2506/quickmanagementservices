import AboutHero from "../components/AboutHero";
import StorySection from "../components/StorySection";
import MethodologyCard from "../components/MethodologyCard";
import ValueCard from "../components/ValueCard";
import StatsSection from "../components/StatsSection";
import TeamCard from "../components/TeamCard";

import { FaHandshake, FaLightbulb, FaAward, FaUsers, FaChartLine } from "react-icons/fa";
import img from "../assets/Service/businessconsulting.jpg";
import teamImg from "../assets/Service/marketanalysis.webp";

const About = () => {
  const values = [
    { icon: <FaHandshake />, title: "Integrity", desc: "Honesty and ethics in all our decisions." },
    { icon: <FaLightbulb />, title: "Innovation", desc: "Creative solutions for forward-thinking businesses." },
    { icon: <FaAward />, title: "Excellence", desc: "Delivering precision and professionalism." },
    { icon: <FaUsers />, title: "Collaboration", desc: "Building strong partnerships for success." },
  ];

  const methodology = [
    { icon: <FaChartLine />, title: "Analyze", desc: "Tailored analysis to maximize results." },
    { icon: <FaLightbulb />, title: "Strategy", desc: "Hands-on execution and guidance." },
    { icon: <FaAward />, title: "Result", desc: "Helping businesses succeed with measurable outcomes." },
  ];

  const stats = [
    { count: "100+", label: "Successful Projects" },
    { count: "50", label: "Professionals" },
    { count: "95%", label: "Client Satisfaction" },
    { count: "10+", label: "Years Experience" },
  ];

  const team = [
    { name: "Rajesh Kumar", role: "CEO & Founder", img: teamImg },
    { name: "Priya Sharma", role: "Financial Director", img: teamImg },
    { name: "Amit Verma", role: "Operations Manager", img: teamImg },
    { name: "Neha Patel", role: "Marketing Specialist", img: teamImg },
  ];

  const storyParagraphs = [
    "Quick Management Services was founded in 2010 with a simple mission: to help businesses achieve their full potential through expert management solutions.",
    "What started as a small consulting firm has grown into a comprehensive management services company serving clients across multiple industries.",
    "Our team of experienced professionals brings diverse expertise in business strategy, financial management, operations, and market analysis to deliver tailored solutions that drive results.",
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <AboutHero />

      {/* Our Story */}
      <StorySection title="Our Story" paragraphs={storyParagraphs} img={img} />

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Our approach ensures consistent results.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodology.map((item, i) => (
            <MethodologyCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              delay={i * 0.2}
              className="hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Principles that guide everything we do.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <ValueCard
              key={i}
              icon={val.icon}
              title={val.title}
              desc={val.desc}
              delay={i * 0.2}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Meet the experts behind Quick Management Services</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <TeamCard
              key={i}
              name={member.name}
              role={member.role}
              img={member.img}
              delay={i * 0.2}
              className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
