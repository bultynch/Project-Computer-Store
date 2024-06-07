import React from 'react'
import Producto from '../Components/ProductCard'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import BuildPcSelection from '../Components/BuildPcSelection'
import UseStateProactice from '../Components/UseStateProactice'

function BuildPcPage() {

  const images = {
    '1': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    '2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg',
    '3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38985_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_dc6dd37e-grn.jpg',
  };

  return (
    <div>
      
      <NavBar />

      <div className='my-20 mx-40 flex items-center justify-between'>

        <BuildPcSelection />

        <div className=''>

          <div className='my-10'>
            <Producto nombre="Placa de Video XFX Radeon RX 6650 XT 8GB" precio={800000} imagen={images['1']}/>
          </div>

          <div className='my-10'>
            <Producto nombre='Procesador AMD Ryzen 7 5800x' precio={250000} imagen={images['2']}/>
          </div>

          <div className='my-10'>
            <Producto nombre='Placa de Video ASUS GeForce RTX 4060 8GB' precio={500000} imagen={images['3']}/>
          </div>

        </div>        

      </div>

      <UseStateProactice />

      <Footer />

    </div>
  )
}

export default BuildPcPage