import React from 'react'
import Producto from '../Components/Product'
import NavBar from '../Components/NavBar'

function BuildPcPage() {
  return (
    <div>
      
      <NavBar />

      <div className='mt-20 mx-40'>
        <Producto nombre="Placa de video RTX 4080" precio="800.000"/>
      </div>

    </div>
  )
}

export default BuildPcPage