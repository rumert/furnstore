import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='grid h-screen md:h-auto pt-12 pb-32 md:pb-48 bg-gradient-to-b md:bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a] text-white md:text-xl md:grid-cols-4 md:max-h-[75vh]'>

        <ul className='flex gap-4 px-12 items-center md:border-r-[#333333] md:border-r md:items-stretch md:flex-col'>
            <li className='text-6xl w-16'><IoLogoReact /></li>
            <li>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </li>
            <li className='md:text-lg'>©&nbsp;Copyright</li>
        </ul>

        <div className='flex gap-12 md:gap-0 md:col-span-2'>
            <ul className='w-[40%] flex flex-col gap-4 px-12 md:w-[50%] md:border-r md:border-r-[#333333]'>
                <li>
                    <h1 className='text-xl md:text-2xl'>MENU</h1>
                    <div className='h-2 w-14 border-b border-b-[#1a1a1a]'></div>
                </li>
                <li><p><Link to='/about'>About Us</Link></p></li>
                <li><p><Link to='/contacts'>Contacts</Link></p></li>
                <li><p><Link>Terms & Condition</Link></p></li>
                <li><p><Link>Privacy Policy</Link></p></li>
            </ul>

            <ul className='w-[40%] flex flex-col gap-4 px-12 md:w-[50%] md:border-r md:border-r-[#333333]'>
                <li>
                    <h1 className='text-xl md:text-2xl'>FOLLOW US</h1>
                    <div className='h-2 w-28 border-b border-b-[#1a1a1a]'></div>
                </li>
                <li><p><a href="">Facebook</a></p></li>
                <li><p><a href="">Twitter</a></p></li>
                <li><p><a href="">Instagram</a></p></li>
                <li><p><a href="">RSS</a></p></li>
            </ul>
        </div>

        <ul className='flex flex-col gap-4 px-12'>
            <li>
                <h1 className='text-xl md:text-2xl'>NEWSLETTER</h1>
                <div className='h-2 w-28 border-b border-b-[#1a1a1a]'></div>
            </li>
            
            <li><p>Suspendisse hendreit tellus</p></li>
            <li><input type="text" className='md:w-[100%]' /></li>
        </ul>

    </div>
  )
}

export default Footer