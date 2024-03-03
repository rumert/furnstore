import React from 'react'
import { PiMagnifyingGlass } from "react-icons/pi";

function SearchBar() {
  return (
    <div className='w-[90%] max-w-[900px] mx-auto '>
      <div className='h-10 mx-4 border rounded-3xl overflow-hidden flex'>
        <input type="text" placeholder='Search Products' className='w-full h-full px-4  border-gray-500 rounded-3xl focus:border-2 focus:border-gray-500 focus:rounded-3xl outline-none'/>
        <button className='flex items-center justify-center h-10 w-[60px]'><PiMagnifyingGlass className='text-4xl' /></button>
      </div>      
    </div>
  )
}

export default SearchBar