import React from 'react'

function model() {
  return (
    <div className='flex justify-center items-end'>
        <div className='shadow-2xl w-[750px] h-[500px] absolute'>
          <div className=''>
            <div className='bg-white'>
              <h1>These are the languages I specialise in!</h1>
            </div>
            <form className='flex flex-col bg'>
              <input type={'text'} placeholder='name' />
              <input type={'email'} placeholder='email' />
              <input type={'message'} placeholder='your message' />
            </form>
          </div>
          
        </div>
    </div>
  )
}

export default model