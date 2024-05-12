import React from 'react'
import { Link } from 'react-router-dom'

function BuildPcMain() {
  return (
    <div className='flex items-center justify-start bg-cover bg-no-repeat bg-opacity-90 w-full h-screen' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-console.jpg'})`}}>
      <div className='mb-20 ml-40 flex flex-col'>
        <h1 className='text-white text-7xl font-montserrat'>Armá Tu PC Ahora</h1>
        <p className='text-white py-2 text-xl font-montserrat'>Encontrá los últimos componentes al mejor precio.</p>
        <Link to="/buildPC" className='my-2 py-2 text-white text-xl text-center font-montserrat rounded border border-white bg-white bg-opacity-30 hover:bg-opacity-50'>Comenzar</Link>
      </div>       
    </div>
  )
}

export default BuildPcMain