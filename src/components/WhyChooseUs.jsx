import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    "Experienced IT professionals",
    "Client-focused approach",
    "Innovative and reliable solutions",
    "Timely delivery and support",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={28} />
              <p className="text-lg font-semibold text-gray-800">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
