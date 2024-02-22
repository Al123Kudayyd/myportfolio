import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <div className='bg-[#f4eedb]'>
        <div className='flex '>
            <img src={logo} className="w-2/12" />
            <ul>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>PORTFOLIO</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
