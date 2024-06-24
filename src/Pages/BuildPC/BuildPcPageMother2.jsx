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

      <div className='flex-grow px-80 py-4 flex flex-col bg-violet-50 dark:bg-neutral-700'>

        <div className='flex items-center justify-between'>
          <Link to='/processor2' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/ram' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-start justify-between py-2'>
          
          <div className=''>
            <BuildPcSelection />
          </div>



          <div className='flex flex-col items-center'>

            <div className='mt-5'>
              <ProductCard4 nombre='Mother ASUS PRIME H610M-K DDR4 S1700' precio={113000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_32527_Mother_ASUS_PRIME_H610M-K_DDR4_S1700_ae2a81ba-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageMother2

