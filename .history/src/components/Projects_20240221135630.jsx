import React from 'react'

function Projects() {
  return (
    <div className='absolute top-0 left-[20%]'>
        <div className='flex justify-center items-center'>
            <div className='shadow-2xl bg-white w-[350px] h-[600px] rounded-l-2xl'>
                <div className='px-[40px] py-[76px]'>
                    <h1 className='text-2xl'>Here's a bit about me.</h1>
                    <h3 className='text-md '>languages I have worked with</h3>
                </div>
                
            </div>
            <div className='shadow-2xl bg-[#f4eedb] w-[500px] h-[600px] rounded-r-2xl '>
                <div className='px-[40px] py-[76px]'>
                    <h1 className='text-2xl'>Projects I have worked on</h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects