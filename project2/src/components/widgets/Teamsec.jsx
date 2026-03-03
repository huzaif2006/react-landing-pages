
import TeamCard from "../shared/Teamcard";

const MeetTeam = () => {
  const teamMembers = [
    { 
      name: "Alex ", 
      role: "BeeKeeper", 
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-model-sexy-man-dressed-tshirt-jeans-fashion-male-isolated-blue-wall-studio_158538-26731.jpg" 
    },
    { 
      name: "Leon M. Walker", 
      role: "BeeKeeper", 
      image: "https://cdn.pixabay.com/photo/2022/08/20/11/59/african-man-7398921_1280.jpg" 
    },
    { 
      name: "Sade B. Griggs", 
      role: "BeeKeeper", 
      image: "https://img.freepik.com/free-photo/lifestyle-ecofriendly-person_23-2149125174.jpg?semt=ais_hybrid&w=740&q=80" 
    }
  ];

  return (
    <section className="py-24 px-10 bg-white flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-red-900 mb-4">Meet The Team</h2>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-14">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>

      {/* Read More Button */}
      <button className="bg-red-800 text-white px-10 py-3 rounded-md text-lg font-medium hover:bg-red-900 transition shadow-md">
        Read More
      </button>
    </section>
  );
};

export default MeetTeam;