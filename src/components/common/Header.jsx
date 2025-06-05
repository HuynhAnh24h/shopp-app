import { NavLink } from "react-router-dom"
import HeaderNav from "../../constants/HeaderNav"
import { IoSearchSharp } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"


const Header = () => {
  return (
    <div className='w-full shadow-sm'>
      <div className='container mx-auto py-3 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          Shopp-App
        </div>
        <div className='flex justify-center items-center gap-3'>
          {
            HeaderNav.map((value) => (
              <NavLink to={value.path} key={value.id}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-md border-b-2 border-black transition duration-300"
                    : "font-medium text-md hover:text-gray-500 hover:border-b-2 hover:border-gray-500  transition duration-300"
                }
              >
                {value.name}
              </NavLink>
            ))
          }
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="bg-gray-200 relative rounded-sm shadow-sm w-full flex px-3">
            <input type="text" className="outline-none w-full px-2 py-2 inline-block text-md text-gray-600"
              placeholder="What are ou looking for?"
            />
            <button className="text-gray-600">
              <IoSearchSharp size={25} />
            </button>
          </div>
          <NavLink className="w-8 h-8 flex justify-center items-center text-gray-600 hover:rounded-full hover:text-black duration-300 hover:shadow-sm transition-all
                p-1
              ">
            <FaRegHeart size={20} />
          </NavLink>
          <NavLink className="w-8 h-8 flex justify-center items-center text-gray-600 hover:rounded-full hover:text-black duration-300 hover:shadow-sm transition-all
                p-1
              ">
            <IoCartOutline size={40} />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header