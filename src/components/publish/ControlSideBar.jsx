import SidebarControl from './control/SidebarControl'
import SlideControl from './control/SlideControl'
import SideNav from '../../constants/SideNav'
const ControlSideBar = () => {
  return (
    <div className='container mx-auto flex items-start'>
        <div className='w-1/6'>
            <SidebarControl data={SideNav}/>
        </div>
        <div className='w-5/6'>
            <SlideControl/>
        </div>
    </div>
  )
}

export default ControlSideBar