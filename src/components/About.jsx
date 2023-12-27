import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <div className='p-6 bg-[#343F54] text-white grow'>
      <div className='border-[20px] p-32 h-full flex flex-col justify-center'>
        <div className=''>
          <TypeAnimation sequence={[
            '',
            1000,
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
            ]}
            wrapper="span"
            speed={75}
            repeat={0}
            className='md:text-4xl sm:text-3xl text-2xl font-bold inline-block'
          />
        </div>
      </div>
    </div>
  )
}

export default About