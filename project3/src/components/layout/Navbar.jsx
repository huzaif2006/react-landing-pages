import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 md:px-20 bg-transparent border-b border-gray-200/20">
      {/* Logo */}
      <div className="text-4xl font-bold text-green-900">
        Plant
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-green-700 transition text-[16px]">Home</a>
        <a href="#" className="hover:text-green-700 transition text-[16px]">Collection</a>
        <a href="#" className="hover:text-green-700 transition text-[16px]">Shop</a>
        <a href="#" className="hover:text-green-700 transition text-[16px]">About Us</a>
        <a href="#" className="hover:text-green-700 transition text-[16px]">Contact Us</a>
      </div>
      <button className="md:hidden text-black text-xl cursor-pointer">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;