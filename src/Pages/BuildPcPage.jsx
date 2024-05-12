import React from 'react'
import Producto from '../Components/Product'
import ProductCategory from '../Components/ProductCategory'

function BuildPcPage() {
  return (
    <div>
        <ProductCategory />
        <Producto nombre="Placa de video RTX 4080" precio="800.000"/>

    </div>
  )
}

export default BuildPcPage