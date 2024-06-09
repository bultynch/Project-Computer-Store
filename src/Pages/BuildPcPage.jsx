import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import 'animate.css'


function BuildPcPage() {

  const images = {
    '1': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    '2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg',
    '3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38985_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_dc6dd37e-grn.jpg',
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className='shadow-sm'>
        <NavBar />
      </div>
      

      <div className="flex flex-grow items-center justify-center">

        <div className='p-5 rounded-2xl shadow-md'>

          <h1 className='my-5 text-center font-normal text-2xl'>Selecciona la marca de tu procesador:</h1>
          
          <div className='flex items-center justify-center'>

            <Link to='/processor2'>
              <img src="https://www.venex.com.ar/images/configurador_pc/amd.png" alt="amd-logo" className='m-5 hover:bg-black hover:opacity-80 rounded-xl'/>
            </Link>

            <Link to='/processor21'>
              <img src="https://www.venex.com.ar/images/configurador_pc/intel.png" alt="intel-logo" className='m-5 hover:bg-black hover:opacity-80 rounded-xl'/>
            </Link>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPage


