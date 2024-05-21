import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import SignUpPage from './SignUpPage';

function LogInPage() {
  return (
    <div className='flex flex-col justify-center min-h-screen p-4'>

      <Link to="/" className='inline-block self-start'>
        <FaArrowLeft className='m-4 w-6 h-6 text-gray-700 hover:text-black'/>
      </Link>

      <div className='flex items-center justify-center flex-1'>

        <div className='p-6 w-full max-w-sm flex flex-col justify-center rounded-2xl shadow-lg'>

          <h1 className='flex items-center justify-center text-xl'>Ingresar</h1>

          <input type='text' placeholder='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <input type='password' placeholder='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none'/>

          <button className='my-8 w-full h-12 flex items-center justify-center text-white text-lg bg-blue-600 hover:bg-blue-400 rounded-xl'>Iniciar sesión</button>

          <h1 className='flex items-center justify-center text-md'>No tienes cuenta?<Link to="/signup" className='ml-1 flex items-center justify-center text-blue-400 underline'>Crear cuenta</Link></h1>

          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>

        </div>
      </div>
    </div>    
  )
}

export default LogInPage;
