
import ProductCard from "../shared/Card";

const TrendingProducts = () => {
  // Mock data for the products
  const products = [
    { id: 1, name: "Dieffenbachia", price: "20.00", img: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-home-plant-in-pot-cutout-png-image_11899655.png" },
    { id: 2, name: "Dieffenbachia", price: "20.00", img: "https://png.pngtree.com/png-clipart/20240908/original/pngtree-artificial-plant-png-image_15967747.png" },
    { id: 3, name: "Dieffenbachia", price: "20.00", img: "https://static.vecteezy.com/system/resources/thumbnails/043/974/453/small/a-tall-green-plant-is-standing-in-a-blue-pot-png.png" },
    { id: 4, name: "Dieffenbachia", price: "20.00", img: "https://png.pngtree.com/png-vector/20250120/ourmid/pngtree-modern-indoor-artificial-plant-decor-png-image_15286769.png" },
    { id: 5, name: "Dieffenbachia", price: "20.00", img: "https://png.pngtree.com/png-vector/20250521/ourmid/pngtree-decorative-artificial-plants-in-a-lovely-planter-png-image_16343040.png" },
  ];

  return (
    <section className="bg-[#F3EFE0]/50 py-30 px-10">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#2D4628] text-center mb-8">
          Trending Products
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <button className="border border-[#2D4628] text-[#2D4628] px-5 sm:px-8 py-2 rounded-full text-[12px] font-medium hover:bg-[#FFB800] hover:border-none hover:text-white transition">
            Featured
          </button>
          <button className="border border-[#2D4628] text-[#2D4628] px-5 sm:px-8 py-2 rounded-full text-sm font-medium  hover:bg-[#FFB800] hover:border-none hover:text-white transition">
            Bestseller
          </button>
          <button className="border border-[#2D4628] text-[#2D4628] px-5 sm:px-8 py-2 rounded-full text-sm font-medium  hover:bg-[#FFB800] hover:border-none  hover:text-white transition">
            Latest
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.img} // Replace with actual image URLs
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;