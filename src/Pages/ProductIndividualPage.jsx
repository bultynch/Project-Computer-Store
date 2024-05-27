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

      <div className='mx-40 pt-20'>
        <Especifications />
      </div>

      <Footer />
    </div>
  )
}

export default ProductIndividualPage