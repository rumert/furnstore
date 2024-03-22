'use client'
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMugHot } from "react-icons/fa6";

function Contacts() {

    const [faqIsActive, setFaqIsActive] = useState(Array.from({ length: 4 }, () => false));

    const handleFaqIsActive = (button: number) => {
        let newFaqIsActive = Array.from({ length: 4 }, () => false);
        newFaqIsActive[button] = !faqIsActive[button] 
        setFaqIsActive(newFaqIsActive)
    }

  return (
    <div className='text-white grow flex flex-col py-2 lg:py-4'>
        <div className='grow flex justify-evenly'>
            
            <div className='before:block before:pt-[100%] m-7 rounded-3xl md:rounded-[4rem] overflow-hidden xl:m-5 w-[calc(50%_-_56px)] xl:w-[calc(33%_-_40px)] relative border-4 border-primary-color-1 shadow-xl shadow-[rgba(110,72,54,0.4)] '>
                <div className='absolute top-0 left-0 bottom-0 right-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17045966.50514465!2d-103.58402475513248!3d42.47656853425509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b506293191ad%3A0xa35171da05d52d5f!2sGoogle!5e0!3m2!1sen!2str!4v1702811224315!5m2!1sen!2str" 
                        width="100%" 
                        height="100%" 
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className='before:block before:pt-[100%] m-7 rounded-3xl md:rounded-[4rem] overflow-hidden xl:m-5 w-[calc(50%_-_56px)] xl:w-[calc(33%_-_40px)] relative border-4 border-primary-color-1 shadow-xl shadow-[rgba(110,72,54,0.4)] '>
                <div className='text-center absolute top-10 left-0 bottom-0 right-0 h-full flex flex-col gap-1'>
                    <button onClick={() => handleFaqIsActive(0)} className='w-full h-1/6 border-b-2 border-primary-color-2'>FAQ1</button>
                    {faqIsActive[0] && <div className='border-b-2 border-primary-color-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>}
                    
                    <button onClick={() => handleFaqIsActive(1)} className='w-full h-1/6 border-b-2 border-primary-color-2'>FAQ2</button>
                    {faqIsActive[1] && <div className='border-b-2 border-primary-color-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>}
                    
                    <button onClick={() => handleFaqIsActive(2)} className='w-full h-1/6 border-b-2 border-primary-color-2'>FAQ3</button>
                    {faqIsActive[2] && <div className='border-b-2 border-primary-color-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>}
                    
                    <button onClick={() => handleFaqIsActive(3)} className='w-full h-1/6'>FAQ4</button>
                    {faqIsActive[3] && <div className='border-t-2 border-primary-color-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>}
                </div>
            </div>

        </div>

        <div className='grow h-[25%] flex justify-center items-center text-2xl lg:text-4xl'>
            <h1>LET US BUY YOU A CUP OF COFFEE </h1>
            <FaMugHot className='text-primary-color-2 ml-2 mb-2'/>
        </div>

        <div className='grow flex justify-evenly'>
           
            <div className='before:block before:pt-[100%] m-7 rounded-3xl md:rounded-[4rem] overflow-hidden xl:m-5 w-[calc(50%_-_56px)] xl:w-[calc(33%_-_40px)] relative border-4 border-primary-color-1 shadow-xl shadow-[rgba(110,72,54,0.4)] '>
                <div className='absolute top-[8%] left-[10%] bottom-[16%] right-[10%] flex flex-col gap-[3%]'>
                    <h1 className='text-2xl md:text-4xl text-center mb-[8%]'>EMAIL US</h1>
                    <div className='h-[20%] relative'><FaUser className='absolute top-[50%] translate-y-[-50%] left-3 text-gray-500 texl-lg sm:text-xl ' /><input type="text" placeholder='Name' className='texl-lg sm:text-xl text-black w-full h-full pl-8 sm:pl-10 rounded-2xl' /></div>
                    <div className='h-[20%] relative'><MdEmail className='absolute top-[50%] translate-y-[-50%] left-3 text-gray-500 text-lg sm:text-xl' /><input type="email" placeholder='Email' className='texl-lg sm:text-xl text-black w-full h-full pl-8 sm:pl-10 rounded-2xl' /></div>
                    <textarea placeholder='Message' className='texl-lg sm:text-xl md:text-2xl text-black rounded-xl md:rounded-2xl mt-1 md:mt-2 pl-2 md:pl-4 pt-1 md:pt-2' rows={7}></textarea>
                </div>
            </div>

            <div className='before:block before:pt-[100%] m-7 rounded-3xl md:rounded-[4rem] overflow-hidden xl:m-5 w-[calc(50%_-_56px)] xl:w-[calc(33%_-_40px)] relative border-4 border-primary-color-1 shadow-xl shadow-[rgba(110,72,54,0.4)] '>
                <div className='absolute top-[8%] md:top-[12%] left-[10%] bottom-[16%] right-[10%] flex flex-col'>
                    <h1 className='text-lg md:text-xl mb-2 sm:mb-4 md:mb-8'>Phone: 12345678987</h1>
                    <h1 className='text-lg md:text-xl mb-2 sm:mb-4 md:mb-8'>Email address: emailadress@gmail.com</h1>
                    <h1 className='text-lg md:text-xl mb-2 sm:mb-4 md:mb-8'>Adress: 123 Anywhere st., Any City, ST 12345</h1>
                    <h1 className='text-lg md:text-xl mb-2 sm:mb-4 md:mb-8 pt-2 md:pt-4 text-center border-t border-t-gray-500'>9:00 to 17:00, Mon-Fri <span className='block'>(Excluding Holidays)</span></h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contacts