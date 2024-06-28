import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({ nombre, precio, imagen, productPage }) => {
  return (
    <div className="p-4 w-full flex flex-col sm:flex-row items-center rounded-lg overflow-hidden shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600">
      <Link to="/productIndividualPage" className="m-2 w-full sm:w-40 h-40 flex-shrink-0">
        <img src={imagen} alt='pimage' className="w-full h-full object-cover rounded-md" />
      </Link>
      <div className='px-2 h-40 flex flex-col justify-between flex-grow'>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate overflow-hidden whitespace-nowrap">{nombre}</h1>
        <h2 className='my-4 text-2xl font-semibold text-blue-500'>${precio}</h2>
        <div className='flex items-center space-x-4'>
          <Link to="/productIndividualPage" className="p-3 w-60 rounded-lg text-center font-semibold md:text-center text-white bg-violet-900 border border-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900">Seleccionar</Link>
          <Link to={productPage} className="p-3 w-52 bg-violet-200 rounded-lg text-center font-semibold text-violet-900 hover:bg-gray-200">Ver producto</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard4;
