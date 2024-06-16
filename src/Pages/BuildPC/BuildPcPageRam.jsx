import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../../Components/BuildPcSelection';
import ProductCard4 from '../../Components/Product/ProductCard4';

function BuildPcPageMother2() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className=''>
        <NavBar />
      </div>

      <div className='px-80 py-4 flex flex-col bg-gray-50'>

        <div className='flex items-center justify-between'>
          <Link to='/mother1' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/font' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-start justify-between py-2'>
          
          <div className='w-128 p-4 rounded-lg border shadow-sm bg-white'>
            <BuildPcSelection />
          </div>



          <div className='flex flex-col items-center'>

            <div className='mb-5 bg-white'>
              <ProductCard4 nombre='Memoria Team DDR4 8GB 3200MHz' precio={27000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24796_Memoria_Team_DDR4_8GB_3200MHz_Elite_Plus_Red_CL_22_f8b42869-grn.jpg'/>
            </div>

            <div className='mt-5 bg-white'>
              <ProductCard4 nombre='Memoria Team DDr4 16GB 3200MHz' precio={50000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38661_Memoria_Team_DDR4_16GB_3200Mhz_Vulcan_ASUS_TUF_Alliance_CL16_df660a5c-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageMother2
