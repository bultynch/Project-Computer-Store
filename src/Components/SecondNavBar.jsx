import React from 'react'
import { Link } from 'react-router-dom';

function SecondNavBar() {
  return (
    <div className='w-full h-14 bg-violet-900 flex items-center justify-center dark:bg-violet-950'>
      <div className='text-white text-md flex flex-wrap justify-center'>
        <Link to='/products' className='lg:mx-20 md:mx-10 sm:mx-2 my-2'>PRODUCTOS</Link>
        <Link to='/buildpc' className='lg:mx-20 md:mx-10 sm:mx-2 my-2'>ARMÁ TU PC</Link>
        <Link to='/help' className='lg:mx-20 md:mx-10 sm:mx-2 my-2'>AYUDA</Link>
        <Link to='/sponsors' className='lg:mx-20 md:mx-10 sm:mx-2 my-2'>NUESTROS SPONSORS</Link>
      </div>
    </div>
  )
}

export default SecondNavBar
