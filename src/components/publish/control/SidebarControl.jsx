import React from 'react'

const SidebarControl = ({data}) => {
  return (
    <div className='py-1'>
       <ul className='flex flex-col gap-3 items-start pt-5'>
            {
                data.map((value)=>(
                    <li key={value.id}
                        className='text-xl hover:cursor-pointer'
                    >{value.name}</li>
                ))
            }
       </ul>
    </div>
  )
}

export default SidebarControl