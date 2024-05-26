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
        <ProductCard3/>
      </div>

      <div className='mx-40 pt-20'>
        <Especifications />
      </div>

      <Footer />
    </div>
  )
}

export default ProductIndividualPage