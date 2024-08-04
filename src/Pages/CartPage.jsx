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

      <div className='gap-2 m-2'>

        <div className='bg-red-900'>
          <h1 className='text-2xl font-bold'>Detalle de la compra</h1>
          <h2 className='text-lg'>Asegurate de controlar los items de la lista antes de continuar</h2>
        </div>

        <div className='bg-green-500'>

          <div className='p-2 flex flex-row justify-between'>
            <h1 className='w-1/2'>Producto</h1>
            <h1 className=''>Cantidad</h1>
            <h1 className=''>Precio</h1>
            <h1 className=''>Total</h1>
          </div>

          <div>
            <ProductCardCart />
          </div>

        </div>

      </div>

      <Footer />
      
    </div>
    
  );
}
 export default Cart;