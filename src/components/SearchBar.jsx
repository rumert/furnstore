import React from 'react'
import { PiMagnifyingGlass } from "react-icons/pi";

function SearchBar() {
  return (
    <div className='w-[90%] max-w-[900px] m-auto mb-4'>
      <div className='h-12 mx-4 border rounded-3xl overflow-hidden flex'>
        <input type="text" placeholder='Search' className='w-full h-full px-2 focus:border-2 focus:border-gray-500 focus:rounded-3xl outline-none'/>
        <button className='flex items-center justify-center h-12 w-[60px]'><PiMagnifyingGlass className='text-4xl' /></button>
      </div>      
    </div>
  )
}

export default SearchBar