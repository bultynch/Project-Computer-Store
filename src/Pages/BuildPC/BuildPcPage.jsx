import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import SecondNavBar from '../../Components/SecondNavBar'
import Footer from '../../Components/Footer'
import 'animate.css'


function BuildPcPage() {

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className='shadow-sm'>
        <NavBar />
      </div>

      <SecondNavBar />
      

      <div className="flex flex-grow items-center justify-center bg-violet-50 dark:bg-neutral-700">

        <div className='m-2 p-5 rounded-xl shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-white'>

          <h1 className='text-center font-normal text-2xl'>Selecciona la marca de tu procesador:</h1>
          
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center'>

            <div className='my-5 sm:m-5'>
              <Link to='/processor1'>
                <img src="https://www.venex.com.ar/images/configurador_pc/amd.png" alt="amd-logo" className=' hover:bg-black hover:opacity-80 rounded-xl'/>
              </Link>
            </div>

            <div className='sm:m-5'>
              <Link to='/processor2'>
                <img src="https://www.venex.com.ar/images/configurador_pc/intel.png" alt="intel-logo" className=' hover:bg-black hover:opacity-80 rounded-xl'/>
              </Link>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPage


