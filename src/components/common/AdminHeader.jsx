import { BiSolidMessageRounded } from "react-icons/bi";
import { BiSolidBellRing } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold"></div>
      <nav>
        <ul className="flex justify-center items-center space-x-4">
          <li className="w-8 h-8 rounded-full flex justify-center items-center 
          hover:cursor-pointer hover:bg-gray-700 transition-all">
            <FaTasks size={20}/>
          </li>
          <li className="w-8 h-8 rounded-full flex justify-center items-center 
          hover:cursor-pointer hover:bg-gray-700 transition-all">
            <BiSolidBellRing size={20}/>
          </li>
          <li className="w-8 h-8 rounded-full flex justify-center items-center 
          hover:cursor-pointer hover:bg-gray-700 transition-all">
            <BiSolidMessageRounded size={20}/>
          </li>
          <li>
            <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>

            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminHeader