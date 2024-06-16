import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({ nombre, precio, imagen }) => {
  return (
    <div className="p-4 w-80 h-128 flex flex-col items-center justify-center text-center bg-base-100 shadow-sm border rounded-2xl">

      <Link to='/productIndividualPage' className="w-full h-full flex flex-col items-center justify-center text-center">

        <figure className="w-79 h-60 flex items-center justify-center mx-auto">
          <img src={imagen} alt='pic-pc2' className="w-full h-full object-cover rounded-lg" />
        </figure>

        <div className="flex flex-col items-center">

          <h1 className="mt-2 text-lg font-medium">{nombre}</h1>
          <p className="mt-2 text-zinc-900 font-medium"><s>${precio}</s></p>
          <p className="mt-2 text-green-500 text-xl font-semibold">${(precio * 0.9)}</p>

        </div>

      </Link>

      <div className="py-4 ">
        <Link to="/" className="py-4 px-12 bg-violet-800 rounded-lg font-normal hover:bg-violet-900 text-center text-white">Ver oferta</Link>
      </div>

    </div>
  );
}

export default ProductCard2;

