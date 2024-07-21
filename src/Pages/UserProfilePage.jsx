import React from 'react'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar'
import Footer from '../Components/Footer'
import { LuLogOut } from "react-icons/lu";
import { MdPlace, MdAccountBox, MdAssignment, MdLocalMall } from "react-icons/md";

function UserProfilePage() {
  return (
    <div className='flex flex-col min-h-screen bg-violet-50'>

        <NavBar />

        <SecondNavBar />

        <div className=''>
            
            <div className='my-2 mx-2 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 gap-2 flex flex-col'>

                <div className='gap-2 flex flex-col '>

                    <div className='p-4 h-auto flex flex-col items-start justify-start bg-white shadow-sm rounded-md border'>

                        <div className='mb-2 flex items-center justify-center'>

                            <MdLocalMall className='w-6 h-6 mr-1'/>
                            <h1 className='text-lg'>Mis reservas</h1>

                        </div>
                        

                        <div className='w-full'>


                            <div className='p-2 w-full shadow-sm border rounded-md'>

                                <h1><b>Número de reserva: 'numeroReserva'</b></h1>
                                <h1>Fecha: 'fechaReserva'</h1>
                                <h1>Monto: 'montoReserva'</h1>

                                <div className='flex items-center justify-center'>
                                    <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900'>Ver detalle</button>
                                </div>

                            </div>

                            <div className='my-2 p-2 w-full shadow-sm border rounded-md'>

                                <h1><b>Número de reserva: 'numeroReserva'</b></h1>
                                <h1>Fecha: 'fechaReserva'</h1>
                                <h1>Monto: 'montoReserva'</h1>

                                <div className='flex items-center justify-center'>
                                    <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900'>Ver detalle</button>
                                </div>

                            </div>

                            <div className='my-2 p-2 w-full shadow-sm border rounded-md'>

                                <h1><b>Número de reserva: 'numeroReserva'</b></h1>
                                <h1>Fecha: 'fechaReserva'</h1>
                                <h1>Monto: 'montoReserva'</h1>

                                <div className='flex items-center justify-center'>
                                    <button className='mt-4 py-2 w-full rounded-md shadow-sm border bg-violet-900 text-white hover:bg-white hover:text-violet-900 hover:border-violet-900'>Ver detalle</button>
                                </div>

                            </div>

                        </div>

                        <div className='mb-2 w-full flex items-center justify-center'>
                            <button className='text-blue-400'>Ver todos</button>
                        </div>

                    </div>

                    <div className='p-4 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>

                        <MdAccountBox className='w-6 h-6 mt-0.5 mr-1'/>
                        <h1 className='text-lg'>Mi cuenta</h1>

                    </div>

                    <div className='p-4 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>

                        <MdAssignment className='h-6 w-6 mt-0.5 mr-1'/>
                        <h1 className='text-lg'>Mis Facturas</h1>

                    </div>

                    <div className='p-4 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>

                        <MdPlace className='h-6 w-6 mr-1'/>
                        <h1>Mis direcciones</h1>

                    </div>

                    <div className='my-4 sm:flex justify-center'>

                        <button className='p-2 h-14 w-full sm:w-96 flex items-center justify-between shadow-sm rounded-md border bg-red-600 text-white text-lg hover:bg-white hover:text-red-500 hover:border-red-500'>
                            <h1>Cerrar sesión</h1>
                            <LuLogOut className='h-6 w-6 text-end'/>
                        </button>

                    </div>

                    

                </div>

            </div>

        </div>

        <Footer />

    </div>
  )
}

export default UserProfilePage