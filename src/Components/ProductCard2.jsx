import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({ nombre, precio, imagen, onAddToCart }) => {
  return (
    <Link to='/productIndividualPage' className="px-2 py-4 w-80 bg-base-100 shadow-lg rounded-lg">
      <figure className="flex items-center justify-center h-60">
        <img src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38660_Memoria_Team_DDR5_64GB__2x32GB__6000Mhz_T-CREATE_EXPERT_CL34_Black_Intel_XMP_3.0___AMD_EXPO_14443ee4-grn.jpg' alt={nombre} className="max-w-full max-h-full object-contain rounded-lg" />
      </figure>
      <div className="flex flex-col items-center justify-center text-center mt-4">
        <h1 className="text-lg font-medium">{nombre}</h1>
        <p className="text-zinc-900 font-medium">${precio}</p>
        <div className="mt-2">
          <Link to="/carrito" onClick={onAddToCart} className="py-2 px-4 bg-gray-800 hover:bg-gray-600 text-white font-bold focus:outline-none focus:shadow-outline rounded-lg">Agregar al carrito</Link>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard2;
