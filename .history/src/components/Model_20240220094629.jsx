import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute'>
          <div className='flex justf'>
            <div className='bg-white'>
              <h1>These are the languages I specialise in!</h1>
            </div>
            <form className='flex flex-col bg-[#f4eedb]'>
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