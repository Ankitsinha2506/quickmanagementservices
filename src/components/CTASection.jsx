const CTASection = ({ title, subtitle, buttonText, buttonLink }) => {
    return (
      <section className="py-20 bg-indigo-600 text-white text-center rounded-lg mx-4 md:mx-0">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-lg">{subtitle}</p>
        <a
          href={buttonLink}
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          {buttonText}
        </a>
      </section>
    );
  };
  
  export default CTASection;
  