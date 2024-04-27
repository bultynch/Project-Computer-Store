import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LogInPage from './LogInPage'

function SignUpPage() {
  return (
    <div className='my-40 flex items-center justify-center'>
      <div className='p-12 w-128 flex flex-col justify-center rounded shadow-xl'>

        <h1 className='flex items-center justify-center text-2xl'>Registro de usuario</h1>

        <input type='text' value='Email' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <input type='text' value='Contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <input type='text' value='Repetir contraseña' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>


        <h1 className='mt-4 flex items-start justify-center text-xl'>Información personal</h1>

        <input type='text' value='Nombre' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <input type='text' value='Apellido' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <input type='text' value='DNI o CUIT' className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2'/>

        <div className='my-2 flex items-start justify-center text-sm'>
          <input type='text' value='Código de área' className='px-1 mr-2 w-28 h-11 text-gray-400 border-b-2'/>
          <input type='text' value='Número de teléfono' className='px-1 w-full h-11 text-gray-400 border-b-2'/>
        </div>

        <button className='mt-10 w-full h-16 flex items-center justify-center bg-blue-600 text-white text-xl hover:bg-blue-400'>Crear cuenta</button>

        <Link to="/login" className='mt-6 flex items-center justify-center text-blue-400 underline'>Ya tengo una cuenta</Link>

        <Routes>
          <Route path="/login" element={<LogInPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default SignUpPage