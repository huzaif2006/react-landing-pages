

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="border border-green-900/20 rounded-xl p-8 flex flex-col items-center text-center bg-transparent transition-all hover:shadow-lg hover:bg-white/20">
      {/* Icon Placeholder - Using an Emoji or SVG for simplicity */}
      <div className="text-4xl text-[#2D4628] mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#2D4628] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <button className="bg-[#FFB800] hover:bg-[#E6A600] text-white px-6 py-2 rounded-full text-sm font-semibold transition">
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;