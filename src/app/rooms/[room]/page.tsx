import Footer from '@/components/common/Footer'
import Rooms from '@/components/product/Rooms'
import React from 'react'
import Background from '@/components/product/Background'

export default function room({ params }: any) {

  return (
    <div className=''>
      <Background room={params.room} />
      <Rooms room={ params.room }/>
      <Footer />
    </div>
  )
}
