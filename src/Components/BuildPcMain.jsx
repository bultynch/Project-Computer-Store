import React from 'react';
import { Link } from 'react-router-dom';

function BuildPcMain() {
  return (
    <div className='relative w-full h-96 flex items-center justify-start bg-cover bg-no-repeat font-bold sm:h-160' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-nintendo2.jpg'})`}}>
      
      <div className='absolute inset-0 bg-black opacity-40 dark:opacity-60'></div>

      <div className='mb-20 mx-4 flex flex-col relative sm:mx-10 md:mx-20 lg:mx-40'>

        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat'>Armá Tu PC Ahora</h1>
        <p className='text-white text-base sm:text-lg md:text-xl font-montserrat'>Encontrá los últimos componentes al mejor precio.</p>
        <Link to="/buildPC" className='mt-5 p-6 text-white text-base sm:text-lg md:text-xl text-center font-montserrat rounded-xl border 
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

