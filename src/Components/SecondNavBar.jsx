import React from 'react'
import { Link } from 'react-router-dom';

function SecondNavBar() {
  return (
    <div className='w-full h-14 bg-violet-900 flex items-center justify-center dark:bg-violet-950'>

      <div className='flex justify-center text-white text-sm'>

        <Link to='/products' className='mx-3 hover:text-gray-400 lg:mx-6'>PRODUCTOS</Link>

        <Link to='/buildpc' className='mx-3 lg:mx-6 hover:text-gray-400'>ARMÁ TU PC</Link>

        <Link to='/help' className='mx-3 lg:mx-6 hover:text-gray-400'>AYUDA</Link>

        <Link to='/sponsors' className='mx-3 lg:mx-6 hover:text-gray-400'>NUESTROS SPONSORS</Link>

      </div>

    </div>
  )
}

export default SecondNavBar
