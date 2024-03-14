import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className='w-screen flex flex-col justify-center items-center mt-40'>
        <Link href='/admin/products/add'>
          <div className='border-2 rounded-lg border-action-color p-2'>
            Add a Product
          </div>
        </Link>
    </div>
  )
}
