import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Slider() {
  return (
    <div className='relative w-full mask bg-homepage_background bg-cover bg-bottom bg-no-repeat h-[45vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh]'>
      <div className='h-fit xl:h-[250px] w-full flex'>
        <div className='w-[37%] lg:w-[40%]'></div>
        <div className='flex flex-col items-center w-[30%] h-fit mt-2 xl:mt-auto md:mt-8'>
          <h1 className='lg:mb-2'>CHAIR NAME</h1>
          <h1>12 $</h1>
          <Link href='/' className='z-10 h-6 sm:h-8 lg:h-10 mt-2 md:mt-4 lg:mt-6 w-[70%] max-w-[160px] xl:max-w-[200px] bg-action-color rounded-full'></Link>
        </div>
      </div>
      
      <div className='absolute bottom-4 right-4 lg:right-16 2xl:right-32 w-[40%] md:w-[45%] max-w-[370px] xl:max-w-[500px] 2xl:max-w-[600px] aspect-square'>
        <Image
          src="/blue-chair.png"
          alt='blue chair'
          width={1800}
          height={1800}
        />
      </div>

      <div className='absolute bottom-1 xl:bottom-3 left-[33%]'>
        <a href='#' className='h-4 md:h-6 xl:h-7 aspect-square mr-1 inline-block'>
          <div className='h-full w-full bg-action-color flex items-center justify-center rounded-full text-lg md:text-2xl xl:text-3xl'>1</div>
        </a>
        <a href='#' className='h-4 md:h-6 xl:h-7 aspect-square mr-1 inline-block'>
          <div className='h-full w-full bg-action-color flex items-center justify-center rounded-full text-lg md:text-2xl xl:text-3xl'>2</div>
        </a>
        <a href='#' className='h-4 md:h-6 xl:h-7 aspect-square mr-1 inline-block'>
          <div className='h-full w-full bg-action-color flex items-center justify-center rounded-full text-lg md:text-2xl xl:text-3xl'>3</div>
        </a>
      </div>
    </div>
  )
}          

  