import React from 'react'

const SidebarControl = ({data}) => {
  return (
    <div className='pt-5 shadow-[rgba(0,0,0,0.5)_10px_5px_4px_0px] border-r-2 border-black'>
       <ul className='flex flex-col gap-3 items-start pt-5'>
            {
                data.map((value)=>(
                    <li key={value.id}
                        className='text-lg'
                    >{value.name}</li>
                ))
            }
       </ul>
    </div>
  )
}

export default SidebarControl