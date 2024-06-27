import React from 'react'
import NavBar from '../Components/NavBar'
import SecondNavBar from '../Components/SecondNavBar'
import Footer from '../Components/Footer'
import { LuLogOut } from "react-icons/lu";
import { MdPlace } from "react-icons/md";
import { BsClipboardCheckFill } from "react-icons/bs";

function UserProfilePage() {
  return (
    <div className='flex-colflex-grow bg-violet-50'>

        <NavBar />

        <SecondNavBar />

        <div className='mx-60 my-10 flex items-start justify-between bg-gray-50 shadow-sm rounded-lg border'>

            <div className='flex flex-col w-2/3'>
                <div className='m-5 p-5 h-160 bg-white shadow-sm rounded-lg border'>reservas</div>
                <div className='m-5 p-5 h-40 bg-white shadow-sm rounded-lg border'>cuenta</div>
            </div>
            
            <div className='flex flex-col w-1/3'>
                <div className='m-5 p-5 h-72 flex items-start justify-start bg-white shadow-sm rounded-lg border text-lg'><BsClipboardCheckFill className='h-6 w-6 mr-2'/>Mis Facturas</div>

                <div className='m-5 p-5 h-[312px] flex items-start justify-start bg-white shadow-sm rounded-lg border text-lg'><MdPlace className='h-6 w-6 mr-2'/>Mis direcciones</div>

                <div className='m-5 p-2 h-12 flex items-center justify-between bg-violet-900 shadow-sm rounded-lg border text-white text-lg hover:text-violet-900 hover:bg-white hover:border-violet-900'>Cerrar sesion
                    <LuLogOut className='h-6 w-6 text-end'/>
                </div>

            </div>

        </div>

        <Footer />

    </div>
  )
}

export default UserProfilePage