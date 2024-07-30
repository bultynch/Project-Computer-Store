import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../../Components/BuildPcSelection';
import ProductCard4 from '../../Components/Product/ProductCard4';
import SecondNavBar from '../../Components/SecondNavBar';

function BuildPcPageProcessor2() {
  return (
    <div className='min-h-screen flex flex-col bg-violet-50 dark:bg-neutral-700'>

      <div>
        <NavBar />
        <SecondNavBar />
      </div>

      <div className='gap-2 m-2 sm:mx-10 lg:mx-60 xl:mx-0 flex flex-col flex-grow items-center'>

        <div className='xl:gap-x-[743px] w-full flex justify-between xl:justify-center'>

          <Link to='/buildPc' className="w-44 h-14 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">
            <FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior
          </Link>
          
          <Link to='/mother1' className="w-44 h-14 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">
            Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/>
          </Link>
          
        </div>

        <div className='w-full gap-2 xl:flex items-start xl:justify-center'>
          
          <div className='mb-2 w-full xl:w-128'>
            <BuildPcSelection />
          </div>

          <div className='w-full xl:w-144'>

            <div className='mb-2'>
              <ProductCard4 nombre='Procesador AMD Ryzen 7 5800x' precio={360000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg'/>
            </div>

            <ProductCard4 nombre='Procesador AMD Ryzen 5 5600x' precio={230000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg'/>

          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default BuildPcPageProcessor2;
