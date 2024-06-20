import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductCard3 from '../Components/Product/ProductCard3';
import Especifications from '../Components/Especifications';
import SecondNavBar from '../Components/SecondNavBar';

function ProductIndividualPage() {
  return (
    <div className='bg-gray-50'>

      <NavBar />

      <SecondNavBar />

      <div className='px-4 md:px-20 md:pt-10 lg:px-80 lg:pt-10'>

        <ProductCard3 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={1800000} />

      </div>

      <div className='my-10 md:my-10 mx-4 md:mx-20 lg:mx-80 py-4 flex flex-wrap items-center justify-center bg-white rounded-xl shadow-sm'>

        <h1 className='mx-10 text-sm md:text-lg'>ESPECIFICACIONES</h1>
        <h1 className='mx-10 text-sm md:text-lg'>PREGUNTAS</h1>
        <h1 className='mx-10 text-sm md:text-lg'>RENDIMIENTO</h1>
        <h1 className='mx-10 text-sm md:text-lg'>COMPORTAMIENTO</h1>

      </div>

      <div className='mb-10 md:mx-20 lg:mx-80'>

        <Especifications />

      </div>

      <Footer />

    </div>
  );
}

export default ProductIndividualPage;