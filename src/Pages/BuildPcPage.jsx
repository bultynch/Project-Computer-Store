import React from 'react'
import Producto from '../Components/ProductCard'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function BuildPcPage() {
  return (
    <div>
      
      <NavBar />

      <div className='mt-20 mx-40'>
        <Producto nombre="Placa de video RTX 4080" precio="800.000"/>
      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPage