import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end '>
        <div className='shadow-2xl w-[750px] h-[500px] absolute rounded-xl z-40'>
          <div className='flex flex-col items-center'>
            <form className='flex flex-col items-center bg-[#f4eedb] text-xl mt-20 w-80'>
              <label className='flex flex-col justify-center text-black'>Name
                <input 
                className='bg-[#f4eedb] border-b-4  border-gray-400 outline-none mb-6 focus:border-[#f4eedb]' type={'text'} />
              </label>
              <label className='flex flex-col justify-center text-black'>Email
                <input className='bg-[#f4eedb] border-b-4  border-gray-400 outline-none mb-6 focus:border-[#f4eedb]' type={'email'}  />
              </label>
              <label className='flex flex-col justify-center text-black'>Message
                <input className='bg-[#f4eedb] border-b-4  border-gray-400 outline-none mb-6 focus:border-[#f4eedb]' type={'message'}  />
              </label>
              
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default model