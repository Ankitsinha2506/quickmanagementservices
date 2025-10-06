import ServiceCard from "../components/ServiceCard";

import img from "../assets/Service/businessconsulting.jpg"
import img1 from "../assets/Service/financialplanning.jpg"
import img2 from "../assets/Service/marketanalysis.webp"
import AboutHero from "../components/AboutHero";

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
    // ...add remaining services
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
    <div>
      <ServiceHero />

      <ServicesIntro />

      {/* Services Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, i) => (
            <ServiceCard key={service.id} {...service} delay={i * 0.2} />
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <ProcessStepCard key={i} stepNumber={i + 1} {...step} delay={i * 0.2} />
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProcessSteps.map((step, i) => (
            <DevProcessCard key={i} stepNumber={i + 1} {...step} delay={i * 0.2} />
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
