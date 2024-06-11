import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({nombre, precio, imagen}) => {
  return (
    <Link to="/productIndividualPage" className="p-4 w-176 flex items-center rounded-lg overflow-hidden shadow-sm">

      <img src={imagen} alt='pimage' className="m-2 w-40 h-40"></img>

      <div className='px-2 h-40 flex flex-col justify-between'>

        <h1 className="flex justify-start text-2xl">{nombre}</h1>

        <h2 className='text-xl text-blue-900 font-medium'>${precio}</h2>

        <div className='flex items-center justify-center'>
            <Link to="/ProductIndividualPage" className="mr-2 p-4 w-56 bg-gray-100 rounded-lg text-center font-semibold hover:bg-gray-200 md:text-center">Seleccionar</Link>
            <Link to="/ProductIndividualPage" className="ml-2 p-4 w-56 bg-gray-100 rounded-lg text-center font-semibold hover:bg-gray-200 md:text-center">Ver producto</Link>
        </div>
  
        

      </div>
  
    </Link>
  );
};

export default ProductCard4;
