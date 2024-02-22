import React from 'react'

function model() {
  return (
    <div>
        <div className='shadow-2xl'>
          <form>
            <input type={'text'} placeholder='name' />
            <input type={'email'} placeholder='email' />
          </form>
        </div>
    </div>
  )
}

export default model