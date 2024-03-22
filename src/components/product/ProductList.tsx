import Image from "next/image"
import Link from "next/link"

export default function ProductList ({ products }: any) { 

    return (

    <div className='grid grid-cols-5 gap-8 p-10'>
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
            <Image 
            width={50}
            height={50}
            src='/images/tractor.svg'
            alt="tractor"
            className="inline-block"
            />
            <p className="inline-block h-full text-sm">FAST</p>   
            <h1 className="mt-2">{product.name}</h1>
            <h1>{product.price}$</h1>
            
        </Link>
        )}
        
    </div>  

    )    
}