import React, { useState } from 'react'
import Model from './Model'
import { LiaTimesSolid } from "react-icons/lia";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Projects from './Projects';


function Main() {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div className='relative'>
    <div className='bg-[#f4eedb] relative h-screen'>
        <div className='-z-10 pl-20 pt-20 '>
            <h1 className=''><span className='text-gray-400 font-extralight text-4xl'>I'M SAMMY AND I'M A</span>
            <br /><span className='text-7xl'>frontend developer.</span></h1>
            <button className='mt-20 border-gray-400 border-2 text-gray-400 py-2 px-8 hover:bg-gray-400 hover:text-[#f4eedb]
            transition-all duration-300'
            onClick={() => setOpenModal(true)}>
                Contact Me</button>
        </div>
        
    </div>
    {
        openModal && <Model btn={<LiaTimesSolid onClick={() => setOpenModal(false)} />} /> 
    }
    <div className='absolute top-1/2 right-0 text-2xl space-y-5 m-3'>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <SiNextdotjs />
            <SiFirebase />
            <SiTailwindcss />
        </div>
        <Projects className='absolute' />
    </div>
  )
}

export default Main