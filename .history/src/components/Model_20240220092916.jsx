import React from 'react'

function model() {
  return (
    <div className='relative'>
        <div className='shadow-2xl w-[300px] h-[350px] absolute'>
          <form >
            <input type={'text'} placeholder='name' />
            <input type={'email'} placeholder='email' />
            <input type={'message'} placeholder='your message' />
          </form>
        </div>
    </div>
  )
}

export default model