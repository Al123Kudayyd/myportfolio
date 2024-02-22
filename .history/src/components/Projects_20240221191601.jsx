import React, { useState } from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiFirebase, SiNextdotjs, SiRedux} from "react-icons/si";
import project1 from '../assets/project1.png'
import project1c from '../assets/project1b.png'
import project1b from '../assets/project1c.png'
import project2 from '../assets/project2.png'
import project2b from '../assets/project2b.png'
import project2c from '../assets/project2c.png'
import { LiaTimesSolid } from "react-icons/lia";

import { useDispatch, useSelector } from 'react-redux';
import { closeProjectModal } from '../redux/modalSlice';


function Projects() {
    
    const Open = useSelector(state => state.modals.openprojectmodal)
    const dispatch = useDispatch()
    const [openProjectModal, setOpenProjectModel] = useState(false)

  return (
    <div className='absolute top-0 left-[20%]'>
        <div className='text-gray-400 absolute right-10 top-8 cursor-pointer text-3xl hover:text-black transition-all duration-300
        active:scale-[.85]'><LiaTimesSolid onClick={() => setOpenProjectModel(false)} /></div>
        {
            openProjectModal && <>
            </>
        }
        
    </div>
  )
}

export default Projects