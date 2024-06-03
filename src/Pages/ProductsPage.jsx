import React from 'react';
import NavBar from '../Components/NavBar';
import Product from '../Components/ProductCard';
import ProductCategory from '../Components/ProductCategory'
import Footer from '../Components/Footer'
import ProductCard2 from '../Components/ProductCard2';

function ProductsPage() {
  return (
    <div className='bg-gray-50'>
      <NavBar />

      <div className='mt-20 mx-40 flex items-center justify-between'>

        <div className='mr-5 bg-white'>
          <ProductCategory />
        </div>

        <div className='bg-white'>
          <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>
        </div>

      </div>

      <ProductCard2 />

      <Footer />

    </div>
  )
};

export default ProductsPage