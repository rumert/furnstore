import Footer from '@/components/common/Footer'
import Rooms from '@/components/product/Rooms'
import React from 'react'
import Image from 'next/image'

export default function room({ params }: any) {
  
  return (
    <div className=''>
      <div className='w-full h-[50vh] relative mb-[10vh]'>
        <h1 className='absolute top-[20%] left-[20%] text-primary-color-1 text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase'>
          {params.room}
        </h1>
        <Image
        src={`/images/${params.room}/background.jpg`}
        width={2500}
        height={1500}
        alt={`${params.room} background`}
        className='h-full object-cover'
        />
      </div>
      <Rooms room={ params.room }/>
      <Footer />
    </div>
  )
}
