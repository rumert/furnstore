'use client'
import React, { useState } from 'react'

export default function page() {
    const [productName, setProductName] = useState('')
  return (
    <div className='w-[75%] h-[80vh] mx-auto mt-12 p-8'> 
        <form action="">
            <input 
            type="text" 
            className=''
            value={productName}
            onChange={e => setProductName(e.target.value)}
            /> 
        </form>       
    </div>
  )
}
