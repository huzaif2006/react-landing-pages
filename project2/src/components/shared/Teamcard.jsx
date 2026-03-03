

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="bg-[#f9f8f6] rounded-2xl shadow-xl overflow-hidden flex flex-col items-center pb-8 transition-transform ">
      {/* Team Member Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover rounded-t-2xl mb-6" 
      />
      
      {/* Details */}
      <h3 className="text-xl font-serif text-gray-800 mb-1">{name}</h3>
      <p className="text-red-800 font-medium text-sm uppercase tracking-wide">{role}</p>
    </div>
  );
};

export default TeamCard;