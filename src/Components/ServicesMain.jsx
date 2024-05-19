import React from 'react';

function servicios() {
  return (
    <div className='pt-6 pb-9 px-12'>

      <h1 className='flex items-center justify-start pb-6 text-5xl'><strong>Nuestros servicios</strong></h1>     

      <div className='mx-10 flex items-center justify-center '>

        <div className='mx-5 h-96 w-80 flex flex-col justify-end rounded-2xl bg-imagen-servicio-1 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 py-8 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Instalación de Windows</h1>
            <p className='p-2 text-center text-sm text-white'>Ofrecemos una configuración rápida y efectiva para su sistema, asegurando un uso óptimo en poco tiempo.</p>
          </div>
        </div>

        <div className='mx-5 h-128 w-80 flex flex-col justify-end rounded-2xl bg-imagen-servicio-2 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 py-8 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Reparación de PCs</h1>
            <p className='p-2 text-center text-sm text-white'>Especialistas en reparación de equipos informáticos. Solucionamos cualquier problema con eficiencia y rapidez.</p>
          </div>
        </div>

        <div className='mx-5 h-160 w-96 flex flex-col justify-end rounded-2xl bg-imagen-servicio-3 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-60 py-8 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Venta de componentes</h1>
            <p className='p-2 text-center text-sm text-white'>Amplio catálogo de componentes de computadora. Encuentra todo lo que necesitas para mejorar tu equipo.</p>
          </div>
        </div>

        <div className='mx-5 h-128 w-80 flex flex-col justify-end rounded-2xl bg-imagen-servicio-4 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 py-8 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Asesoramiento técnico</h1>
            <p className='p-2 text-center text-sm text-white'>Brindamos asesoramiento especializado para optimizar el rendimiento de tu computadora. Contactanos.</p>
          </div>
        </div>

        <div className='mx-5 h-96 w-80 flex flex-col justify-end rounded-2xl bg-imagen-servicio-5 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 py-8 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Limpieza PC</h1>
            <p className='p-2 text-center text-sm text-white'>Ofrecemos servicios profesionales de limpieza y mantenimiento de PC para garantizar ótimo rendimiento.</p>
          </div>
        </div>

      </div>
        
    </div>
  )
}

export default servicios