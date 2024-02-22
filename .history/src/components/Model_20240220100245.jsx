import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end -z-10'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute rounded-xl '>
          <div className=''>
            <form className='flex flex-col items-center bg-[#f4eedb]'>
              <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'text'} placeholder='name' />
              <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'email'} placeholder='email' />
              <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'message'} placeholder='your message' />
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default model