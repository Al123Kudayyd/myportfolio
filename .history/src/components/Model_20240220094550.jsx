import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute'>
          <div className='flex'>
            <div className='bg-white'>
              <h1>These are the languages I specialise in!</h1>
            </div>
            <form className='flex flex-col bg-[#f4eedb] outline-none'>
              <input className='bg-[#f4eedb] border-b border-gray-400 ' type={'text'} placeholder='name' />
              <input className='bg-[#f4eedb]' type={'email'} placeholder='email' />
              <input className='bg-[#f4eedb]' type={'message'} placeholder='your message' />
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default model