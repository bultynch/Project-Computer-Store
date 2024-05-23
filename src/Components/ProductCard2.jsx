import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({ nombre, precio, imagen, onAddToCart }) => {
  
  return (
    <Link to='/productIndividualPage' className="my-4 p-4 bg-base-100 shadow-lg rounded-lg inline-block text-center outline">
      <figure className="w-64 h-60 flex items-center justify-center mx-auto">
        <img src={imagen} alt={nombre} className="w-full h-full object-cover rounded-lg" />
      </figure>
      <div className="">
        <h1 className="text-lg font-medium">{nombre}</h1>
        <p className="text-zinc-900 font-medium">${precio}</p>
        <div className="my-4">
          <Link to="/carrito" onClick={onAddToCart} className="p-4 bg-blue-500 hover:bg-blue-400 text-white font-bold focus:outline-none focus:shadow-outline rounded-lg">Agregar al carrito</Link>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard2;
