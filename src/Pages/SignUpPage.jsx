import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


function SignUpPage() {
  return (
    <div className='flex flex-col justify-center min-h-screen p-4 bg-gray-50 dark:bg-neutral-700'>

      <Link to="/" className='inline-block self-start'>
        <FaArrowLeft className='m-4 w-6 h-6 text-gray-700 hover:text-black dark:text-white dark:hover:text-neutral-300'/>
      </Link>

      <div className='flex items-center justify-center flex-1 dark:text-white'>
        <div className='p-6 w-full max-w-sm flex flex-col justify-center rounded-2xl border shadow-sm bg-white dark:bg-neutral-800 dark:border-neutral-700'>

          <h1 className='mb-2 flex items-center justify-center text-xl'>Registro de usuario</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <input type='password' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <input type='password' placeholder='Repetir contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <h1 className='mb-2  mt-4 flex items-start justify-center text-lg'>Información personal</h1>

          <input type='text' placeholder='Nombre' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <input type='text' placeholder='Apellido' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <input type='text' placeholder='DNI o CUIT' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-lg'/>

          <div className='my-2 flex items-start justify-center text-sm'>

            <input type='text' placeholder='Código de área' className='px-1 mr-2 w-28 h-11 text-black border-b-2 outline-none rounded-lg'/>
            <input type='text' placeholder='Número de teléfono' className='px-1 w-full h-11 text-black border-b-2 outline-none rounded-lg'/>

          </div>

          <button className='my-6 w-full h-16 flex items-center justify-center bg-blue-600 text-white text-xl hover:bg-blue-400 rounded-2xl'>Crear cuenta</button>

          <Link to="/login" className='flex items-center justify-center text-blue-400 hover:text-blue-300 underline'>Ya tengo una cuenta</Link>

        </div>

      </div>

    </div>
  )
}

export default SignUpPage;
