import { IoIosArrowDown } from "react-icons/io";
import Button from "../shared/Button"

function Sidebar() {
  return (
    <section className='h-[70vh] w-[70vw] bg-[#ffd5d5] fixed top-[16vh] left-[15vw] z-50 lg:hidden rounded-2xl flex flex-col justify-center  items-center gap-15 p-3'>
        <ul className="flex flex-col gap-5">
            <li><a href="" className="flex items-center gap-1 font-semibold text-gray-600">Products <IoIosArrowDown /></a></li>
            <li><a href="" className="flex items-center gap-1 font-semibold text-gray-600">Resources <IoIosArrowDown /></a></li>
            <li><a href="" className="font-semibold text-gray-600">Enterprices</a></li>
            <li><a href="" className="font-semibold text-gray-600">Pricing</a></li>
        </ul>
        <ul className="flex flex-col sm:flex-row items-center gap-2">
            <li><a href="" ><Button text="Login"/></a></li>
            <li><a href=""> <Button text="Get started"/></a></li>
            
        </ul>


    </section>
  )
}

export default Sidebar