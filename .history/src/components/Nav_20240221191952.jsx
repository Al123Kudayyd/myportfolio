import React from 'react'
import logo from '../assets/logo.png'
import { LiaBarsSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { openProjectModal } from '../redux/modalSlice';

function Nav() {

    const dispatch = useDispatch()
  return (
    <div className='bg-[#f4eedb] '>
        <div className='flex justify-between items-center'>
            <img src={logo} className="w-[20%] md:w-1/12 " />
            <LiaBarsSolid className='sm:hidden text-3xl mr-5 hover:text-gray-400 cursor-pointer active:scale-[.85] transition-all duration-300' />
            <ul className='hidden sm:flex font-extralight text-sm '>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li 
                className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300 text-black'
                >
                   PROJECTS
                </li>
            </ul>
        </div>
        
        

    </div>
  )
}

export default Nav
