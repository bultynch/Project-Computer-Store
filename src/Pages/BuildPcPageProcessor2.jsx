import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import BuildPcSelection from '../Components/BuildPcSelection';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard4 from '../Components/ProductCard4';

function BuildPcPageProcessor21() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className='shadow-sm'>
        <NavBar />
      </div>

      <div className='px-80 py-10 flex flex-col bg-gray-50'>

        <div className='flex items-center justify-between'>
          <Link to='/buildPc' className="w-44 h-14 mb-5 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/mother2' className="w-44 h-14 mb-5 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-center justify-between '>
          
        <div className='p-4 shadow-sm rounded-lg bg-white'>
            <BuildPcSelection />
          </div>

          

          <div className=''>

            <div className='mb-5 bg-white'>
              <ProductCard4 nombre='Procesador Intel Core i3 14100' precio={196000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38619_Procesador_Intel_Core_i3_14100_4.7GHz_Turbo_Socket_1700_Raptor_Lake_10f60e03-grn.jpg'/>
            </div>

            <div className='mt-5 bg-white'>
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