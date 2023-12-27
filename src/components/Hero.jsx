import React from 'react'
import tableVideo from "../assets/tableVideo.mp4"

function Hero() {
  return (
    <div className='flex items-center flex-col gap-16 w-full h-[100vh] sm:h-screen py-6 text-white relative bg-gradient-to-b from-[#352e2e] to-[#1a1818] sm:bg-none'>
      
      <div className='hidden sm:block sm:absolute left-0 w-full h-[98vh] bg-black/40'></div> {/* make texts easy to read */}
      
      <div className='hidden sm:block sm:absolute -z-10 h-[100vh] w-full'>
        <video src={tableVideo} autoPlay loop muted className='w-full h-full object-cover' />
      </div> {/* bg video for desktop */}
      
      <div className='py-[15%] flex flex-col items-center relative sm:gap-2'>
        <h1 className='text-[40px] sm:text-7xl'>Make Your House</h1>
        <h1 className='text-[50px] sm:text-8xl'>Peaceful</h1> 
      </div> {/* text container */}
      
      <div className='w-80 sm:w-[90%] text-xl sm:text-3xl flex'>
        <div className='hidden md:block border-l-[6px] border-l-gray-600 pr-2'></div>
        <h1>Lorem Ipsum is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
      </div> {/* description and line container */}
    
    </div>
  )
}

export default Hero

