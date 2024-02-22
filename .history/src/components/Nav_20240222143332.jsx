import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { LiaBarsSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { openProjectModal } from '../redux/modalSlice';
import Projects from './Projects';
import Modal from './Modal';
import { LiaTimesSolid } from "react-icons/lia";

function Nav({ button, button1 }) {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
  return (
    <div className='bg-[#f4eedb] '>
        {
            modal ? <div className='flex flex-col justify-center'>
            <div className='absolute right-10 top-20 text-3xl hover:text-gray-400 transition-all duration-300
            active:scale-[.85] cursor-pointer'><LiaTimesSolid onClick={() => setModal(false)} /></div>
            <ul className='sm:hidden flex flex-col items-center justify-center font-extralight text-2xl min-h-[100vh] space-y-10 '>
                <li className='px-10 cursor-not-allowed hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-not-allowed hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li 
                onCl
                className='px-10 cursor-not-allowed hover:text-gray-400 transition-all duration-300 '>
                    PROJECT
                </li>
            </ul>
            </div> : <div className='flex justify-between items-center'>
            <img src={logo} className="w-[20%] md:w-1/12 " />
            <LiaBarsSolid onClick={() => setModal(true)} className='sm:hidden text-3xl mr-5 hover:text-gray-400 cursor-pointer active:scale-[.85] transition-all duration-300' />
            <ul className='hidden sm:flex font-extralight text-sm '>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li 
                className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300 text-black'
                >
                   {button}
                </li>
            </ul>
            
        </div>
        }
        
        
        

    </div>
  )
}

export default Nav
