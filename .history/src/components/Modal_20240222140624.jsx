import React from 'react'

function Modal() {
  return (
    <div>
        <div className=''>
        <ul className='sm:hidden flex flex-col items-center font-extralight text-sm min-h-s'>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>ABOUT</li>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300'>CONTACT</li>
            <li className='px-10 cursor-pointer hover:text-gray-400 transition-all duration-300 '>PROJECT</li>
        </ul>
        </div>
    </div>
  )
}

export default Modal