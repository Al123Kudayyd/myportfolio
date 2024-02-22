import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <div>
        <div className='bg'>
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
