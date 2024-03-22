import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

function SearchBar() {
  return (
    <div className='mx-auto w-full'>
      <div className='border-2 border-primary-color-1 rounded-3xl overflow-hidden flex'>
        <input type="text" placeholder='Search Products' className='w-full px-4 text-black text-sm md:text-xl rounded-3xl border-2 border-transparent focus:border-action-color outline-none'/>
        <button className='flex items-center justify-center w-1/6'><FaMagnifyingGlass className='text-2xl'/></button>
      </div>      
    </div>
  )
}

export default SearchBar