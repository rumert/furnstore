import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
  return (
    <div className='w-full max-w-[1024px] grid grid-cols-2 font-medium'>
        <Link href='/' className='col-span-2 flex w-screen bg-base-color-2 text-2xl p-2 border-2 border-transparent hover:border-action-color rounded-xl hover:bg-opacity-50'>
            <div className='flex-grow flex flex-col justify-center items-center gap-3'>
                <h1 className='flex flex-col text-center'>
                    <span>All Sofas Are</span>
                    <span className='font-extrabold'>On SALE</span>
                </h1>
                <h1 className='flex flex-col text-center'>
                    <span>Up To</span>
                    <span className='font-extrabold'>50%</span>
                </h1>
            </div>
            <div className='h-[25vh] aspect-square'>
                <Image
                    src="/images/white-chair.jpg"
                    alt='white chair in a room'
                    width={5326}
                    height={7990}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
        </Link>
        
        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] aspect-square'>
                <Image
                    src="/images/white-chair.jpg"
                    alt='white chair in a room'
                    width={5326}
                    height={7990}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Chairs</h1>
        </Link>

        <Link href='/' className='h-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] aspect-square'>
                <Image
                    src="/images/bed.jpg"
                    alt='white chair in a room'
                    width={5326}
                    height={7990}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Beds</h1>
        </Link> 

        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] aspect-square'>
                <Image
                    src="/images/dresser.jpg"
                    alt='white chair in a room'
                    width={5326}
                    height={7990}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Dresser</h1>
        </Link>  

        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] aspect-square'>
                <Image
                    src="/images/table.jpg"
                    alt='white chair in a room'
                    width={5326}
                    height={7990}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Tables</h1>
        </Link>        
    </div>
  )
}
