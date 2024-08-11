import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar';

function Cart() {

  return (
    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <NavBar />
      <SecondNavBar />

      <div className='gap-4 mt-20 mx-2 flex flex-grow flex-col items-center'>

        <div className='w-full dark:text-white'>
          <h1 className='text-center text-2xl font-bold'>Compra realizada con éxito.</h1>
          <h2 className='mt-2 text-center text-md'>Te enviamos un email con los detalles de la compra.</h2>
        </div>
        
        <div className='gap-4 w-full flex flex-col items-center justify-center'>

          <button className='w-80 py-4 text-center rounded-lg border-2 shadow-sm border-violet-900 bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900'>
            <Link to='/' className='font-semibold'>Volver a comprar</Link>
          </button>

          <button className='w-64 py-4 text-center rounded-lg border-2 shadow-sm border-violet-300 bg-violet-300 text-white hover:bg-white hover:text-violet-900'>
            <Link to='/pfdPage' className='font-semibold'>Imprimir PDF</Link>
          </button>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
