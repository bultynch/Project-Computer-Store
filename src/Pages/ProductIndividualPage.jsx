import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProductCard3 from '../Components/ProductCard3'
import Especifications from '../Components/Especifications'

function ProductIndividualPage() {
  return (
    <div>
      <NavBar />

      <div className='mx-40'>
        <ProductCard3 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>
      </div>

      <div className='my-20 mx-40 py-4 flex items-center justify-start rounded-b-xl shadow-lg'>
        <h1 className='mr-5 ml-2 border text-lg'>ESPECIFICAIONES</h1>
        <h1 className='mx-5 border text-lg'>PREGUNTAS</h1>
        <h1 className='mx-5 border text-lg'>RENDIMIENTO</h1>
        <h1 className='mx-5 border text-lg'>COMPORTAMIENTO</h1>

        <div>
          <div className="divider"></div>
        </div>
      </div>

      <div className='mx-40'>
        <Especifications />
      </div>

      <Footer />
    </div>
  )
}

export default ProductIndividualPage