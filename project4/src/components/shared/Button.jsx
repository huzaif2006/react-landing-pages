const NavButton = ({text}) => {
  return (
    <div>
      {/* Outer wrapper provides the gradient 'border' */}
      <button className="relative p-0.5 inline-flex items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-blue-500 hover:to-pink-400 transition-all duration-300">
        
        {/* Inner span provides the button face */}
        <span className="relative px-8 py-3 bg-white rounded-[inherit]  text-gray-600 font-semibold text-sm transition-all duration-300 hover:bg-transparent hover:text-white">
          {text}
        </span>
      </button>
    </div>
  );
};

export default NavButton