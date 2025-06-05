import SidebarControl from './control/SidebarControl'
import SlideControl from './control/SlideControl'
import SideNav from '../../constants/SideNav'
const ControlSideBar = () => {
  return (
    <div className='container mx-auto flex items-center'>
        <div className='w-1/4'>
            <SidebarControl data={SideNav}/>
        </div>
        <div className='w-3/4'>
            <SlideControl/>
        </div>
    </div>
  )
}

export default ControlSideBar