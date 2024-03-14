import Image from "next/image"

export default function ProductList ({ room, products }: any) { 

    return (

    <div className='grid grid-cols-5 gap-8 p-10'>
        {products.map((product: any, index: any) => 
        <div className='border-2 border-primary-color-1 rounded-xl' key={product.id}>
            <div className='h-fit'>
                <Image 
                width={product.width/10}
                height={product.height/10}
                className='object-contain rounded-xl' 
                src={`/images/${room}/${index + 1}.jpg`}
                alt="product" 
                />
            </div>
            <h1 className='text-2xl pl-8 pt-2'>{product.title}</h1>
            <h1 className='text-2xl pl-8'><button className='bg-cyan-200'>{product.price}</button></h1>
        </div>
        )}   
    </div>  

    )    
}