import GetData from './GetData';
import ProductList from './ProductList';

async function Rooms({ room }: any) {

  const products = await GetData(room)

  return (
    <div className='py-8 px-20'>
      <div className='h-12 border rounded-lg flex gap-12 px-12 py-2 mb-12'>
        <div className='border rounded-lg grow text-center'>Type</div>
        <div className='border rounded-lg grow text-center'>Price</div>
        <div className='border rounded-lg grow text-center'>Guarantee</div>
      </div> {/* filter bar */}
      <ProductList products={products} />
    </div>
  )
}

export default Rooms