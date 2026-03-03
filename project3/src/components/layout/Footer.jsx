import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2D4628] py-8 px-10 md:px-20 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-white text-xl">
          <a href="#" className="hover:text-[#FFB800] transition-colors">
            <i className="fab fa-facebook-f"></i> {/* Using font-awesome style names */}
            
            <span className="text-lg"><FaFacebook/></span> 
          </a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">
            <span className="text-lg"><FaTwitter/></span>
          </a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">
            <span className="text-lg"><FaInstagram/></span>
          </a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">
            <span className="text-lg"><FaPinterest/></span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/90 text-sm font-medium">
          <a href="#" className="hover:text-[#FFB800] transition-colors">Home</a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">Collection</a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">Shop</a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#FFB800] transition-colors">Contact Us</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;