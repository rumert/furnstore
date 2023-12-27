
import chair1 from '../assets/chair.jpg'

const ProductList = (props) => { 

    const imageList = [chair1]

    return (

    <div className='grid grid-cols-3 gap-8'>
        {props.products.map(product => 
        <div className='border rounded-xl h-[30rem]' key={product.id}>
            <div className='h-96'><img className='h-full w-full object-contain border rounded-xl' src={imageList[0]} alt="chair1" /></div>
            <h1 className='text-2xl pl-8 pt-2'>{product.title}</h1>
            <h1 className='text-2xl pl-8'><button className='bg-cyan-200'>{product.price}</button></h1>
        </div>
        )}   
    </div>  

    )    
}

export default ProductList