import GetProducts from './GetProducts';
import ProductList from './ProductList';

export default async function Rooms({ room }: any) {

  const { data: products } = await GetProducts(room)

  return (
    <div className='p-8 grid grid-cols-5'>
      <div className='bg-base-color-2 col-span-1 rounded-xl text-center'>
        <h1 className='text-2xl mt-4'>COMING SOON</h1>
      </div> {/* filtering coming soon */}
      <div className='col-span-4'>
        <div className='bg-base-color-2 h-16 mx-4 py-3 text-center rounded-xl'>
          <h1>COMING SOON</h1>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  )
}