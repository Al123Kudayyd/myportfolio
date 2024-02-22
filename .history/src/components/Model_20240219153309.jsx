import React from 'react'

function model() {
  return (
    <div>
        <div className='shadow-2xl w-'>
          <form>
            <input type={'text'} placeholder='name' />
            <input type={'email'} placeholder='email' />
            <input type={'message'} placeholder='your message' />
          </form>
        </div>
    </div>
  )
}

export default model