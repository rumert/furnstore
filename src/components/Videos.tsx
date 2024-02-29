import React, { Suspense } from 'react'
import { VideoComponent } from './Video'

function Videos() {
  return (
    <div className='flex flex-col py-12 items-center bg-gradient-to-b md:bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a] md:h-full text-white'>
      
      <div className='w-full flex flex-col items-center md:w-[85%] md:flex-row md:justify-between'>
        <div>
          <h1 className='text-4xl'>Enjoy Your Hobbies</h1>
        </div>
        <div className='relative w-[80%] md:w-[40vw] my-12'>
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponent playbackId={'gGFb0102zsroM3CAWigE6J5L332zuG5iNDBLf3yalKkAA'}  />
          </Suspense> 
        </div> {/* player container */}
      </div>
      
      <div className='w-[30%] md:w-[60%] mb-12 border border-[#333333]'></div>

      <div className='w-full flex flex-col items-center md:w-[85%] md:flex-row md:justify-between'>
        <div className='flex md:flex-col md:gap-6'>
          <h1 className='text-4xl'>Better House&nbsp;</h1>
          <h1 className='text-4xl'>Better Comfort</h1>
        </div>
        <div className='relative w-[80%] md:w-[40vw] my-12'>
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponent playbackId={'ml6cX5st00IHijHZjOy001a6V02jWsx01p1Df5z4r01202Rsw'} />
          </Suspense>
        </div> {/* player container */}
      </div>
      
    </div>
  )
}

export default Videos