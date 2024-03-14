import React, { useState } from 'react'
import  Link  from 'next/link';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useStore } from '@/stores/globalValues';
import SearchBar from './SearchBar';

function Navbar({isNavbarAnimated}: any) {
  const [rooms, setRooms] = useState(false);
  const nav = useStore((state) => state.nav)
  const isSearchBarActive = useStore((state) => state.isSearchBarActive)
  const setNav = useStore((state: any) => state.updateNav)
  const setIsSearchBarActive = useStore((state: any) => state.updateIsSearchBarActive)

  function handleNav() {
    setNav(!nav);
  }

  function handleRooms () {
    setRooms(!rooms)
  }

  function handleSearchBar () {
    setIsSearchBarActive(!isSearchBarActive)
  }

  return (
    <div>
      {isNavbarAnimated ? 

      <div className='flex flex-col h-screen w-full text-center'>
        <button onClick={handleNav} className='mx-auto mr-4 w-fit px-1 mt-4'>
          <FaXmark className='text-4xl' />        
        </button>
        <div className='flex flex-col gap-4 w-1/2 m-auto'>
          <Link href='/'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>HOME</h1></Link>
          <Link href='/rooms/kitchen'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>KITCHEN</h1></Link>
          <Link href='/rooms/livingRoom'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>LIVING ROOM</h1></Link>
          <Link href='/rooms/bedroom'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>BEDROOM</h1></Link>
          <Link href=''> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>ACCOUNT</h1></Link>
          <Link href='/contacts'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>HELP</h1></Link>
          <Link href='/about'> <h1 className='rounded-lg border-2 border-action-color text-primary-color-2'>ABOUT US</h1></Link>
        </div>
      </div>

      : 

      <div>

        <div className='w-full absolute z-10 text-center text-2xl'>
          <Link href='/'>
            FURNSTORE
          </Link>
        </div>

        <div className='w-full max-w-[1024px] mx-auto h-8 mt-2 mb-4 md:mb-8 flex justify-between items-center'>

          <button onClick={handleNav} className='lg:hidden z-20 ml-8 px-1'>
            <FaBars className='text-3xl' />
          </button>

          <ul className='hidden lg:flex lg:items-center lg:z-20'>
            <li className='relative text-md pr-4 pl-8 xl:pl-4 border-r'>
              <button onClick={handleRooms} className='text-lg flex gap-2 items-center'> <FaArrowDownShortWide /> ROOMS </button>
              {rooms &&
              <div className='w-fit px-1 absolute top-8 border rounded-lg'>
                <li> <Link href='/rooms/kitchen'> KITCHEN </Link> </li>
                <li> <Link href='/rooms/livingRoom'> LIVING ROOM </Link> </li>
                <li> <Link href='/rooms/bedroom'> BEDROOM </Link> </li> 
              </div>      
              }            
            </li>
            <li className='text-lg px-4 border-r'> <Link href='/about'> ABOUT </Link> </li>
            <li className='text-lg px-4'> <Link href='/contacts'> HELP </Link> </li>
          </ul> {/* Left Navbar */}
                  
          <div className='flex items-center gap-1 sm:gap-3 z-20 '>
            {isSearchBarActive && <SearchBar />}
            {!isSearchBarActive && <button onClick={handleSearchBar} className='px-1'><FaMagnifyingGlass className='text-lg sm:text-2xl'/></button>}
            <Link href='' className='px-1'><FaUser className='text-lg sm:text-xl' /></Link>
            <Link href='' className='px-1 mr-8'><FaCartShopping className='text-lg sm:text-2xl' /></Link>
          </div> {/* Right Navbar */}

        </div> {/* navbar */}
      </div>
      
      }
    </div>
    
  )
}


export default Navbar;