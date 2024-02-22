import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <div className='bg-[#f4eedb]'>
        <div className='flex justify-between items-center'>
            <img src={logo} className="w-1/12" />
            <ul className='flex font-semibold text-sm '>
                <li className='px-10 cursor- '>ABOUT</li>
                <li className='px-10 cursor- '>CONTACT</li>
                <li className='px-10 cursor- '>PROJECTS</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
