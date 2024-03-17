import GetProducts from './GetProducts';
import ProductList from './ProductList';

export default async function Rooms({ room }: any) {

  const { data: products } = await GetProducts(room)

  return (
    <div className='py-8 grid grid-cols-5'>
      <div></div> {/* filtering coming soon */}
      <div className='col-span-4'>
        <div className='h-16'></div>
        <ProductList products={products} />
      </div>
    </div>
  )
}