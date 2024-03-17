import React from 'react'
import AddProduct from '@/components/admin/AddProduct'

export default function page() {
  return (
    <div className='h-[90vh] flex flex-col justify-center'>
      <div className='border border-base-color-1 shadow-lg shadow-base-color-2 rounded-2xl mx-12 h-[80vh] py-16 px-6'>
        <h1 className='text-center mb-6 text-5xl'>Add a Product</h1>
        <AddProduct />
      </div>
    </div> 
  )
}
