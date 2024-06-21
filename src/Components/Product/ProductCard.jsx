import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ nombre, precio, imagen, onAddToCart }) => {
  return (
    <div className="p-2 w-208 flex items-center bg-white border rounded-lg shadow-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-white hover:bg-gray-50">

      <Link to='/productindividualepage'>
        <img src={imagen} alt='pimage' className="m-2 w-48 h-48 rounded-lg"></img>
      </Link>

      <div className='px-2 flex flex-col justify-between h-full'>

        <h1 className='mb-2 flex justify-start text-lg'>{nombre}</h1>

        <h2 className='my-4 text-2xl font-semibold text-blue-500'>${precio}</h2>
  
        <div className='mt-2 flex items-center justify-start'>
          <Link to="/carrito" onClick={onAddToCart} className="p-3 w-60 rounded-lg text-center font-semibold md:text-center text-white bg-violet-900 border border-violet-900 hover:bg-white hover:text-violet-900 hover:border-violet-900 ">Agregar al carrito</Link>
          <Link to="/carrito" onClick={onAddToCart} className="mx-2 p-3 w-60 rounded-lg text-center font-semibold md:text-center bg-white text-violet-900 border border-violet-900 hover:bg-violet-200">Ver producto</Link>
        </div>

      </div>
  
    </div>
  );
};

export default ProductCard;
