import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
  return (
    <div className='w-full max-w-[1024px] mx-auto grid grid-cols-2 lg:grid-cols-4 font-medium'>
        <Link href='/' className='col-span-full max-w-[900px] mx-auto flex bg-base-color-2 p-2 mb-8 border-2 border-transparent shadow-md shadow-primary-color-2 hover:border-action-color rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='min-w-[40%] flex flex-col justify-center items-center gap-3'>
                <h1 className='flex flex-col text-center'>
                    <span>All Sofas Are</span>
                    <span className='font-extrabold'>On SALE</span>
                </h1>
                <h1 className='flex flex-col text-center'>
                    <span>Up To</span>
                    <span className='font-extrabold'>50%</span>
                </h1>
            </div>
            <div className='flex-grow h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[30vh]'>
                <Image
                    src="/images/sofa.jpg"
                    alt='purple sofa below clouds'
                    width={3377}
                    height={3376}
                    className='h-full object-cover object-[50%_80%] rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
        </Link>
        
        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[25vh] aspect-square'>
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
            <div className='h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[25vh] aspect-square'>
                <Image
                    src="/images/bed.jpg"
                    alt='white bed'
                    width={3000}
                    height={3000}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Beds</h1>
        </Link> 

        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[25vh] aspect-square'>
                <Image
                    src="/images/dresser.jpg"
                    alt='dresser'
                    width={3656}
                    height={3730}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Dressers</h1>
        </Link>  

        <Link href='/' className='w-fit mx-auto p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10'>
            <div className='h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[25vh] aspect-square'>
                <Image
                    src="/images/table.jpg"
                    alt='minimal table'
                    width={5560}
                    height={3707}
                    className='h-full object-cover object-bottom rounded-2xl shadow-md shadow-primary-color-1'
                />
            </div>
            <h1 className='flex justify-center items-center h-[5vh] w-full'>Tables</h1>
        </Link>        
    </div> 
  )
}
