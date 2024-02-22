import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";

function Modal() {
  return (
    <div>
        <div className='flex flex-col justify-center'>
        <LiaTimesSolid className='absolute right-10 top-20 ' />
        <ul className='sm:hidden flex flex-col items-center justify-center font-extralight text-2xl min-h-[100vh] space-y-10 '>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300 '>PROJECT</li>
        </ul>
        </div>
    </div>
  )
}

export default Modal