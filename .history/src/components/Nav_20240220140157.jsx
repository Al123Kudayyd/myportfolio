import React from 'react'
import logo from '../assets/logo.png'
import { LiaBarsSolid } from "react-icons/lia";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";


function Nav() {
  return (
    <div className='bg-[#f4eedb]'>
        <div className='flex justify-between items-center'>
            <img src={logo} className="w-[20%] md:w-1/12 " />
            <LiaBarsSolid className='sm:hidden text-3xl mr-5 hover:text-gray-400 cursor-pointer active:scale-[.85] transition-all duration-300' />
            <ul className='hidden sm:flex font-extralight text-sm '>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>PROJECTS</li>
            </ul>
        </div>
        <div>
        <FaHtml5 />
        
        </div>
        

    </div>
  )
}

export default Nav
