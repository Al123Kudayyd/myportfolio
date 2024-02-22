import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute rounded-xl'>
          <div className='flex justify-between'>
            <div className='b flex justify-center'>
              <div>
                <h1>These are the languages I specialise in!</h1>
              </div>
            </div>
            <div>
              <form className='flex flex-col items-center'>
                <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'text'} placeholder='name' />
                <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'email'} placeholder='email' />
                <input className='bg-[#f4eedb] border-b border-gray-400 outline-none' type={'message'} placeholder='your message' />
              </form>
            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default model