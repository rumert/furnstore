import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../lib/firebase/firebase'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

export default async function Product({ params }: any) {

    const productQuery = query(collection(db, "products"), where("id", "==", params.id))
    const snap = await getDocs(productQuery)
    let product: any = null
    snap.forEach((doc) => {
      product = doc.data()
    })
  return (
    <div className='row-span-2 grid grid-cols-2 gap-12 text-[#2c2c2c] font-semibold'>
      <div className='col-span-1 flex justify-center items-start'>
        <div className='w-[80%] bg-white aspect-square relative rounded-xl'>
          <Image  
          fill
          sizes='50vw'
          className='object-contain' 
          src={product.url}
          alt={product.name} 
          />
        </div>
      </div>
      
      <div className='col-span-1 flex flex-col gap-8 p-8'>

        <div className='flex flex-col gap-2'>
          <h1>{product.name}</h1>
          <div className='flex text-xl text-base-color-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <p className='ml-2 text-base'>(213 reviews)</p>
          </div>
          <p>
            <span className="inline-block text-5xl mr-1">${product.price }</span>
            <span className="inline-block line-through text-[#D0D0D0]">${Number(product.price) + 30}</span>
          </p>

        </div>

        <hr className='border-base-color-2'/>
        
        <div className='flex justify-around'>

          <div>
            <p className='text-2xl'>Color:</p>
            <div className='flex gap-2'>
              <button className='w-6 aspect-square bg-red-700 rounded-full'></button>
              <button className='w-6 aspect-square bg-gray-700 rounded-full'></button>
            </div>
          </div>
          
          <select name="warranty" id="warranty" className='my-auto h-2/3 text-xl'>
            <option value="" disabled selected >Warranty</option>
            <option value="1">1 Year Warranty (+10$)</option>
            <option value="2">2 Year Warranty (+20$)</option>
            <option value="3">3 Year Warranty (+30$)</option>
          </select>

        </div>
        <hr className='border-base-color-2'/>

        <div className='flex gap-4 justify-evenly'>

          <div className='flex gap-1 justify-center items-center text-2xl'>
            <button className='w-8 h-8 border-2 border-base-color-2 flex justify-center items-center'>-</button>
            <p className='w-8 h-8 border-2 border-base-color-2 flex justify-center items-center'>1</p>
            <button className='w-8 h-8 border-2 border-base-color-2 flex justify-center items-center'>+</button>
          </div>

          <button className='bg-action-color rounded-2xl p-3 text-2xl '>
            Add To Cart
          </button>

        </div>
        <hr className='border-base-color-2'/>

        <div>
          <h2 className='text-3xl text-white'>Description</h2>
          <p className='text-lg'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
