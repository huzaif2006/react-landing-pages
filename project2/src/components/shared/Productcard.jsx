
const ProductCard = ({ image, name, price, reviews }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all ease-in tracking-tighter hover:scale-105">
      {/* Product Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-40 h-48 object-contain mb-4 drop-shadow-xl" 
      />
      
      {/* Product Details */}
      <h3 className="text-xl font-serif text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-500 font-semibold text-sm mb-3">From Rs. {price}</p>
      
      {/* Star Rating */}
      <div className="flex items-center  space-x-1">
        <div className="flex text-red-800 text-lg">
          {/* Simple stars using unicode or icons */}
          {"★★★★★"}
        </div>
        <span className="text-xs text-gray-500">{reviews} Reviews</span>
      </div>
    </div>
  );
};

export default ProductCard;