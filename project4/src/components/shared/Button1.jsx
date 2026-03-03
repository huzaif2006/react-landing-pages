import React from "react";

const Button1 = ({ text = "Button" }) => {
  return (
    <button
      className="
        /* Layout & Sizing */
       px-5 md:px-8 py-3 rounded-xl 
        
        /* Typography */
        text-white font-semibold text-[14px] md:text-base
        
        /* Colors & Gradient */
        bg-linear-to-r from-[#291ef8] via-[#f9047f] to-[#fb5b05]
        bg-size-[200%_auto]
        
        /* Effects & Transitions */
        shadow-lg shadow-purple-500/40
        transition-all duration-300 ease-in-out
        cursor-pointer
        
        /* Active/Click State */
        active:scale-95
      "
    >
      {text}
    </button>
  );
};

export default Button1;
