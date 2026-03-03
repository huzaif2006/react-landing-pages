

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm flex flex-col items-center text-center transition-transform hover:scale-102 duration-300 min-w-[200px]">
      {/* Product Image */}
      <img src={image} alt={name} className="h-40 object-contain mb-4" />
      
      {/* Star Rating (Static 4/5 for UI) */}
      <div className="flex text-[#FFB800] text-xs mb-2">
        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
      </div>

      {/* Details */}
      <h3 className="text-gray-600 font-medium text-sm">{name}</h3>
      <p className="text-[#2D4628] font-bold mt-1">${price}</p>
    </div>
  );
};

export default ProductCard;