import React from 'react';

const DiscountBanner = () => {
  return (
    <section className="relative bg-[#2D4628] py-20 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Left Plant Image */}
        <div className="hidden md:block w-1/4">
          <img 
            src="https://png.pngtree.com/png-vector/20231130/ourmid/pngtree-a-beauty-plant-in-white-pot-on-background-png-image_10785997.png" 
            alt="Left Plant" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="w-full md:w-2/4 text-center text-white space-y-6 z-10">
          <h2 className="text-6xl md:text-8xl font-serif italic mb-4">
            50% OFF
          </h2>
          
          <p className="text-sm md:text-base text-gray-200 max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="pt-4">
            <button className="bg-[#FFB800] hover:bg-[#E6A600] text-white px-10 py-3 rounded-full font-bold shadow-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Plant Image */}
        <div className="hidden md:block w-1/4">
          <img 
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-home-plant-in-pot-cutout-png-image_11899655.png" 
            alt="Right Plant" 
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default DiscountBanner;