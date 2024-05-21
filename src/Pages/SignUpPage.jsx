import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import LogInPage from './LogInPage'
import HomePage from './HomePage';

function SignUpPage() {
  return (
    <div className='flex flex-col justify-center min-h-screen p-4'>

      <Link to="/" className='inline-block self-start'>
        <FaArrowLeft className='m-4 w-6 h-6 text-gray-700 hover:text-black'/>
      </Link>

      <div className='flex items-center justify-center flex-1'>
        <div className='p-6 w-full max-w-sm flex flex-col justify-center rounded-2xl shadow-lg'>

          <h1 className='flex items-center justify-center text-xl'>Registro de usuario</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='password' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='password' placeholder='Repetir contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <h1 className='mt-4 flex items-start justify-center text-lg'>Información personal</h1>

          <input type='text' placeholder='Nombre' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='Apellido' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='DNI o CUIT' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <div className='my-2 flex items-start justify-center text-sm'>
            <input type='text' placeholder='Código de área' className='px-1 mr-2 w-28 h-11 text-gray-400 border-b-2 outline-none'/>
            <input type='text' placeholder='Número de teléfono' className='px-1 w-full h-11 text-gray-400 border-b-2 outline-none'/>
          </div>

          <button className='my-8 w-full h-16 flex items-center justify-center bg-blue-600 text-white text-xl hover:bg-blue-400 rounded-2xl'>Crear cuenta</button>

          <Link to="/login" className='flex items-center justify-center text-blue-400 hover:text-blue-300 underline'>Ya tengo una cuenta</Link>

          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/main" element={<HomePage />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
