import React from 'react';
import NavBar from './Components/NavBar';
import Product from './Components/Product'

function ProductsPage() {
  return (
    <div>
      <NavBar />

      <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>

    </div>

  )
}

export default ProductsPage