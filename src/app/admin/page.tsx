import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className='w-screen flex flex-col justify-center items-center mt-40'>
        <Link href='/admin/products'>
          <div className='border-2 rounded-lg border-action-color p-2'>
            Manage Products
          </div>
        </Link>
    </div>
  )
}
