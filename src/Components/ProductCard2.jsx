import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard2 = ({ nombre, precio, imagen, onAddToCart }) => {
  const images = {
    'main': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    'img-2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33402_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_59981144-grn.jpg',
    'img-3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33403_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_de9bc156-grn.jpg',
    'img-4': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33404_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_e3e7dde9-grn.jpg',
  };
  
  return (
    <Link to='/productIndividualPage' className="m-20 p-4 inline-block bg-base-100 shadow-lg rounded-2xl  text-center ">

      <figure className="w-64 h-60 flex items-center justify-center mx-auto">
        <img src={images.main} alt={nombre} className="w-full h-full object-cover rounded-lg" />
      </figure>

      <div className="">

        <h1 className="text-lg font-medium">{nombre}</h1>
        <p className="my-4 text-zinc-900 font-medium">${precio}</p>
        <div className="my-4">
          <Link to="/carrito" onClick={onAddToCart} className="p-4 m-2 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 text-center md:text-left">Agregar al carrito</Link>
        </div>

      </div>

    </Link>
  );
}

export default ProductCard2;
