import { NavLink } from "react-router-dom"
import HeaderNav from "../../constants/HeaderNav"
const Header = () => {
  return (
    <div className='w-full shadow-sm'>
      <div className='container mx-auto py-3 flex justify-between items-center'>
        <div className='text-lg font-bold'>
            Shopp-App
        </div>
        <div className='flex justify-center items-center gap-3'>
          {
            HeaderNav.map((value)=>(
              <NavLink to={value.path} key={value.id}> 
                  {value.name}
              </NavLink>
            ))
          }
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Header