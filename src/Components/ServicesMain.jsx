import React from 'react';

function Servicios() {
  return (
    <div className='py-10 px-2 lg:px-10 xl:px-20 dark:bg-neutral-800'>

      <h1 className='flex items-center justify-center md:justify-start text-3xl md:text-4xl dark:text-white '><strong>Nuestros servicios</strong></h1>    
      <div className='divider'></div> 

      <div className='flex flex-wrap justify-center md:justify-between xl:justify-center 2xl:justify-between'>

        <div className='mb-2 md:mr-2 lg:mr-20 lg:mb-20 xl:m-0 w-96 h-128 flex flex-col justify-end rounded-2xl shadow-sm border bg-imagen-servicio-1 bg-cover bg-no-repeat transition-transform sm:hover:scale-105'>

          <div className='h-52 p-6 bg-black bg-opacity-70 rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-xl text-white'>Instalación de Windows</h1>
            <p className='p-2 text-center text-sm text-white'>Ofrecemos una configuración rápida y efectiva para su sistema, asegurando un uso óptimo en poco tiempo.</p>
          </div>

        </div>

        <div className='mb-2 xl:mx-20 xl:mb-20 2xl:m-0 w-96 h-128 flex flex-col justify-end rounded-2xl shadow-sm border bg-imagen-servicio-2 bg-cover bg-no-repeat transition-transform sm:hover:scale-105'>

          <div className='h-52 p-6 bg-black bg-opacity-70 rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-xl text-white'>Reparación de PCs</h1>
            <p className='p-2 text-center text-sm text-white'>Especialistas en reparación de equipos informáticos. Solucionamos cualquier problema con eficiencia y rapidez.</p>
          </div>

        </div>

        <div className='mb-2 md:mb-0 md:mr-2 lg:mr-20 xl:mr-20 2xl:m-0 w-96 h-128 flex flex-col justify-end rounded-2xl shadow-sm border bg-imagen-servicio-3 bg-cover bg-no-repeat transition-transform sm:hover:scale-105'>

          <div className='h-52 p-6 bg-black bg-opacity-70 rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-xl text-white'>Venta de componentes</h1>
            <p className='p-2 text-center text-sm text-white'>Amplio catálogo de componentes de computadora. Encuentra todo lo que necesitas para mejorar tu equipo.</p>
          </div>

        </div>

        <div className='w-96 h-128 xl:mr-20 2xl:m-0 flex flex-col justify-end rounded-2xl shadow-sm border bg-imagen-servicio-4 bg-cover bg-no-repeat transition-transform sm:hover:scale-105'>

          <div className='h-52 p-6 bg-black bg-opacity-70 rounded-b-2xl'>
            <h1 className='flex items-center justify-center p-2 text-xl text-white'>Asesoramiento técnico</h1>
            <p className='p-2 text-center text-sm text-white'>Brindamos asesoramiento especializado para optimizar el rendimiento de tu computadora. Contáctanos.</p>
          </div>
          
        </div>


      </div>
        
    </div>
  )
}

export default Servicios;
