import React from 'react'
import { Link } from 'react-router-dom';

function SecondNavBar() {
  return (
    <div className='gap-4 sm:gap-6 md:gap-10 w-full h-14 flex items-center justify-center text-sm text-white bg-violet-900'>

      <Link to='/products' className='text-center hover:text-gray-400'>PRODUCTOS</Link>

      <Link to='/buildpc' className='text-center hover:text-gray-400'>ARMÁ TU PC</Link>

      <Link to='/help' className='text-center hover:text-gray-400'>AYUDA</Link>

      <Link to='/sponsors' className='inline-block text-center hover:text-gray-400'>SPONSORS</Link>

    </div>
  )
}

export default SecondNavBar
