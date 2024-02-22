import React from 'react'

function model() {
  return (
    <div className='flex justify-center'>
        <div className='shadow-2xl w-[700px] h-[450px] absolute '>
          <div>
            <div>
              <h1></h1>
            </div>
            <form >
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