import React from 'react'
import { Link } from 'react-router-dom';

function SecondNavBar() {
  return (
    <div className='w-full h-14 bg-violet-800 flex items-center justify-center'>
        <div className='text-white text-lg'>

            <Link to='/products' className='mx-20'>PRODUCTOS</Link>
            <Link to='/buildpc' className='mx-20'>ARMÁ TU PC</Link>
            <Link to='/help' className='mx-20'>AYUDA</Link>
            <Link to='/sponsors' className='mx-20'>NUESTROS SPONSORS</Link>

        </div>
    </div>
  )
}

export default SecondNavBar