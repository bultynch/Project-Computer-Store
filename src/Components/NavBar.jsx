import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';


function NavigationBar() {
  return (
    <div className='px-40 py-4 flex items-center justify-between bg-white w-full h-16 fixed top-0 shadow-lg z-10'>

      <div className='flex-1 flex items-center justify-start'>
        <Link to='mainmenu' className='font-orbitron text-xl text-gray-700'><strong>PC STORE</strong></Link>
      </div>

      <div className='flex-1 flex items-center justify-end'>

        <Link to="/products" className='bg-blue-200'>Productos</Link>
        <Link to="/help" className='bg-red-400'>Ayuda</Link>
        <Link to="/sponsors" className='bg-yellow-300'>Sponsors</Link>
        <Link to="/login" className='mr-1 bg-white hover:bg-gray-200 border text-black py-1 px-2 rounded'>LogIn</Link>
        <Link to="/signup" className='mx-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded'>SignUp</Link>

      </div>

    </div>
  );
};

export default NavigationBar;
