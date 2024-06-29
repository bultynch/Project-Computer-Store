import React from 'react';
import { Link } from 'react-router-dom';

function BuildPcMain() {
  return (
    <div className='w-full h-96 md:h-128 lg:h-160 lg:pl-20 lg:justify-start font-bold relative flex items-center justify-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-nintendo2.jpg'})`}}>
      
      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div className='flex flex-col relative text-white'>

        <h1 className='text-center text-5xl md:text-6xl lg:text-7xl'>Armá Tu PC Ahora</h1>
        <p className='md:text-lg lg:text-xl'>Encontrá los últimos componentes al mejor precio.</p>
        <Link to="/buildPC" className='mt-5 p-6 text-center text-2xl rounded-xl border 
            bg-violet-900
            hover:bg-white 
            hover:border-white
              hover:bg-opacity-50 

            dark:bg-violet-950
            dark:hover:bg-white
            dark:hover:border-white
              dark:hover:bg-opacity-50'
            
            >Comenzar</Link>

      </div>       
    </div>
  );
}

export default BuildPcMain;

