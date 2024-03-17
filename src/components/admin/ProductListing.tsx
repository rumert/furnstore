'use client'
import Image from "next/image"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

export default function ProductListing (  { room, products } : any) {

    const [isHidden, setIsHidden] = useState(true)

    function handleMenu() {
        setIsHidden(!isHidden)
    }

    return (

    <div className='flex flex-col justify-center items-center py-2 px-4 w-screen'>
        <button onClick={handleMenu} className='w-full flex justify-center items-center border-2 border-primary-color-1'>
            {isHidden ? <FaArrowRight className="text-action-color mr-2" /> : <FaArrowDown className="text-action-color mr-2" />}
            {room}
        </button>
        {!isHidden && products?.map((product: any, index: any) => {
            const width = (Number(product.width)/100).toString()
            console.log(width)
            return (
                <div className='w-full flex items-center gap-8 pl-3 py-1 border border-t-0 border-primary-color-1 rounded-md' key={index}>
                    <div className="relative h-96 w-96">
                        <Image 
                        sizes={width}
                        fill
                        className='object-contain rounded-xl' 
                        src={product.url}
                        alt="product" 
                        />
                    </div>
                    <h1 className='text-2xl'>{product.name}</h1>
                    <h1 className='text-2xl'>{product.price}$</h1>
                </div>
            )
        })}   
    </div>  

    )    
}