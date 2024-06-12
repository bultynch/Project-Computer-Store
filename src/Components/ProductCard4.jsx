import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard4 = ({ nombre, precio, imagen, productPage }) => {
  return (
    <div className="p-4 w-176 flex items-center rounded-lg overflow-hidden shadow-sm bg-white">

      <Link to="/productIndividualPage" className="m-2 w-40 h-40 flex-shrink-0">
        <img src={imagen} alt='pimage' className="w-full h-full object-cover rounded-md" />
      </Link>
      
      <div className='px-2 h-40 flex flex-col justify-between flex-grow'>

        <h1 className="text-2xl font-semibold text-gray-900">{nombre}</h1>
        <h2 className='text-xl text-blue-900 font-medium'>${precio}</h2>
        
        <div className='flex items-center space-x-4'>

          <Link to="/productIndividualPage" className="p-2 bg-gray-100 rounded-lg text-center font-semibold hover:bg-gray-200 w-full">Seleccionar</Link>
          <Link to={productPage} className="p-2 bg-gray-100 rounded-lg text-center font-semibold hover:bg-gray-200 w-full">Ver producto</Link>

        </div>

      </div>
      
    </div>
  );
};

export default ProductCard4;

