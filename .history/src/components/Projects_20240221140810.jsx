import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function Projects() {
  return (
    <div className='absolute top-0 left-[20%]'>
        <div className='flex justify-center items-center'>
            <div className='shadow-2xl bg-white w-[350px] h-[600px] rounded-l-2xl'>
                <div className='px-[40px] py-[76px]'>
                    <h1 className='text-2xl'>Here's a bit about me.</h1>
                    <h3 className='text-md '>languages I have worked with</h3>
                    <div className='flex flex-wrap my-10 text-7xl '>
                        <FaHtml5 className='text-[#FF5733]' />
                        <FaCss3Alt className='text-[#2965F1]' />
                        <IoLogoJavascript className='text-[#F5DE19]' />
                        <FaReact className='text-[#7CC5D9]' />
                        <SiNextdotjs className='text-[#1a1a1a]' />
                        <SiFirebase className='text-[#F6820D]' />
                        <SiTailwindcss />
                    </div>
                </div>
                
            </div>
            <div className='shadow-2xl bg-[#f4eedb] w-[500px] h-[600px] rounded-r-2xl '>
                <div className='px-[40px] py-[76px]'>
                    <h1 className='text-2xl'>Projects I have worked on</h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects