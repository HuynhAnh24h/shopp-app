import adminNav from "../../constants/AdminNav"
import { NavLink } from "react-router-dom"
const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 relative">
      <div className="text-lg font-bold mb-6 text-center">Shop Admin</div>
      <div className="mb-6 ">
        <ul className="flex flex-col space-y-4">
          { adminNav.map((value)=>(
            <li className="mb-2" key={value.id}>
                <NavLink to={value.path} className={({ isActive }) => isActive 
                  ? "text-white bg-gray-700 flex items-center font-bold text-md px-5 py-2 rounded-sm transition-all" 
                  : "hover:text-white hover:bg-gray-700 flex items-center font-bold text-md px-5 py-2 rounded-sm transition-all"}>
                    {value.icon}
                    {value.name}
                </NavLink>
            
            </li>
           ))}
        </ul>
      </div>
      <div className="absolute bottom-5 left-3 right-3">
        <button className="w-full bg-gray-500 rounded-md px-3 py-3 
                    transition-all font-bold
                    hover:cursor-pointer hover:bg-red-800 "
        >Đăng xuất</button>
      </div>
    </div>
  )
}

export default AdminSidebar