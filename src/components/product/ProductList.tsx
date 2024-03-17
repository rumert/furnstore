import Image from "next/image"

export default function ProductList ({ products }: any) { 

    return (

    <div className='grid grid-cols-5 gap-8 p-10'>
        {products?.map((product: any, index: any) => 
        <div className='border-2 border-primary-color-1 rounded-xl' key={index}>
            <div className=''>
                <Image 
                width={product.width/10}
                height={product.height/10}
                className='rounded-xl' 
                src={product.url}
                alt="product" 
                />
            </div>
            <h1>{product.name}</h1>
            <h1>{product.price}$</h1>
        </div>
        )}   
    </div>  

    )    
}