import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

function LogInPage() {
  return (
    <div className='flex flex-col justify-center min-h-screen p-4 bg-violet-50 dark:bg-neutral-700'>

      <Link to="/" className='inline-block self-start'>
        <FaArrowLeft className='m-4 w-6 h-6 text-gray-700 hover:text-black dark:text-white dark:hover:text-neutral-300'/>
      </Link>

      <div className='flex items-center justify-center flex-1 dark:text-white'>

        <div className='p-6 w-full max-w-sm flex flex-col justify-center rounded-2xl border shadow-sm bg-white dark:bg-neutral-800 dark:border-neutral-700'>

          <h1 className='mb-2 flex items-center justify-center text-xl'>Ingresar</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'/>

          <input type='password' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'/>

          <button className='my-6 w-full h-16 flex items-center justify-center text-white text-lg bg-blue-600 hover:bg-blue-400 rounded-2xl'>Iniciar sesión</button>

          <h1 className='flex items-center justify-center text-md'>¿No tenés cuenta?<Link to="/signup" className='ml-1 flex items-center justify-center text-blue-400 hover:text-blue-300 underline'>Crear cuenta</Link></h1>



        </div>
      </div> 
    </div>    
  )
}

export default LogInPage;
