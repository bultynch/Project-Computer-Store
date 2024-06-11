import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({nombre, precio, imagen}) => {
  
  return (
    <Link to='/productIndividualPage' className="m-4 p-4 inline-block bg-base-100 shadow-lg rounded-2xl  text-center ">

      <figure className="w-64 h-60 flex items-center justify-center mx-auto">
        <img src={imagen} alt='pic-pc2' className="w-full h-full object-cover rounded-lg" />
      </figure>

      <div className="">

        <h1 className="text-lg font-medium">{nombre}</h1>
        <p className="my-4 text-zinc-900 font-medium">${precio}</p>
        <div className="my-4">
          <Link to="/" className="p-4 m-2 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 text-center md:text-left">Ver producto</Link>
        </div>

      </div>

    </Link>
  );
}

export default ProductCard2;
