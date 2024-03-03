import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='relative w-full mt-6 mask bg-homepage_background bg-cover bg-bottom bg-no-repeat h-[45vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] text-md md:text-2xl'>
      <div className='h-fit w-full flex'>
        <div className='w-[40%]'></div>
        <div className='flex flex-col items-center w-[30%] h-fit mt-2 md:mt-8'>
          <h1>CHAIR NAME</h1>
          <h1>12 $</h1>
          <Link href='/' className='h-6 md:h-8 mt-2 md:mt-4 w-[70%] sm:w-[60%] bg-action-color rounded-full'></Link>
        </div>
      </div>
      
      <div className='absolute bottom-6 right-12 w-[30%] aspect-square'>
        <Image
          src="/blue-chair.png"
          alt='blue chair'
          width={1800}
          height={1800}
        />
      </div>
    </div>
  )
}

export default Hero          

  