import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({ nombre, precio, imagen, productPage }) => {
  return (
    <div className="p-2 gap-2 flex flex-row items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600">

      <Link to="/productIndividualPage" className="w-32 h-32">
        <img src={imagen} alt='pimage' className="w-full h-full object-cover rounded-lg" />
      </Link>

      <div className='gap-4 flex flex-col justify-between flex-grow'>

        <h1 className="text-lg font-semibold dark:text-white">{nombre}</h1>

        <h2 className='text-xl font-semibold text-blue-500'>${precio}</h2>

        <div className='flex flex-col items-center justify-between gap-2'>

          <div className='py-2 w-full rounded-lg text-center font-semibold md:text-center text-white bg-violet-900 border border-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900'>
            <Link to="/productIndividualPage">Seleccionar</Link>
          </div>

          <div className="py-2 w-full bg-violet-200 rounded-lg text-center font-semibold text-violet-900 hover:bg-violet-100">
            <Link to={productPage}>Ver producto</Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductCard4;
