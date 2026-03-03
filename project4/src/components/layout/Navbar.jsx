import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "../shared/Button";
import { useState } from "react";
import Sidebar from "./sidebar";
function Navbar() {
  let [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex w-[84vw] lg:w-[70vw] mx-auto border-2 border-[white] items-center justify-between fixed left-[8vw] lg:left-[15vw] top-5 z-10 bg-[#ffd5d575] py-3 px-4 rounded-3xl">
      <a href="">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_1280.png"
          width={50}
          alt=""
          className="animate-[spin_10s_linear_infinite]"
        />
      </a>
      <ul className=" gap-6 hidden lg:flex">
        <li>
          <a
            href=""
            className="flex items-center gap-1 font-semibold text-gray-600"
          >
            Products
            <IoIosArrowDown />{" "}
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 font-semibold text-gray-600"
          >
            Resources
            <IoIosArrowDown />
          </a>
        </li>
        <li>
          <a href="" className="font-semibold text-gray-600">
            Enterprise
          </a>
        </li>
        <li>
          <a href="" className="font-semibold text-gray-600">
            Pricing
          </a>
        </li>
      </ul>
      <ul className=" hidden lg:flex items-center gap-6">
        <li>
          <a href="" className="font-semibold text-gray-600">
            Login
          </a>
        </li>
        <li>
          <a href="">
            <Button text="Get started"/>
          </a>
        </li>
      </ul>

      <button
        className="text-2xl lg:hidden text-gray-600 font-extrabold cursor-pointer"
        onClick={() => setSidebar(!sidebar)}
      >
        {sidebar ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      {sidebar && <Sidebar/>}
    </nav>
  );
}

export default Navbar;
