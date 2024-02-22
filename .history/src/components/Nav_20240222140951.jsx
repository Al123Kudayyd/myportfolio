import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { LiaBarsSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { openProjectModal } from '../redux/modalSlice';
import Projects from './Projects';
import Modal from './Modal';

function Nav({ button, button1 }) {

    const dispatch = useDispatch()
    const [modal, setModal] = useState()
  return (
    <div className='bg-[#f4eedb] '>
        {
            modal ? <Modal /> : 
        }
        
        
        

    </div>
  )
}

export default Nav
