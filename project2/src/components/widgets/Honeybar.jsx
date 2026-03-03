
import ProductCard from "../shared/Productcard";

const HoneyBar = () => {
  const products = [
    { name: "Wild Honey", price: "295", reviews: "306", image: "https://png.pngtree.com/png-clipart/20241026/original/pngtree-rustic-honey-jar-png-image_16511404.png" },
    { name: "Ginger Honey", price: "295", reviews: "306", image: "https://png.pngtree.com/png-clipart/20250428/original/pngtree-sealed-jar-of-golden-honey-labeled-and-neatly-packaged-png-image_20882705.png" },
    { name: "Sulai Honey", price: "295", reviews: "306", image: "https://png.pngtree.com/png-vector/20250612/ourmid/pngtree-a-jar-of-pure-honey-png-image_16527807.png" },
    { name: "Wild Honey", price: "295", reviews: "306", image: "https://purepng.com/public/uploads/large/purepng.com-honey-jarbottle-food-glass-object-pot-honey-jar-941524620818s80mx.png  " }
  ];

  return (
    <section className="py-20 px-10 bg-gray-50 flex flex-col items-center">
      {/* Header Content */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-red-900 mb-4">Honey Bar</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mb-12">
        {products.map((item, index) => (
          <ProductCard 
            key={index}
            name={item.name}
            price={item.price}
            reviews={item.reviews}
            image={item.image}
          />
        ))}
      </div>

      {/* Bottom Button */}
      <button className="bg-red-800 text-white px-12 py-3 rounded-md text-lg font-medium hover:bg-red-900 transition shadow-md">
        View All
      </button>
    </section>
  );
};

export default HoneyBar;