import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import SignUpPage from './SignUpPage'


function LogInPage() {
  return (
    <div className='flex flex-col justify-center'>

      <Link to="/" className='inline-block'>
        <FaArrowLeft className='m-5 w-8 h-8 text-gray-700'/>
      </Link>

      <div className='flex items-center justify-center'>
        <div className='my-40 p-12 w-128 flex flex-col justify-center rounded-2xl shadow-lg'>

          <h1 className='flex items-center justify-center text-2xl'>Ingresar</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='text' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <button className='mt-10 w-full h-16 flex items-center justify-center text-white text-xl bg-blue-600 hover:bg-blue-400 rounded-xl'>Iniciar sesión</button>

          <h1 className='mt-6 flex items-center justify-center'>No tienes cuenta?<Link to="/signup" className='ml-1 flex items-center justify-center text-blue-400 underline'>Crear cuenta</Link></h1>

          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>

        </div>
      </div>
    </div>    
  )
}

export default LogInPage