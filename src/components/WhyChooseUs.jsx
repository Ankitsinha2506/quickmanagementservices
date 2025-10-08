import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    "Experienced IT professionals",
    "Client-focused approach",
    "Innovative and reliable solutions",
    "Timely delivery and support",
  ];

  const borderColors = ["border-l-blue-500", "border-l-green-500", "border-l-purple-500", "border-l-yellow-500"];

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why <span className="text-blue-600">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative flex items-start space-x-4 bg-white p-6 pl-5 rounded-2xl shadow-lg border-l-4 ${borderColors[index % borderColors.length]} transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-full">
                <FaCheckCircle className="text-white" size={24} />
              </div>
              <p className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;