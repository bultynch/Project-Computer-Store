import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='px-40 py-4 flex items-center justify-between bg-white w-full h-16 fixed top-0 shadow-sm z-10'>

      <div className='flex-1 flex items-center justify-start'>
        <Link to='/main' className='font-orbitron text-xl text-gray-700'><strong>PC STORE</strong></Link>
      </div>

      <div className='flex-1 flex items-center justify-end'>
        <Link to="/products" className='mx-10'>Productos</Link>
        <Link to="/help" className='mx-10'>Ayuda</Link>
        <Link to="/sponsors" className='mx-10'>Sponsors</Link>
        <Link to="/login" className='ml-10 mr-0.5 py-1 px-2 hover:text-blue-200 text-blue-300 underline rounded-xl'>LogIn</Link>
        <Link to="/signup" className='mx-1 py-1 px-2 bg-blue-500 hover:bg-blue-400 text-white rounded-xl'>SignUp</Link>
      </div>

    </div>
  );
};

export default NavigationBar;
