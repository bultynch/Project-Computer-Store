import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import LogInPage from './LogInPage'
import HomePage from './HomePage';

function SignUpPage() {
  return (
    <div className='flex flex-col justify-center'>

      <Link to="/">
        <FaArrowLeft className='m-5 w-8 h-8 text-gray-700'/>
      </Link>

      <div className='flex items-center justify-center'>

        <div className='my-10 p-12 w-128 flex flex-col justify-center rounded-2xl shadow-lg'>

          <h1 className='flex items-center justify-center text-2xl'>Registro de usuario</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='Repetir contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2' outline-none/>


          <h1 className='mt-4 flex items-start justify-center text-xl'>Información personal</h1>

          <input type='text' placeholder='Nombre' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='Apellido' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='DNI o CUIT' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <div className='my-2 flex items-start justify-center text-sm'>
            <input type='text' placeholder='Código de área' className='px-1 mr-2 w-28 h-11 text-gray-400 border-b-2 outline-none'/>
            <input type='text' placeholder='Número de teléfono' className='px-1 w-full h-11 text-gray-400 border-b-2 outline-none'/>
          </div>

          <button className='mt-10 w-full h-16 flex items-center justify-center bg-blue-600 text-white text-xl hover:bg-blue-400 rounded-2xl'>Crear cuenta</button>

          <Link to="/login" className='mt-6 flex items-center justify-center text-blue-400 hover:text-blue-300 underline'>Ya tengo una cuenta</Link>

          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/main" element={<HomePage />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default SignUpPage