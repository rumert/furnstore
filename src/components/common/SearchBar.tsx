import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

function SearchBar() {
  return (
    <div className='mx-auto w-full'>
      <div className='border rounded-3xl overflow-hidden flex'>
        <input type="text" placeholder='Search Products' className='w-full px-4 text-black text-sm md:text-xl border-gray-500 rounded-3xl focus:border-2 focus:border-gray-500 focus:rounded-3xl outline-none'/>
        <button className='flex items-center justify-center w-1/6'><FaMagnifyingGlass className='text-2xl'/></button>
      </div>      
    </div>
  )
}

export default SearchBar