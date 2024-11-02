import React from 'react';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar';
import ProductCardCart from '../Components/Product/ProductCardCart'
import { Link } from 'react-router-dom';


function Cart() {

  return (
    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <NavBar />
      <SecondNavBar />

      <div className='gap-2 m-2 sm:mx-10 md:mx-20 lg:mx-auto lg:max-w-3xl flex flex-grow flex-col lg:items-center'>

        <div className='w-full text-left dark:text-white'>
          <h1 className='text-2xl font-bold'>Detalle de la compra</h1>
          <h2 className='mt-2 text-md'>Asegúrate de controlar los items de la lista antes de continuar</h2>
        </div>

        <div className='my-4 w-full border rounded-md shadow-sm bg-white'>

          <div className='w-full p-4 flex flex-row justify-between'>
            <h1 className='text-lg font-semibold'>Producto</h1>
          </div>

          <div>
            <ProductCardCart />
            <ProductCardCart />
            <ProductCardCart />
            <ProductCardCart />
          </div>

          <div className='p-6 flex flex-row justify-end rounded-b-md text-lg text-white bg-cc1'>
            <h1 className='mr-2'>Total:</h1>
            <h1 className='font-semibold'>$12,048.20</h1>
          </div>
        </div>

        <div className='w-full p-6 my-4 border rounded-md shadow-sm bg-white'>
          <h1 className='font-semibold text-lg'>Datos de envío</h1>

          <div className=''>
            <input type='text' placeholder='Nombre y apellido' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
            <input type='text' placeholder='Dirección' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />

            <div className='my-2 flex items-start justify-center text-sm'>
              <input type='text' placeholder='Piso' className='px-1 mr-2 w-32 h-11 text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
              <input type='text' placeholder='Número departamento' className='px-1 w-full h-11 text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
            </div>

            <input type='text' placeholder='Ciudad' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
            <input type='text' placeholder='Provincia' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
          </div>
        </div>

        <div className='w-full my-4 p-6 border rounded-md shadow-sm bg-white'>
          <h1 className='font-semibold text-lg'>Pago</h1>

          <div className=''>
            <input type='text' placeholder='Número de la tarjeta' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />

            <div className='my-2 flex items-start justify-center text-sm'>
              <input type='text' placeholder='Fecha de vencimiento' className='px-1 mr-2 w-1/2 h-11 text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
              <input type='text' placeholder='Código de seguridad' className='px-1 w-1/2 h-11 text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
            </div>

            <input type='text' placeholder='Nombre del titular' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700' />
          </div>
        </div>
        
        <Link to='/succesfulBuy' className='mt-6 mb-4 w-full flex items-center justify-center'>
          <button className='w-full py-4 rounded-lg border-2 shadow-sm border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600'>
            <h1 className='font-semibold'>Finalizar compra</h1>
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
