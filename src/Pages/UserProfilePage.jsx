import React from 'react'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar'
import Footer from '../Components/Footer'
import { LuLogOut, LuPencil } from "react-icons/lu";
import { MdPlace, MdAccountBox, MdAssignment, MdLocalMall, MdFileDownload } from "react-icons/md";

function UserProfilePage() {
  return (
    <div className='flex flex-col min-h-screen bg-violet-50 dark:bg-neutral-700'>
      
      <NavBar />
      
      <SecondNavBar />
      
      <div className='flex flex-col items-center px-2 py-4 sm:px-10 md:px-20 lg:px-40 xl:px-80'>
        
        <div className='w-full max-w-4xl gap-2 flex flex-col'>
          
          {/*---------Reservas cliente---------*/}
          <div className='p-4 h-auto flex flex-col items-start justify-start bg-white shadow-sm rounded-md border dark:bg-neutral-800'>
            
            <div className='mb-4 flex items-center justify-center'>

              <MdLocalMall className='w-6 h-6 mr-1 text-red-500'/>
              <h1 className='font-semibold dark:text-white'>Mis reservas</h1>

            </div>
            
            <div className='w-full'>

              <div className='p-2 w-full shadow-sm border rounded-md dark:text-white dark:bg-neutral-700 dark:border-none'>

                <h1 className='text-sm'><b>Número de reserva: 'numeroReserva'</b></h1>
                <h1 className='my-2 text-sm'>Fecha: 'fechaReserva'</h1>
                <h1 className='text-sm'>Monto: 'montoReserva'</h1>

                <div className='flex items-center justify-center'>
                  <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900 dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:border-white dark:border-none'>Ver detalle</button>
                </div>

              </div>
              
              <div className='my-2 p-2 w-full shadow-sm border rounded-md dark:text-white dark:bg-neutral-700 dark:border-none'>

                <h1 className='text-sm'><b>Número de reserva: 'numeroReserva'</b></h1>
                <h1 className='my-2 text-sm'>Fecha: 'fechaReserva'</h1>
                <h1 className='text-sm'>Monto: 'montoReserva'</h1>

                <div className='flex items-center justify-center'>
                  <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900 dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:border-white dark:border-none'>Ver detalle</button>
                </div>

              </div>
              
              <div className='my-2 p-2 w-full shadow-sm border rounded-md dark:text-white dark:bg-neutral-700 dark:border-none'>

                <h1 className='text-sm'><b>Número de reserva: 'numeroReserva'</b></h1>
                <h1 className='my-2 text-sm'>Fecha: 'fechaReserva'</h1>
                <h1 className='text-sm'>Monto: 'montoReserva'</h1>

                <div className='flex items-center justify-center'>
                  <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900 dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:border-white dark:border-none'>Ver detalle</button>
                </div>

              </div>

            </div>
            
            <div className='mt-2 w-full flex items-center justify-center'>
              <button className='text-blue-400 hover:underline'>Ver todos</button>
            </div>

          </div>
          
          {/*---------Cuenta cliente---------*/}
          <div className='p-4 h-auto flex flex-col items-start justify-start bg-white shadow-sm rounded-md border dark:bg-neutral-800'>
            
            <div className='mb-4 flex items-center justify-center'>

              <MdAccountBox className='w-6 h-6 mr-1 text-blue-500'/>
              <h1 className='font-semibold dark:text-white'>Mis cuentas</h1>

            </div>
            
            <div className='w-full'>

              <div className='p-2 w-full shadow-sm border rounded-md dark:text-white dark:bg-neutral-700 dark:border-none'>
                <h1 className='text-sm'>Consumidor final</h1>
                <h1 className='my-2 text-sm'>Nombre: 'nombreCliente'</h1>
                <h1 className='text-sm'>DNI: 'dniCliente'</h1>
              </div>

            </div>
            
            <div className='mt-4 w-full flex items-center justify-center'>

              <LuPencil className='mr-1 text-blue-400'/>
              <button className='text-blue-400 hover:underline'>Agregar o cambiar cuenta</button>

            </div>

          </div>
          
          {/*---------Facturas cliente---------*/}
          <div className='p-4 h-auto flex flex-col items-start justify-start bg-white shadow-sm rounded-md border dark:bg-neutral-800'>
            
            <div className='mb-4 flex items-center justify-center'>

              <MdAssignment className='w-6 h-6 mr-1 text-yellow-500'/>
              <h1 className='font-semibold dark:text-white'>Mis facturas</h1>

            </div>
            
            <div className='p-2 w-full shadow-sm border rounded-md flex items-center justify-between dark:text-white dark:bg-neutral-700 dark:border-none'>

              <div>
                <h1 className='text-sm'>Tipo: 'tipoFacturaCliente'</h1>
                <h1 className='my-2 text-sm'>Comprobante: 'numComprobanteCliente'</h1>
                <h1 className='text-sm'>Número reserva: 'numReservaCliente'</h1>
              </div>

              <MdFileDownload className='m-2 h-6 w-6 text-orange-500'/>

            </div>
            
            <div className='mt-2 p-2 w-full shadow-sm border rounded-md flex items-center justify-between dark:text-white dark:bg-neutral-700 dark:border-none'>

              <div>
                <h1 className='text-sm'>Tipo: 'tipoFacturaCliente'</h1>
                <h1 className='my-2 text-sm'>Comprobante: 'numComprobanteCliente'</h1>
                <h1 className='text-sm'>Número reserva: 'numReservaCliente'</h1>
              </div>

              <MdFileDownload className='m-2 h-6 w-6 text-orange-500'/>

            </div>
            
            <div className='mt-4 w-full flex items-center justify-center'>
              <button className='text-blue-400 hover:underline'>Ver todas</button>
            </div>

          </div>
          
          {/*---------Direcciones cliente---------*/}
          <div className='p-4 h-auto flex flex-col items-start justify-start bg-white shadow-sm rounded-md border dark:bg-neutral-800'>
            
            <div className='mb-4 flex items-center justify-center'>

              <MdPlace className='w-6 h-6 mr-1 text-green-500'/>
              <h1 className='font-semibold dark:text-white'>Mis direcciones</h1>

            </div>
            
            <div className='w-full'>

              <div className='p-2 w-full shadow-sm border rounded-md dark:text-white dark:bg-neutral-700 dark:border-none'>
                <h1 className='text-sm'>Retiro por sucursal</h1>
                <h1 className='my-2 text-sm'>Nombre Local: Sucursal Oca: 'nombreSucursalOca'</h1>
                <h1 className='mb-2 text-sm'>Domicilio: 'domicilioSucursalOca'</h1>
                <h1 className='text-sm'>Código Postal: 'numCP'</h1>
              </div>

            </div>
            
            <div className='mt-4 w-full flex items-center justify-center'>

              <LuPencil className='mr-1 text-blue-400'/>
              <button className='text-blue-400 hover:underline'>Agregar o cambiar cuenta</button>

            </div>

          </div>
          
          <div className='my-4 sm:flex justify-center'>

            <button className='p-2 h-14 w-full sm:w-96 flex items-center justify-between shadow-sm rounded-md border bg-red-600 text-white text-lg hover:bg-white hover:text-red-500 hover:border-red-500'>
              <h1>Cerrar sesión</h1>
              <LuLogOut className='h-6 w-6 text-end'/>
            </button>

          </div>
          
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
}

export default UserProfilePage;
