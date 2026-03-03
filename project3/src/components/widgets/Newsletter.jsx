import React from 'react';

const Newsletter = () => {
  return (
    <section className="relative bg-[#F3EFE0] py-24 px-6 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E5E1D1] rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E5E1D1] rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D4628] mb-6">
          Newsletter Sign Up
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 px-4 md:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute.
        </p>

        {/* Input & Button Container */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center max-w-xl mx-auto overflow-hidden rounded-full shadow-md">
          <input 
            type="email" 
            placeholder="Enter Your Email ....." 
            className="flex-grow bg-[#FDF8E9] px-8 py-4 outline-none text-gray-700 placeholder-gray-400 italic"
          />
          <button className="bg-[#FFB800] hover:bg-[#E6A600] cursor-pointer text-white px-10 py-4 font-semibold transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;