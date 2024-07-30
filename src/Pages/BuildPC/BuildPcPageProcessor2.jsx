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
    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <div>
        <NavBar />
        <SecondNavBar />
      </div>

      <div className='gap-2 m-2 sm:mx-10 lg:mx-60 xl:mx-0 flex flex-col flex-grow items-center'>

        <div className='xl:gap-x-[743px] w-full flex justify-between xl:justify-center'>

          <Link to='/buildPc' className="w-44 h-14 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>

          <Link to='/mother2' className="w-44 h-14 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>

        </div>

        <div className='w-full gap-2 xl:flex items-start xl:justify-center'>
          
          <div className='mb-2 w-full xl:w-128'>
            <BuildPcSelection />
          </div>

          <div className='w-full xl:w-144'>
            <div className='mb-2'>
              <ProductCard4 nombre='Procesador Intel Core i3 14100' precio={196000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38619_Procesador_Intel_Core_i3_14100_4.7GHz_Turbo_Socket_1700_Raptor_Lake_10f60e03-grn.jpg'/>
            </div>

            <ProductCard4 nombre='Procesador Intel Core i5 14400F' precio={305000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38616_Procesador_Intel_Core_i5_14400F_4.7GHz_Turbo_Socket_1700_Raptor_Lake_b51753f7-grn.jpg'/>

          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageProcessor21