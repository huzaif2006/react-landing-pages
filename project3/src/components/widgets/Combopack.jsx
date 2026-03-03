import React from 'react';

const ComboPack = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[500px]">
        
        {/* Left Image Section */}
        <div className="hidden md:block h-64 md:h-auto overflow-hidden">
          <img 
            src="https://www.jbsaeedstudio.com/cdn/shop/collections/Faux_Plants_Flowers_Trees_Sub_Category.jpg?crop=center&height=1200&v=1732189026&width=1200" 
            alt="Green potted plant" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Content Section (Dark Green) */}
        <div className="bg-[#2D4628] flex flex-col justify-center items-center text-center p-10 lg:p-16 text-white space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Indoor Plants <br /> Combo Pack
          </h2>
          
          <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-[#FFB800] hover:bg-[#E6A600] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md">
            Shop Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block h-64 md:h-auto overflow-hidden">
          <img 
            src="https://m.media-amazon.com/images/I/81QeUQE3pbL._AC_UF894,1000_QL80_.jpg" 
            alt="Cactus and ceramics" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ComboPack;