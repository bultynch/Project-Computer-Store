import React from 'react';
import NavBar from '../Components/NavBar';
import Product from '../Components/Product';
import ProductCategory from '../Components/ProductCategory'

function ProductsPage() {
  return (
    <div>
      <NavBar />

      <div className='m-10 flex items-start justify-center'>
        <ProductCategory title='Procesadores'>
          <p>- AMD</p>
          <p>- Intel</p>
        </ProductCategory>
        
        <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>
      </div>

    </div>

  )
}

export default ProductsPage