import React from 'react'
import logo from '../assets/logo.png'
import { LiaBarsSolid } from "react-icons/lia";


function Nav() {
  return (
    <div className='bg-[#f4eedb]'>
        <div className='flex justify-between items-center'>
            <img src={logo} className="w-[] md:w-1/12" />
            <LiaBarsSolid className='sm:hidden text-3xl' />
            <ul className='hidden sm:flex font-extralight text-sm '>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>PROJECTS</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
