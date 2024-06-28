import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import BuildPcSelection from '../../Components/BuildPcSelection';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard4 from '../../Components/Product/ProductCard4';
import SecondNavBar from '../../Components/SecondNavBar';

function BuildPcPageProcessor21() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className=''>
        <NavBar />
        <SecondNavBar />
      </div>

      <div className='flex-grow px-80 py-4 flex flex-col bg-violet-50 dark:bg-neutral-700'>

        <div className='flex items-center justify-between'>
          <Link to='/buildPc' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/mother2' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-start justify-between py-2'>
          
          <div className=''>
            <BuildPcSelection />
          </div>



          <div className='flex flex-col items-center'>

            <div className='ml-2 mb-2'>
              <ProductCard4 nombre='Procesador Intel Core i3 14100' precio={196000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38619_Procesador_Intel_Core_i3_14100_4.7GHz_Turbo_Socket_1700_Raptor_Lake_10f60e03-grn.jpg'/>
            </div>

            <div className='ml-2 mx-2'>
              <ProductCard4 nombre='Procesador Intel Core i5 14400F' precio={305000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38616_Procesador_Intel_Core_i5_14400F_4.7GHz_Turbo_Socket_1700_Raptor_Lake_b51753f7-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageProcessor21