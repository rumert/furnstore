import React from 'react'
import ProductListing from './ProductListing'
import GetProducts from '../product/GetProducts'

export default async function ManageProducts() {

    const  { data: kitchenProducts } = await GetProducts('kitchen')
    const  { data: bedroomProducts } = await GetProducts('bedroom')
    const  { data: livingRoomProducts } = await GetProducts('livingRoom')

  return (
    <div>
        <ProductListing room={'Kitchen'} products={kitchenProducts}/>
        <ProductListing room={'Bedroom'} products={bedroomProducts}/>
        <ProductListing room={'Living Room'} products={livingRoomProducts}/>
    </div>
  )
}
