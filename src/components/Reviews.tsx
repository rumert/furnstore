import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";

export default function Reviews() {
  return (
    <div className='w-full max-w-[1024px] h-[50vh] mx-auto flex flex-col justify-between text-center'>
        <div className='w-40 border-t mx-auto border-primary-color-1'></div>
        <h1>What Our Customers Say</h1>
        <div className='w-full h-[296px] flex justify-center gap-4 items-end overflow-x-hidden'>
            
            <div className='h-64 min-w-96 relative'>
              <div className='w-20 h-20 bg-[#0288D1] rounded-full absolute top-0 -translate-y-1/2 translate-x-[152px]'>
                <h1 className='my-auto h-full flex justify-center items-center'>B</h1>
              </div>

              <div className='h-full w-full pt-14 bg-white rounded-xl text-black'>
                <div className='flex justify-between mb-2 pl-8 pr-12'>
                  <FaQuoteLeft className='text-[#BBBBBB] text-3xl'/>
                  <div className='flex justify-center items-center'>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#80868B] text-xl'/>
                  </div>
                </div>

                <h1 className='w-2/3 text-xl text-left mx-auto mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                
                <FaQuoteRight className='text-[#BBBBBB] text-3xl ml-auto mr-8'/>
              </div>
            </div>

            <button className='h-64 text-action-color text-5xl flex justify-center items-center'><FaArrowLeft /></button>

            <div className='h-64 min-w-96 relative'>
              <div className='w-20 h-20 bg-[#00897B] rounded-full absolute top-0 -translate-y-1/2 translate-x-[152px]'>
                <h1 className='my-auto h-full flex justify-center items-center'>R</h1>
              </div>

              <div className='h-full w-full pt-14 bg-white rounded-xl text-black'>
                <div className='flex justify-between mb-2 pl-8 pr-12'>
                  <FaQuoteLeft className='text-[#BBBBBB] text-3xl'/>
                  <div className='flex justify-center items-center'>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                  </div>
                </div>

                <h1 className='w-2/3 text-xl text-left mx-auto mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                
                <FaQuoteRight className='text-[#BBBBBB] text-3xl ml-auto mr-8'/>
              </div>
            </div>

            <button className='h-64 text-action-color text-5xl flex justify-center items-center'><FaArrowRight /></button>

            <div className='h-64 min-w-96 relative'>
              <div className='w-20 h-20 bg-[#8D6E63] rounded-full absolute top-0 -translate-y-1/2 translate-x-[152px]'>
                <h1 className='my-auto h-full flex justify-center items-center'>A</h1>
              </div>

              <div className='h-full w-full pt-14 bg-white rounded-xl text-black'>
                <div className='flex justify-between mb-2 pl-8 pr-12'>
                  <FaQuoteLeft className='text-[#BBBBBB] text-3xl'/>
                  <div className='flex justify-center items-center'>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                    <FaStar className='text-[#FDD663] text-xl'/>
                  </div>
                </div>

                <h1 className='w-2/3 text-xl text-left mx-auto mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                
                <FaQuoteRight className='text-[#BBBBBB] text-3xl ml-auto mr-8'/>
              </div>
            </div>

        </div>
        <div className='w-40 border-t mx-auto border-primary-color-1'></div>
    </div>
  )
}
