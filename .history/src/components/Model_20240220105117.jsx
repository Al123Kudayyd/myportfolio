import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";


function model() {
  return (
    <div className='flex justify-center items-end -mt-80 relative'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute rounded-xl z-40 bg-black '>
        <LiaTimesSolid className='text-gray-400 absolute right-10 top-8 cursor-pointer text-3xl' />
          <div className='flex flex-col items-center'>
            <form className='flex flex-col items-center text-xl mt-20 '>
              <label className='flex flex-col justify-center text-gray-400'>Name
                <input 
                className='border-b-4 bg-black text-sm w-96 border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                type={'text'} />
              </label>
              <label className='flex flex-col justify-center text-md text-gray-400'>Email
                <input 
                className='border-b-4 bg-black text-sm  border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                type={'email'}  />
              </label>
              <label className='flex flex-col justify-center text-gray-400'>Message
                <textarea 
                className='border-b-4 bg-black text-sm  border-gray-400 outline-none mb-6 transition-all duration-300 focus:border-[#f4eedb]' 
                type={'message'}  />
              </label>
              
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default model