import React from 'react'

function Modal() {
  return (
    <div>
        <div>
        <ul className='hidden sm:flex font-extralight text-sm '>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
                <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
                <li 
                className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300 text-black'
                > </li>
        </ul>
        </div>
    </div>
  )
}

export default Modal