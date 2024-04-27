import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUpPage from './SignUpPage'

function LogInPage() {
  return (
    <div className='my-40 flex items-center justify-center'>
      <div className='p-12 w-128 flex flex-col justify-center rounded shadow-xl'>

        <h1 className='flex items-center justify-center text-2xl'>Ingresar</h1>

        <input type='text' value='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <input type='text' value='Contraeña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <button className='mt-10 w-full h-16 flex items-center justify-center bg-blue-600 text-white text-xl hover:bg-blue-400'>Iniciar sesión</button>

        <h1 className='mt-6 flex items-center justify-center'>No tenes cuenta?<Link to="/signup" className='ml-1 flex items-center justify-center text-blue-400 underline'>Crear cuenta</Link></h1>

        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default LogInPage