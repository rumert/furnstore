import Image from "next/image"
import Link from "next/link"
import { FaTruckFast } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export default function ProductList ({ products }: any) { 

    return (

    <div className='grid grid-cols-5 p-10'>
        {products?.map((product: any, index: any) => 
        <Link href='/' className='h-fit p-2 border-2 border-transparent hover:border-action-color hover:rounded-xl hover:bg-black hover:bg-opacity-10 rounded-xl' key={index}>
            <Image 
            width={product.width/10}
            height={product.height/10}
            sizes="30vw"
            className='rounded-xl mb-2' 
            src={product.url}
            alt="product" 
            />
            { index==1 ? <FaTruckFast className="text-primary-color-1 text-4xl"/> : <FaTruckArrowRight className="text-primary-color-1 text-4xl" />}
            <p className={`mb-4 text-primary-color-1 font-black ${index == 1 ? 'animate-[bounce_0.5s_infinite] duration-100 text-sm': 'text-xs'}`}>{index == 1 ? 'FAST' : '3-DAYS'} DELIVERY</p>
            <div className="relative">
                <FaXmark className="absolute top-0 left-0 text-slate-800 text-4xl" /> 
                <p className="w-fit inline-block mr-2">{Number(product.price) + 30}</p> 
                <p className="w-fit inline-block">{product.price }$</p>
            </div>
            <p className="mt-2">{product.name}</p>
        </Link>
        )}
        
    </div>  

    )    
}