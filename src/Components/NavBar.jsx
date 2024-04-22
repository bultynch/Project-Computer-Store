import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductsPage from '../ProductsPage';
import HelpPage from '../HelpPage'
import SponsorsPage from '../SponsorsPage'

function NavigationBar() {
  return (  
    <div className='px-40 py-4 flex items-center justify-between bg-white w-full h-16 fixed top-0 shadow-lg z-10'>

      <div className='flex-1 flex items-center justify-start'>
        <h1 className='font-orbitron text-xl text-gray-700'><strong>PC STORE</strong></h1>
      </div>

    

      <div className='flex-1 flex items-center justify-end'>

        <Link to="/products" className='bg-blue-200'>Productos</Link>
        <Link to="/help" className='bg-red-400'>Ayuda</Link>
        <Link to="/sponsors" className='bg-yellow-300'>Sponsors</Link>

        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>

        <button className='mr-1 bg-white hover:bg-gray-200 border text-black py-1 px-2 rounded'>LogIn</button>

        <button className='mx-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded'>Sign Up</button>

        
      </div>

    </div>
  );
};

export default NavigationBar;