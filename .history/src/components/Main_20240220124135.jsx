import React, { useState } from 'react'
import Model from './Model'


function Main() {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
    <div className='bg-[#f4eedb] pl-52 pt-40 h-screen'>
        <div className='-z-10'>
            <h1 className=''><span className='text-gray-400 font-extralight text-4xl'>I'M SAMMY AND I'M</span>
            <br /><span className='text-7xl'>frontend developer.</span></h1>
            <button className='mt-20 border-gray-400 border-2 text-gray-400 py-2 px-8 hover:bg-gray-400 hover:text-[#f4eedb]
            transition-all duration-300'
            onClick={() => set}>
                Contact Me</button>
        </div>
        
    </div>
    {
        openModal && <Model /> 
    }
    <Model />
    </div>
  )
}

export default Main