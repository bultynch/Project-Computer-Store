import React from 'react';
import NavBar from '../Components/NavBar';
import Product from '../Components/Product';
import ProductCategory from '../Components/ProductCategory'

function ProductsPage() {
  return (
    <div>
      <NavBar />

      <div className='mt-20 mx-40 flex items-center justify-between'>

  

        <div className=''>
          <ProductCategory title='Categorías'>
            <p>- AMD</p>
            <p>- Intel</p>
          </ProductCategory>

          <ProductCategory title='Filtros'>
            <p>- AMD</p>
            <p>- Intel</p>
          </ProductCategory> 
        </div>

        <div>
          <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>
        </div>

      </div>

    </div>

  )
}

export default ProductsPage