import React, { useState } from 'react'
import  Link  from 'next/link';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useStore } from '@/stores/store';

function Navbar() {
  const [rooms, setRooms] = useState(false);
  const nav = useStore((state) => state.nav)
  const setNav = useStore((state: any) => state.updateNav)

  function handleNav() {
    setNav(!nav);
  }

  function handleRooms () {
    setRooms(!rooms)
  }

  return (
    <div className={nav ? 'flex flex-col h-[100vh] lg:h-auto' : ''}>

      <div className='w-full h-8 my-4 flex justify-between items-center'>

        <button onClick={handleNav} className='z-20 lg:hidden ml-8 px-1'>
          { nav ? 
          <FaXmark className='text-3xl' /> :
          <FaBars className='text-3xl' /> }
        </button>

        <ul className='hidden lg:flex lg:items-center lg:z-20'>
          <li className='relative text-md pr-4 pl-8 border-r'>
            <button onClick={handleRooms} className='text-lg flex gap-2 items-center'> <FaArrowDownShortWide /> ROOMS </button>
            {rooms &&
            <div className='w-28 px-1 absolute top-8 border rounded-lg bg-gray-300'>
              <li> <Link href='/rooms/kitchen'> KITCHEN </Link> </li>
              <li> <Link href='/rooms/livingRoom'> LIVING ROOM </Link> </li>
              <li> <Link href='/rooms/bedroom'> BEDROOM </Link> </li> 
            </div>      
            }            
          </li>
          <li className='text-lg px-4 border-r'> <Link href='/about'> ABOUT </Link> </li>
          <li className='text-lg px-4'> <Link href='/contacts'> HELP </Link> </li>
        </ul> {/* Left Navbar */}
        
        <div className='w-full absolute z-10 text-center text-2xl'>
          <Link href='/'>
            FURNSTORE
          </Link>
        </div>
                
        <div className='flex items-center gap-3 z-20'>
          <Link href='' className='px-1'><FaUser className='text-xl' /></Link>
          <Link href='' className='px-1 mr-8'><FaCartShopping className='text-2xl' /></Link>
        </div> {/* Right Navbar */}

      </div> {/* navbar */}    

      <div className={ nav ? 'text-white flex-grow bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a] py-4 lg:hidden' : 'hidden' }>
        <Link href='/' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>HOME</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='/rooms/kitchen' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>KITCHEN</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='/rooms/livingRoom' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>LIVING ROOM</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='/rooms/bedroom' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>BEDROOM</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>ACCOUNT</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='/contacts' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>HELP</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link href='/about' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>ABOUT US</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
      </div>  {/* animated navbar for small screens */}

    </div>
  )
}


export default Navbar;