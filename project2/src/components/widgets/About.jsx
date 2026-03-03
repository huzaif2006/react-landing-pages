
const AboutSection = ({ title, description, buttonText }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-white gap-12">
      
      {/* Left Side: Image with Decorative Background */}
      <div className="relative w-full lg:w-1/2 flex justify-start">
        {/* The Dark Red Decorative Shape */}
        <div className="absolute top-0 left-0 w-[90%] h-full bg-[#913131] rounded-tr-[100px] rounded-br-[100px] -z-10"></div>
        
        {/* Main Image Container */}
        <div className="p-6 w-full max-w-lg">
          <img 
            src="https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Bee hives" 
            className=" rounded-[15px]   md:rounded-tr-[80px] md:rounded-br-[80px]  border-4 border-white shadow-xl w-full object-cover object-top h-[450px]"
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6">
        <h2 className="text-4xl lg:text-5xl font-serif text-[#913131] leading-tight">
          {title}
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {description}
        </p>

        <button className="bg-[#913131] text-white px-10 py-3 rounded-md text-lg font-medium w-fit hover:bg-red-900 transition shadow-lg">
          {buttonText}
        </button>
      </div>

    </section>
  );
};

export default AboutSection;