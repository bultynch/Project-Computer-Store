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

                    <div className='p-2 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>
                        <MdLocalMall className='w-6 h-6 mt-0.5 mr-1'/>
                        <h1 className='text-lg'>Mis reservas</h1>
                    </div>

                    <div className='p-2 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>
                        <MdAccountBox className='w-6 h-6 mt-0.5 mr-1'/>
                        <h1 className='text-lg'>Mi cuenta</h1>
                    </div>

                </div>

                <div className='gap-2 flex flex-col'>

                    <div className='p-2 h-40 flex items-start justify-start bg-white shadow-sm rounded-md border'>
                        <MdAssignment className='h-6 w-6 mt-0.5 mr-1'/>
                        <h1 className='text-lg'>Mis Facturas</h1>
                    </div>


                    <div className='p-2 h-40 bg-white shadow-sm rounded-md border'>
                        
                        <div className='flex items-center justify-start'>
                            <MdPlace className='h-6 w-6 mr-1'/>
                            <h1>Mis direcciones</h1>
                        </div>

                    </div>

                    <div className='my-4 sm:flex justify-center'>

                        <button className='p-2 h-16 w-full sm:w-96 flex items-center justify-between shadow-sm rounded-md border bg-red-600 text-white text-lg hover:bg-white hover:text-red-500 hover:border-red-500'>
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