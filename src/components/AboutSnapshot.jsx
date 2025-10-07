const AboutSnapshot = () => {
    return (
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left: Text content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Quick Management Services</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Quick Management Services leverages cutting-edge technology, deep industry expertise, and innovation to empower businesses to unlock their full potential. We specialize in delivering tailored IT solutions, strategic consulting, and managed services designed to accelerate growth, streamline operations, and enhance digital transformation. Our dedicated team combines innovation with hands-on experience to help organizations adapt to rapidly evolving markets and technology landscapes, ensuring competitive advantage and long-term success.
            </p>
          </div>
          
          {/* Right: Image */}
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/1200x/10/bd/ce/10bdcee5acece5da5ea77a89d61ee653.jpg" 
              alt="About Quick Management Services" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSnapshot;
  