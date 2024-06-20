import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../../Components/BuildPcSelection';
import ProductCard4 from '../../Components/Product/ProductCard4';

function BuildPcPageProcessor2() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className=''>
        <NavBar />
      </div>

      <div className='flex-grow px-80 py-4 flex flex-col bg-violet-50 dark:bg-neutral-700'>

        <div className='flex items-center justify-between'>
          <Link to='/buildPc' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/mother1' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-start justify-between py-2'>
          
          <div className=''>
            <BuildPcSelection />
          </div>



          <div className='flex flex-col items-center'>

            <div className='ml-2 mb-2'>
              <ProductCard4 nombre='Procesador AMD Ryzen 7 5800x' precio={360000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg'/>
            </div>

            <div className='ml-2 my-2'>
              <ProductCard4 nombre='Procesador AMD Ryzen 5 5600x' precio={230000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageProcessor2

