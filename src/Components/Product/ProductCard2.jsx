import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({ nombre, precio, imagen }) => {
  return (
    <div className="p-4 w-full sm:h-96 md:h-128 flex flex-col items-center justify-center text-center shadow-sm border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-900">

      <Link to='/productIndividualPage' className="w-full h-full flex flex-col items-center justify-between text-center">

        <figure className="w-full h-72 sm:h-auto xl:h-72">
          <img src={imagen} alt='pic-pc2' className="w-full h-full object-cover rounded-lg" />
        </figure>

        <div className="flex flex-col items-center">

          <h1 className="mt-2 text-md font-medium dark:text-white">{nombre}</h1>
          <p className="mt-2 text-zinc-900 text-md font-light dark:text-white"><s>${precio}</s></p>
          <p className="mt-2 text-green-500 text-xl font-semibold">${(precio * 0.9)}</p>

        </div>

        <div className="mt-2 w-full">

          <Link to="/" className="py-2 px-6 block text-center text-white rounded-lg font-normal border border-violet-900 bg-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900">Ver oferta</Link>

        </div>

      </Link>

      

    </div>
  );
}

export default ProductCard2;
