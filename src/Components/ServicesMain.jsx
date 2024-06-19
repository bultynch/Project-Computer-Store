import React from 'react';

function Servicios() {
  return (
    <div className='pt-6 pb-9 px-4 md:px-10 dark:bg-neutral-800'>

      <h1 className='flex items-center justify-start text-3xl md:text-4xl dark:text-white'><strong>Nuestros servicios</strong></h1>    
      <div className="divider"></div> 

      <div className='flex flex-wrap justify-between'>

        <div className='h-128 w-full sm:w-60 md:w-96 flex flex-col justify-end rounded-2xl bg-imagen-servicio-1 bg-cover bg-no-repeat hover:scale-105 sm:hover:scale-100 transition-transform'>
          <div className='h-52 p-6 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Instalación de Windows</h1>
            <p className='p-2 text-center text-sm text-white'>Ofrecemos una configuración rápida y efectiva para su sistema, asegurando un uso óptimo en poco tiempo.</p>
          </div>
        </div>

        <div className='h-128 w-full sm:w-60 md:w-96 flex flex-col justify-end rounded-2xl bg-imagen-servicio-2 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 p-6 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Reparación de PCs</h1>
            <p className='p-2 text-center text-sm text-white'>Especialistas en reparación de equipos informáticos. Solucionamos cualquier problema con eficiencia y rapidez.</p>
          </div>
        </div>

        <div className='h-128 w-full sm:w-60 md:w-96 flex flex-col justify-end rounded-2xl bg-imagen-servicio-3 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 p-6 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Venta de componentes</h1>
            <p className='p-2 text-center text-sm text-white'>Amplio catálogo de componentes de computadora. Encuentra todo lo que necesitas para mejorar tu equipo.</p>
          </div>
        </div>

        <div className='h-128 w-full sm:w-60 md:w-96 flex flex-col justify-end rounded-2xl bg-imagen-servicio-4 bg-cover bg-no-repeat hover:scale-105 transition-transform'>
          <div className='h-52 p-6 bg-[#00000080] rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-lg text-white'>Asesoramiento técnico</h1>
            <p className='p-2 text-center text-sm text-white'>Brindamos asesoramiento especializado para optimizar el rendimiento de tu computadora. Contáctanos.</p>
          </div>
        </div>


      </div>
        
    </div>
  )
}

export default Servicios;
