import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import project1 from '../assets/project1.png'
import project1c from '../assets/project1b.png'
import project1b from '../assets/project1c.png'
import project2 from '../assets/project2.png'
import project2b from '../assets/project2b.png'
import project2c from '../assets/project2c.png'

function Projects() {
  return (
    <div className='absolute top-0 left-[20%]'>
        <div className='flex justify-center items-center'>
            <div className='shadow-2xl bg-white w-[350px] h-[600px] rounded-l-2xl'>
                <div className='px-[40px] py-[76px] '>
                    <h1 className='text-2xl'>Here's a bit about me.</h1>
                    <h3 className='text-md font-bold'>languages & framework's I have worked with:</h3>
                    <div className='flex flex-wrap my-10 text-7xl'>
                        <FaHtml5 className='text-[#FF5733]' />
                        <FaCss3Alt className='text-[#2965F1] mx-5' />
                        <IoLogoJavascript className='text-[#F5DE19]' />
                        <FaReact className='text-[#7CC5D9] my-5' />
                        <SiNextdotjs className='text-[#1a1a1a] my-5 mx-5' />
                        <SiFirebase className='text-[#F6820D] my-5' />
                        <SiTailwindcss className='text-[#8edcf1]' />
                    </div>
                </div>
                
            </div>
            <div className='shadow-2xl bg-[#f4eedb] w-[500px] h-[600px] rounded-r-2xl overflow-auto'>
                <div className='px-[40px] py-[76px]'>
                    <h1 className='text-2xl'>Projects I have worked on</h1>
                    <h3 className='text-md font-bold'>I'm ready to work with any business big or small.</h3>
                    <div className='mt-5 flex flex-wrap'>
                        <div className='w-1/2 space-y-2 mr-3'>
                            <img src={project1} alt="" />
                            <img src={project1b} alt="" />
                            <img src={project1c} alt="" />
                        </div>
                        <div className='w-1/2 space-y-2'>
                            <img src={project2} alt="" />
                            <img src={project2b} alt="" />
                            <img src={project2c} alt="" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects