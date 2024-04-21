import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiSearch } from "react-icons/fi";

function HiddenSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <FiMenu className="mx-1 w-6 h-6" />
      </button>

      {isOpen && (
        <nav className="w-60 h-80 p-4 flex flex-col absolute top-0 right-0 bg-white shadow-lg">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
            <FiMenu className="w-6 h-8" />
          </button>
          <div className='flex items-center'>
            <input type='text' className='w-full bg-red-500 rounded'/>
            <button>
              <FiSearch className='w-6 h-6'/>
            </button>
          </div>
          <a href="/App" className="text-black hover:text-gray-400">Inicio</a>
          <a href="/PagProducts" className="text-black hover:text-gray-400">Productos</a>
          <a href="/App" className="text-black hover:text-gray-400">Armá tu PC</a>
          <a href="/App" className="text-black hover:text-gray-400">Ayuda</a>
        </nav>
      )}
    </div>
  );
};

export default HiddenSideBar;
