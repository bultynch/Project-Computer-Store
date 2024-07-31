import React from 'react';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar';

function Cart() {

  return (

    <div className=''>

      <NavBar />

      <SecondNavBar />


      <div className='m-2 bg-red-900'>

        <div>
          <h1 className='text-2xl font-bold'>Detalle de la compra</h1>
          <h2 className='text-lg'>Asegurate de controlar los items de la lista antes de continuar</h2>
        </div>

      </div>

      <Footer />
    </div>
    
  );
}
 export default Cart;