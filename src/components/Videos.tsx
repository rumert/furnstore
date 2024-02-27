import React, { Suspense } from 'react'
import { VideoComponent } from './Video'

function Videos() {
  return (
    <div className='flex flex-col py-12 items-center bg-gradient-to-b md:bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a] h-[150vh] md:h-full text-white'>
      
      <div className='w-full flex flex-col items-center md:w-[85%] md:flex-row md:justify-between'>
        <div>
          <h1 className='text-4xl'>Enjoy Your Hobbies</h1>
        </div>
        <div className='relative w-[80%] pt-[45%] md:w-[40vw] md:pt-[26.7%] my-12'>
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponent fileName="guitarist.mp4" className='absolute top-0 left-0 border-2 rounded-2xl overflow-hidden border-[#333333]'/>
          </Suspense>
        </div> {/* player container */}
        
      </div>
      
      <div className='w-[30%] md:w-[60%] mb-12 border border-[#333333]'></div>

      <div className='w-full flex flex-col items-center md:w-[85%] md:flex-row md:justify-between md:gap-[230px] md:mt-[-48px]'>
        <div className='flex md:flex-col md:gap-6'>
          <h1 className='text-4xl'>Better House&nbsp;</h1>
          <h1 className='text-4xl'>Better Comfort</h1>
        </div>
        <div className='relative w-[80%] pt-[44.5%] md:w-[40vw] md:pt-[26.4%] my-12'>
          {/* <ReactPlayer
          className='absolute top-0 left-0 border-2 rounded-2xl overflow-hidden border-[#333333]' 
          url={'/sleeping.mp4'}
          controls={true}
          width='100%' 
          height='100%' 
          /> */}
        </div> {/* player container */}
      </div>
      

    </div>
  )
}

export default Videos