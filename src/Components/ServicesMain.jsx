import React from 'react';

function servicios() {
  return (
    <div className='pt-6 pb-9 px-40'>

      <h1 className='flex items-center justify-start pb-6 text-5xl'><strong>Nuestros servicios</strong></h1>     

      <div className='px-10 flex items-center justify-center '>

        <div className='h-128 w-80 flex flex-col justify-end rounded-3xl bg-imagen-servicio-1 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-60 py-8 bg-[#00000080] rounded-b-3xl'>
            <h1 className='flex items-center justify-center p-2 text-2xl text-white'>Reparación de PCs</h1>
            <p className='p-2 text-center text-lg text-white'>Especialistas en reparación de equipos informáticos. Solucionamos cualquier problema con eficiencia y rapidez.</p>
          </div>
        </div>

        <div className='mx-6 h-144 w-96 flex flex-col justify-end rounded-3xl bg-imagen-servicio-2 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-60 py-8 bg-[#00000080] rounded-b-3xl'>
            <h1 className='flex items-center justify-center p-2 text-3xl text-white'>Venta de componentes</h1>
            <p className='p-2 text-center text-xl text-white'>Amplio catálogo de componentes de computadora. Encuentra todo lo que necesitas para mejorar tu equipo.</p>
          </div>
        </div>

        <div className='h-128 w-80 flex flex-col justify-end rounded-3xl bg-imagen-servicio-3 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-60 py-8 bg-[#00000080] rounded-b-3xl'>
            <h1 className='flex items-center justify-center p-2 text-2xl text-white'>Asesoramiento técnico</h1>
            <p className='p-2 text-center text-lg text-white'>Brindamos asesoramiento especializado para optimizar el rendimiento de tu computadora. Contactanos.</p>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default servicios