import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../../Components/BuildPcSelection';
import ProductCard4 from '../../Components/Product/ProductCard4';
import SecondNavBar from '../../Components/SecondNavBar';

function BuildPcPageMother2() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className=''>
        <NavBar />
        <SecondNavBar />
      </div>

      <div className='p-2 gap-2 sm:px-10 lg:px-20 xl:px-40 2xl:px-0 flex-grow flex flex-col 2xl:items-center bg-violet-50 dark:bg-neutral-700'>

        <div className='2xl:gap-[960px] flex items-center justify-between 2xl:items-between'>

          <Link to='/ram' className="w-44 h-14 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>

          <Link to='/case' className="w-44 h-14 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>

        </div>

        <div className='md:flex justify-between gap-2 2xl:w-[1312px]'>
          
          <div className='mb-2 lg:m-0 w-full'>
            <BuildPcSelection />
          </div>

          <div className='w-full'>

            <div className='mb-2'>
              <ProductCard4 nombre='Fuente Cougar 750W 80 Plus Gold GEC750' precio={123000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39112_Fuente_Cougar_750W_80_Plus_Gold_GEC750_1d2f2d18-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageMother2
