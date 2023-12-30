import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";



function Navbar() {
  const [ nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  if (nav) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'unset';
  }

  return (
    <div className={nav ? 'flex flex-col h-[100vh] lg:h-auto' : 'flex flex-col'}>

      <div className='flex justify-between items-center h-8 my-4'>
        <button onClick={handleNav} className='lg:hidden'>{ !nav ? <HiBars3 className='text-3xl' /> : <IoCloseOutline className='text-3xl' /> }</button>
        <ul className='hidden xl:flex xl:items-center'>
          <li className='text-lg pr-4 pl-8 border-r'> <Link to='/'> <h1>HOME</h1> </Link> </li>
          <li className='text-lg px-4 border-r'> <Link to='/rooms/kitchen'> <h1>KITCHEN</h1> </Link> </li>
          <li className='text-lg px-4 border-r'> <Link to='/rooms/livingRoom'> <h1>LIVING ROOM</h1> </Link> </li>
          <li className='text-lg px-4 border-r'> <Link to='/rooms/bedroom'> <h1>BEDROOM</h1> </Link> </li>
          <li className='text-lg px-4'> <Link to='/about'> <h1>ABOUT</h1> </Link> </li>
        </ul>
        <div className='text-2xl lg:w-full lg:-z-10 lg:absolute lg:text-center'><h1><Link to='/'>X-STORE</Link></h1></div>
        <div className='flex items-center gap-3 px-4'>
          <Link to='/contacts' className='hidden lg:block'><IoHelpCircleOutline className='text-3xl' /></Link>
          <Link className='px-1 hidden lg:block'><VscAccount className='text-2xl' /></Link>
          <Link className='pr-4'><PiShoppingCartSimpleLight className='text-3xl' /></Link>
        </div>    
      </div> {/* navbar */}

      <div className={ nav ? 'text-white flex-grow bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a] py-4 lg:hidden' : 'hidden' }>
        <Link to='/' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>HOME</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>KITCHEN</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>LIVING ROOM</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>BEDROOM</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>ACCOUNT</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link to='/contacts' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>HELP</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
        <Link to='/about' className='block w-full text-2xl sm:text-3xl md:text-4xl px-8 border-b border-[#333333] py-7 lg:py-10'> <h1>ABOUT US</h1> <IoIosArrowForward className='inline float-right relative -top-9' /> </Link>
      </div>  {/* animated navbar for small screens */}

    </div>
  )
}


export default Navbar;