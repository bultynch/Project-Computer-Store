import React from 'react'
import { Link } from 'react-router-dom';

function SecondNavBar() {
  return (
    <div className='w-full h-14 bg-violet-900 flex items-center justify-center dark:bg-violet-950'>
      <div className='text-white text-md flex flex-wrap justify-center'>
        <Link to='/products' className='py-4 px-4 lg:mx-20 md:mx-10 sm:mx-2 my-2 hover:bg-white hover:bg-opacity-20'>PRODUCTOS</Link>
        <Link to='/buildpc' className='py-4 px-4 lg:mx-20 md:mx-10 sm:mx-2 my-2 hover:bg-white hover:bg-opacity-20'>ARMÁ TU PC</Link>
        <Link to='/help' className='py-4 px-4 lg:mx-20 md:mx-10 sm:mx-2 my-2 hover:bg-white hover:bg-opacity-20'>AYUDA</Link>
        <Link to='/sponsors' className='py-4 px-4 lg:mx-20 md:mx-10 sm:mx-2 my-2 hover:bg-white hover:bg-opacity-20'>NUESTROS SPONSORS</Link>
      </div>
    </div>
  )
}

export default SecondNavBar
