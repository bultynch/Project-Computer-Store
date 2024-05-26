import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";




function HelpPage() {
  return (
    <div>
      
      <NavBar />

      <div className='p-10 flex flex-col justify-center bg-gray-50'>

        <div className='flex flex-col justify-start'>
          <h1 className='mb-2 text-2xl font-bold'>Centro de ayuda</h1>
          <p className='text-md font-normal'>Encontrá la información que necesitás para comprar online, métodos de pago, garantías, envíos, seguimiento de compras y más.</p>
        </div>

        <div className='my-10 flex flex-col justify-center'>

          <h2 className='text-md font-medium text-start'>Contactate con nosotros mediante:</h2>

          <div className='my-5 flex items-center justify-between'>

            <div className='my-5 flex items-center justify-between'>
              <div className='relative p-6 w-72 h-32 flex items-center bg-gray-300 rounded-md'>
                <div className="absolute w-20 h-20 flex items-center justify-center bg-white rounded-full z-10" />
                <IoMdMail className="absolute m-5 w-10 h-10 text-blue z-20" />

                <div className='flex flex-col items-end justify-center w-full h-full pl-24'>
                  <h1 className='text-end'>hola</h1>
                  <h2 className='text-end'>correo</h2>
                </div>
              </div>
            </div>

            <div className='w-72 h-32 bg-gray-300 rounded-md'>
              <FaWhatsapp />
            </div>
            <div className='w-72 h-32 bg-gray-300 rounded-md'>
              <FiPhone />
            </div>

          </div>

          <h2 className='text-md font-medium text-start'>Recibí, retirá o seguí tu compra:</h2>
          <div className='mt-5 flex items-center justify-start'>
            <div className='mr-3 w-72 h-32 bg-gray-300 rounded-md'></div>
            <div className='ml-44 w-72 h-32 bg-gray-300 rounded-md'>2</div>
          </div>

        </div>

        <div className='flex flex-col justify-start'>

          <h2 className='mb-5 text-md font-medium text-start'>Horarios de atención:</h2>

          <div className='flex items-center justify-between'>

            <div className='flex flex-col justify-center'>
              <h1 className='mb-2 text-md'>TEL. / WhatsApp / Mail</h1>
              <h1 className='text-md'>Lunes a viernes de 8 a 18hs</h1>
            </div>

            <div className='flex flex-col justify-center'>
              <h1 className='mb-2 text-md'>Pickup Point Buenos Aires</h1>
              <h1 className='text-md'>Lunes a Viernes de 10 a 17h</h1>
            </div>

            <div className='flex flex-col justify-center'>
              <h1 className='mb-2 text-md'>Pickup Point Córdoba</h1>
              <h1 className='text-md'>Lunes a Viernes de 10 a 18h.</h1>
            </div>

          </div>

          


        </div>
      </div>

      <Footer />

    </div>
  );
}

export default HelpPage;
