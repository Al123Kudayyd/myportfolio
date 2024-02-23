import React, { useState } from 'react'
import Model from './Model'
import { LiaTimesSolid } from "react-icons/lia";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Projects from './Projects';
import { useDispatch, useSelector } from 'react-redux';
import { closeProjectModal } from '../redux/modalSlice';
import { LiaBarsSolid } from "react-icons/lia";

function Main() {
    const [openModal, setOpenModal] = useState(false)
    

    
  return (
    <div className='relative'>
    <div className='bg-[#f4eedb] relative h-screen w-screen'>
        <div className='-z-10 sm:pl-10 pl-5 pt-20 '>
            <h1 className=''><span className='text-gray-400 font-extralight sm:text-4xl text-2xl'>I'M SAMMY AND I'M A</span>
            <br /><span className='text-5xl sm:text-7xl'>frontend developer.</span></h1>
            <button className='mt-20 border-gray-400 border-2 text-gray-400 py-2 px-8 hover:bg-gray-400 hover:text-[#f4eedb]
            transition-all duration-300'
            onClick={() => setOpenModal(true)}>
                Contact Me</button>
        </div>
        
    </div>
    {
        openModal && <Model btn={<LiaTimesSolid onClick={() => setOpenModal(false) } />} 
         /> 
    }
    <div className='absolute top-[10%] right-0 text-2xl pl-5  m-3'>
        <a href="" className='' ><FaFacebook className='cursor-not-allowed' /></a>
        <a href="https://uk.linkedin.com/in/sammy-al-khudayyd-17656b246"  className=''>
            <FaLinkedin className='cursor-pointer my-5' />
        </a>
        <a href=""><SiGmail className='cursor-pointer' /></a>
        
    </div>
        
    </div>
  )
}

export default Main