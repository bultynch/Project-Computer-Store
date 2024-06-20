import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({ nombre, precio, imagen, productPage }) => {
  return (
    <div className="p-4 w-176 flex items-center rounded-lg overflow-hidden shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-700">

      <Link to="/productIndividualPage" className="m-2 w-40 h-40 flex-shrink-0">
        <img src={imagen} alt='pimage' className="w-full h-full object-cover rounded-md" />
      </Link>
      
      <div className='px-2 h-40 flex flex-col justify-between flex-grow'>

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{nombre}</h1>
        <h2 className='my-4 text-2xl font-semibold text-blue-500'>${precio}</h2>
        
        <div className='flex items-center space-x-4'>

          <Link to="/productIndividualPage" className="p-2 bg-violet-800 rounded-lg text-center font-semibold text-white hover:bg-violet-900 w-full">Seleccionar</Link>
          <Link to={productPage} className="p-2 bg-violet-200 rounded-lg text-center font-semibold text-violet-900 hover:bg-gray-200 w-full">Ver producto</Link>

        </div>

      </div>
      
    </div>
  );
};

export default ProductCard4;

