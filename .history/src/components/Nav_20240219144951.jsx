import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <div className='bg-[#f4eedb] -mt-10'>
        <div className='flex justify-between items-center'>
            <img src={logo} className="w-2/12" />
            <ul className='flex lg:-mt-10 font-semibold text-lg '>
                <li className='px-10 cursor-pointer'>ABOUT</li>
                <li className='px-10 cursor-pointer'>CONTACT</li>
                <li className='px-10 cursor-pointer'>PORTFOLIO</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
