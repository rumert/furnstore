
import { useParams } from 'react-router-dom/';
import useFetch from '../State/hooks/useFetch';
import ProductList from './ProductList';


function Rooms() {

  const { room } = useParams();
  const { data: kitchenProducts, isPending: kpending, error: kerror} = useFetch('http://localhost:3001/kitchen');
  const { data: livingRoomProducts, isPending: lpending, error: lerror} = useFetch('http://localhost:3001/livingRoom');
  const { data: bedroomProducts, isPending: bpending, error: berror} = useFetch('http://localhost:3001/bedroom');
  let products;

  if (room === 'kitchen') {
    products = 
        <>
          { kerror && <div>{kerror}</div> }
          { kpending && <div>...Loading</div>}
          { kitchenProducts && <ProductList products={kitchenProducts} /> }
        </>
  } else if (room === 'livingRoom') {
    products = 
        <>
          { lerror && <div>{lerror}</div> }
          { lpending && <div>...Loading</div>}
          { livingRoomProducts && <ProductList products={livingRoomProducts} /> }
        </>
  } else if (room === 'bedroom') {
    products = 
        <>
          { berror && <div>{berror}</div> }
          { bpending && <div>...Loading</div>}
          { bedroomProducts && <ProductList products={bedroomProducts} /> }
        </>
  }

  return (
    <div className='py-8 px-20'>
      <div className='h-12 border rounded-lg flex gap-12 px-12 py-2 mb-12'>
        <div className='border rounded-lg grow text-center'>Type</div>
        <div className='border rounded-lg grow text-center'>Price</div>
        <div className='border rounded-lg grow text-center'>Guarantee</div>
      </div> {/* filter bar */}
      {products}
    </div>
  )
}

export default Rooms