import React from 'react';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar';

function Cart() {

  return (
    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <NavBar />
      <SecondNavBar />

      <div className='gap-2 m-2 sm:mx-10 md:mx-20 lg:mx-auto lg:max-w-3xl flex flex-grow flex-col lg:items-center'>

        <div className='w-96 text-center dark:text-white'>
          <h1 className='text-2xl font-bold'>Detalle de la compra</h1>
          <h2 className='mt-2 text-md'>Asegúrate de controlar los items de la lista antes de continuar</h2>
        </div>
        
        <div className='mt-6 mb-4 w-full flex items-center justify-center'>
          <button className='w-96 py-4 rounded-lg border-2 shadow-sm border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600'>
            <h1 className='font-semibold'>Finalizar compra</h1>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
