
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10">
      {/* Newsletter Signup Box */}
      <div className="mx-6 lg:mx-20 bg-[#913131] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side: Image with Border */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className=" p-2  ">
             <img 
              src="https://pngimg.com/d/honey_PNG86282.png" 
              alt="Honey bowl" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full lg:w-2/3 text-white">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">News Letter Sign Up</h2>
          <p className="text-sm lg:text-base opacity-90 mb-8 max-w-2xl leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
            et dolore magnam aliquam quaerat voluptatem dolores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border border-white/50  px-4 py-3 w-full sm:w-80 outline-none placeholder:text-white/70"
            />
            <button className="bg-white text-[#913131] px-8 py-3 font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="px-6 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Copyright */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold text-orange-900 mb-10">BeeAwesome</h3>
          <p className="text-gray-600 text-sm">
            © 2022 Qode Interactive All Rights Reserved
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#913131] font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-[#913131] font-serif text-xl mb-6">Product</h4>
          <ul className="space-y-3 text-gray-700">
            <li>Wild Honey</li>
            <li>Sulai Honey</li>
            <li>Ginger Honey</li>
            <li>Wild Honey</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-[#913131] font-serif text-xl mb-6">Resources</h4>
          <ul className="space-y-3 text-gray-700">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-[#913131] font-serif text-xl mb-6">Get In Touch</h4>
          <div className="flex space-x-4 text-white">
             <div className="bg-[#913131] p-2 rounded cursor-pointer hover:bg-red-900"><FaFacebook /></div>
             <div className="bg-[#913131] p-2 rounded cursor-pointer hover:bg-red-900"><FaInstagram /></div>
             <div className="bg-[#913131] p-2 rounded cursor-pointer hover:bg-red-900">
              <FaXTwitter /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;