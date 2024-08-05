import React from 'react';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar';
import ProductCardCart from '../Components/Product/ProductCardCart'

function Cart() {

  return (

    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <NavBar />
      <SecondNavBar />

      <div className='m-2 flex-grow gap-2 '>

        <div className=''>
          <h1 className='text-2xl font-bold'>Detalle de la compra</h1>
          <h2 className='mt-2 text-md'>Asegurate de controlar los items de la lista antes de continuar</h2>
        </div>

        <div className='my-4 border rounded-lg shadow-sm bg-violet-200'>

          <div className='px-4 py-2 flex flex-row justify-between'>

            <div className='w-1/2'>
              <h1 className=''>Producto</h1>
            </div>

            <div className=' w-1/2 flex justify-between '>
              <h1 className='ml-5'>Cantidad</h1>
              <h1 className='mr-5'>Total</h1>
            </div>
            
          </div>

          <div>
            <ProductCardCart />
            <ProductCardCart />
            <ProductCardCart />
            <ProductCardCart />            
          </div>

          <div className='p-2'>
            <h1 className='text-lg font-semibold'>Total: $$$$$</h1>
          </div>

        </div>

        <div className='w-full  h-128 bg-yellow-500'>
          <h1>Seccion direccion y envio</h1>
        </div>
        
        <div className='mt-6 mb-4 w-full flex items-center justify-center'>
          <button className='w-full py-4  rounded-lg border shadow-sm border-green-600  bg-green-600 text-white hover:bg-green-100 hover:text-green-600 hover:border-green-600'>
            <h1 className='font-semibold'>Finalizar comprar</h1>
          </button>
        </div>

      </div>

      <Footer />
      
    </div>
    
  );
}
 export default Cart;