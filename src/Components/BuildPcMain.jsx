import React from 'react'
import { Link } from 'react-router-dom'

function BuildPcMain() {
  return (
    <div className='flex items-center justify-start bg-cover bg-no-repeat bg-opacity-90 w-full h-128 sm:h-144' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-nintendo2.jpg'})`}}>

      <div className='mb-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40 flex flex-col'>

        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat'>Armá Tu PC Ahora</h1>
        <p className='text-white py-2 text-base sm:text-lg md:text-xl font-montserrat'>Encontrá los últimos componentes al mejor precio.</p>
        <Link to="/buildPC" className='my-2 py-2 px-4 text-white text-base sm:text-lg md:text-xl text-center font-montserrat rounded-xl border border-white bg-white bg-opacity-30 hover:bg-opacity-50'>Comenzar</Link>

      </div>       
    </div>
  )
}

export default BuildPcMain
