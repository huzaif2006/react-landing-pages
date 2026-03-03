  
import Navbar from "../layout/Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F3EFE0] overflow-hidden">
      {/* Background Shapes (Decorative Circles) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#E5E1D1] opacity-50"></div>
         <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-[#DED9C4] opacity-30"></div>
      </div>

      {/* Dark Green Right Panel (Responsive hidden on small screens) */}
      

      <Navbar />

      <div className="relative z-10 container mx-auto px-10 md:px-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#2D4628] leading-tight">
            Various Indoor <br /> Plant Shop
          </h1>
          
          <p className="italic text-xl text-gray-600 font-serif">
            Get Up To 30% Discount
          </p>

          <p className="text-gray-700 max-w-lg leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero 
            et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
            torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <button className="bg-[#FFB800] hover:bg-[#E6A600] text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300">
            Explore our services
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
          <img 
            src="/hero.png" 
            alt="Potted Indoor Plant" 
            className="w-full max-w-md drop-shadow-2xl z-20"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;