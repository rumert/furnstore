import Product from '@/components/product/Product'
import React from 'react'

export default function page({ params }: any) {
  return (
    <div className='h-[150vh] grid grid-rows-4 px-32'>
        <Product params={ params }/>
        <div className='row-span-2 border'>2</div>
    </div>
  )
}
