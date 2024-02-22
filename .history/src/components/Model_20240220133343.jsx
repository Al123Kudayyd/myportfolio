import React, { useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import logo1 from '../assets/logo1.png'


function Model({ btn }) {
  
  return (
    <div className='flex justify-center items-end -mt-80 relative'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute rounded-xl z-40 bg-black animate-pulse'>
        <div className='text-gray-400 absolute right-10 top-8 cursor-pointer text-3xl hover:text-[#f4eedb] transition-all duration-300
        active:scale-90'>{btn}
         </div>
          <div className='flex flex-col items-center'>
            <form className='flex flex-col items-center text-xl mt-20 '>
              <h1 className='tw'>Get in Touch</h1>
              <div className='flex justify-center items-center'>
                <label className='flex flex-col justify-center w-[300px] text-gray-400'>Name
                  <input 
                  className='border-b-4 bg-black text-sm  border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                  type={'text'} />
                </label>
                <label className='flex flex-col justify-center w-[300px] ml-5 text-md text-gray-400'>Email
                  <input 
                  className='border-b-4 bg-black text-sm  border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                  type={'email'}  />
                </label>
              </div>
              <label className='flex flex-col justify-center w-[620px] text-gray-400'>Message
                <textarea 
                className='border-b-4 bg-black text-sm  border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                type={'message'}  />
              </label>
              <button 
              className='border-2 border-[#f4eedb] text-[#f4eedb] px-10 py-2 hover:bg-[#f4eedb] hover:text-black transition-all duration-300'
              type='submit'>Send it my way</button>
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default Model