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

      <div className='flex-grow px-80 py-4 flex flex-col bg-gray-50 dark:bg-neutral-700'>

        <div className='flex items-center justify-between'>
          <Link to='/ram' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/buildpc' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>
        </div>

        <div className='h-160 flex items-start justify-between py-2'>
          
          <div className=''>
            <BuildPcSelection />
          </div>

          <div className='flex flex-col items-center'>
            <div className='mb-5'>
              <ProductCard4 nombre='Gabinete Antec NX292 MESH RGB Vidrio Templado' precio={65000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_35714_Gabinete_Antec_NX292_MESH_RGB_Vidrio_Templado_a017a79f-grn.jpg'/>
            </div>

            <div className='mt-5'>
              <ProductCard4 nombre='Gabinete Antec NX292 MESH White RGB Vidrio Templado' precio={68000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38038_Gabinete_Antec_NX292_MESH_White_RGB_Vidrio_Templado_2184f894-grn.jpg'/>
            </div>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageMother2
