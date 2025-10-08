import ServiceCard from "../components/ServiceCard";

import img from "../assets/Service/businessconsulting.jpg"
import img1 from "../assets/Service/financialplanning.jpg"
import img2 from "../assets/Service/marketanalysis.webp"
import AboutHero from "../components/AboutHero";
import ServicesSection from '../components/ServicesSection'

import ProcessStepCard from "../components/ProcessStep";
import DevProcessCard from "../components/DevProcessStep";
import CTASection from "../components/CTASection";
import ServiceHero from "../components/ServiceHero";
import ServicesIntro from "../components/ServicesIntro";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Blockchain Services",
      description: "Secure and scalable blockchain solutions.",
      image: img,
    },
    {
      id: 2,
      title: "Big Data Analysis",
      description: "Turn complex data into actionable insights.",
      image: img1,
    },
    {
      id: 3,
      title: "Cloud Computing",
      description: "Reliable and secure cloud infrastructure.",
      image: img2,
    },
  ];

  const processSteps = [
    { title: "Consultation", description: "Understand requirements and goals." },
    { title: "Analysis", description: "Identify right solutions." },
    { title: "Strategy Development", description: "Tailored roadmap." },
    { title: "Implementation", description: "Seamless execution." },
    { title: "Evaluation & Refinement", description: "Continuous optimization." },
  ];

  const devProcessSteps = [
    { title: "Requirement Gathering", description: "Define scope & plan.", image: img },
    { title: "UI/UX Design", description: "Wireframes & prototypes.", image: img1 },
    { title: "Development", description: "Agile & scalable development.", image: img2 },
    { title: "Testing & QA", description: "Performance & security.", image: img },
    { title: "Deployment", description: "Smooth launch.", image: img2 },
    { title: "Maintenance", description: "Updates & support.", image: img1 },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <ServiceHero />

      <ServicesIntro />

      {/* Services Grid */}
      {/* <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesList.map((service, i) => (
            <ServiceCard
              key={service.id}
              {...service}
              delay={i * 0.2}
              className="bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 cursor-pointer"
              titleClass="text-blue-700 dark:text-blue-300 font-semibold text-xl mb-2"
              descClass="text-gray-700 dark:text-gray-300 text-base"
              imgWrapperClass="rounded-t-xl overflow-hidden shadow-md"
              imgClass="object-cover w-full h-48 transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>
      </section> */}

<ServicesSection />
      {/* Process Steps */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 dark:text-blue-300">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <ProcessStepCard
              key={i}
              stepNumber={i + 1}
              {...step}
              delay={i * 0.2}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow transform hover:scale-105 cursor-pointer border-l-4 border-blue-600"
              titleClass="text-blue-600 font-bold text-2xl mb-3"
              descClass="text-gray-700 dark:text-gray-300 text-base"
              stepNumberClass="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 container mx-auto px-6 rounded-xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900 dark:text-blue-300">
          Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {devProcessSteps.map((step, i) => (
            <DevProcessCard
              key={i}
              stepNumber={i + 1}
              {...step}
              delay={i * 0.2}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer flex flex-col"
              imgClass="rounded-lg object-cover w-full h-40 mb-4 shadow-md"
              titleClass="text-blue-700 dark:text-blue-300 font-semibold text-xl mb-2"
              descClass="text-gray-700 dark:text-gray-300 flex-grow"
              stepNumberClass="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-lg shadow-md mb-4"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to transform your business?"
        subtitle="Let’s collaborate to build secure, scalable, and innovative solutions."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;
