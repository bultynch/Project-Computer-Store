import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductCard3 from '../Components/Product/ProductCard3';
import Especifications from '../Components/Especifications';
import SecondNavBar from '../Components/SecondNavBar';
import ScrollTopButton from '../Components/ScrollTopButton';

function ProductIndividualPage() {
  return (
    <div className='bg-violet-50 dark:bg-neutral-700'>

      <NavBar />

      <SecondNavBar />

      <div className='m-2'>

        <ProductCard3 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={1800000} />

        <div className='my-2 py-2 flex items-center justify-center bg-white rounded-lg border shadow-sm'>
          <h1 className='mx-1 text-md '>Especificaciones</h1>
          <h1 className='mx-1 text-md '>Preguntas</h1>
          <h1 className='mx-1 text-md '>Rendimiento</h1>
          <h1 className='mx-1 text-md '>Comportamiento</h1>
        </div>

        <div className='my-2'>
          <Especifications />
        </div>

      </div>

      <ScrollTopButton />

      <Footer />

    </div>
  );
}

export default ProductIndividualPage;