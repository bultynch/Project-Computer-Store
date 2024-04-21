import React from 'react'
import HiddenSideBar from './HiddenSideBar';

function NavigationBar() {
  return (  
    <div className='py-4 flex items-center justify-between bg-white w-full h-16 fixed top-0 shadow-lg z-10'>
      <div className='flex-1 flex items-center justify-start'>
        <h1 className='ml-40 font-orbitron text-xl text-gray-700'><strong>STORE PAGE</strong></h1>
      </div>

      <div className='flex-1'>
        
      </div>

      <div className='flex-1 flex items-center justify-end mr-40'>
        <button className='mr-1 bg-white hover:bg-gray-200 border text-black py-1 px-2 rounded'>LogIn</button>

        <button className='mx-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded'>Sign Up</button>

        <HiddenSideBar/>
        
      </div>

    </div>
  );
};

export default NavigationBar;