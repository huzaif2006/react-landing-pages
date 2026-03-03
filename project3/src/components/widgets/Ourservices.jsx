import ServiceCard from "../shared/Service_card";
import { RiPlantFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { MdShower } from "react-icons/md";
import { MdOutlineGrass } from "react-icons/md";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon:<RiPlantFill /> ,
      title: "Designing & Planting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet."
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "Lawn & Garden Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet."
    },
    {
      id: 3,
      icon: <MdShower />,
      title: "Watering Garden",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet."
    },
    {
      id: 4,
      icon:<MdOutlineGrass />,
      title: "Grass Carpets",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac liquet."
    }
  ];

  return (
    <section className="bg-[#F3EFE0] py-20 px-10">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D4628] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;