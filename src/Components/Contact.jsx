import React from 'react'

function Contacto() {
  return (
    <div className='px-40 py-20 flex items-center justify-between bg-violet-50 '>

        <div className='flex flex-col justify-center '>
            <h1 className='mb-4 text-3xl'><strong>Contactanos.</strong></h1>
            <p className='text-xl text-gray-500'>Envianos un mail y nos pondremos en contacto a la brevedad.</p>
        </div>

        <div alt="DATOS CONTACTO" className='flex flex-col justify-center'>

            
           <div alt="NOMBRE" className='pb-2 flex flex-col'> 
                <h1 className='text-lg text-gray-500'>Nombre</h1>
                <input type="text" className='w-128 h-8 p-2 rounded-lg outline-none'/>
            </div>

            <div alt="CORREO" className='pb-2 flex flex-col'>
                <h1 className='text-lg text-gray-500'>Correo electrónico</h1>
                <input type="text" className='w-full h-8 p-2 rounded-lg outline-none'/>
            </div>

            <div alt="MENSAJE" className='pb-2 flex flex-col'>
                <h1 className='text-lg text-gray-500'>Mensaje</h1>
                <textarea className='w-full h-32 p-2 rounded-lg outline-none'></textarea>
            </div>


            <div alt="BOTON" className='text-center text-lg text-gray-500'>
                <button className='w-full mt-2 p-1 px-4 border border-gray-500 bg-white rounded-lg outline-gray-200 hover:border-black hover:text-black'>Enviar</button>
            </div>
        </div>
    </div>
  );
};

export default Contacto;