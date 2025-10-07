    import { useParams } from "react-router-dom";
import servicesInfo from "./servicesInfo";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesInfo.find((item) => item.id === parseInt(id));

  if (!service) return <div className="text-center py-20">Service not found</div>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-gray-700 mb-6">{service.details.overview}</p>

            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {service.details.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600">
              {service.details.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
