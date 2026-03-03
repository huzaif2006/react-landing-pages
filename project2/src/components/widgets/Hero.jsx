
import Navbar from "../layout/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";
const Hero = () => {
  const navLinks = ["Home", "About us", "Shop", "Contact"];

  return (
    <div className="relative min-height-screen bg-white overflow-hidden">
      {/* Import Navbar */}
      <Navbar logoText="BeeAwesome" links={navLinks} />

      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:pl-20 py-12 z-10">
          <h1 className="text-5xl lg:text-6xl font-serif text-orange-900 leading-tight mb-6">
            Do you want your honey?<br />
            Grab a bottle.
          </h1>
          <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <button className="bg-orange-900 text-white w-fit px-10 py-3 rounded-md text-lg font-medium hover:bg-orange-800 transition mb-20">
            Buy Now
          </button>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[2px] bg-orange-900"></div>
            <div className="flex space-x-4 text-orange-900 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />

              <i className="fab fa-instagram cursor-pointer"></i>
              <i className="fab fa-twitter cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Right Curved Image Side */}
        <div className="relative flex-1 bg-orange-900 min-h-[500px] lg:min-h-full rounded-l-[500px] flex items-center justify-center">
          {/* Main Product Image Container */}
          <div className="relative w-3/4">
             {/* Note: Replace 'honey-image.png' with your actual image path */}
            <img 
              src="https://pngimg.com/d/honey_PNG86281.png" 
              alt="Honey and dipper" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;