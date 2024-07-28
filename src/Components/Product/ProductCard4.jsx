import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({ nombre, precio, imagen, productPage }) => {
  return (
    <div className="w-full p-4 gap-4 flex flex-row items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-700">

      <Link to="/productIndividualPage" className="w-40 h-40">
        <img src={imagen} alt='pimage' className="w-full rounded-lg" />
      </Link>

      <div className='md:w-96 gap-4 flex flex-col justify-between flex-grow'>

        <h1 className="text-lg font-semibold dark:text-white">{nombre}</h1>
        <h2 className='text-xl font-semibold text-blue-500'>${precio}</h2>

        <div className='gap-2 flex flex-col items-center justify-between'>

          <button className='py-2 w-full bg-violet-900 rounded-md border shadow-sm text-center font-semibold text-white border-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900'>
            <Link to="/productIndividualPage">Seleccionar</Link>
          </button>

          <button className="py-2 w-full bg-violet-200 rounded-md border shadow-sm text-center font-semibold text-violet-900 hover:bg-violet-100">
            <Link to={productPage}>Ver producto</Link>
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard4;
