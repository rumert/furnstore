import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import Rooms from '@/components/Rooms'
import React from 'react'

export default function room({ params }: any) {

  return (
    <div>
        <SearchBar />
        <Rooms room={ params.room }/>
        <Footer />
    </div>
  )
}
