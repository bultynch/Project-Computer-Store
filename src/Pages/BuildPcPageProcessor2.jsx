import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Product from '../Components/ProductCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function BuildPcPageProcessor2() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className='shadow-sm'>
        <NavBar />
      </div>

      <div className='mx-40 my-10 flex flex-col '>

        <div className='flex items-center justify-between'>
          <Link to='/buildPc' className="w-44 h-14 mb-5 px-4 py-2 flex items-center border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/buildPc' className="w-44 h-14 mb-5 px-2.5 py-2 flex items-center border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-center justify-between '>
          
          <div className=''>
            seccion 1 pasos
          </div>



          <div className=''>

            <div className='mb-5 '>
              <Product nombre='Procesador AMD Ryzen 7 5800x' precio={360000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg'/>
            </div>

            <div className='mt-5 bg-white'>
              <Product nombre='Procesador AMD Ryzen 5 5600x' precio={230000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageProcessor2
