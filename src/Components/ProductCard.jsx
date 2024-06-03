import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductIndividualPage from '../Pages/ProductIndividualPage.jsx';
import CartPage from '../Pages/CartPage.jsx'


const ProductCard = ({nombre, precio, onAddToCart}) => {

  const images = {
    'main': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    'img-2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33402_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_59981144-grn.jpg',
    'img-3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33403_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_de9bc156-grn.jpg',
    'img-4': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33404_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_e3e7dde9-grn.jpg',
  };
  return (
    <Link to="/productIndividualPage" className="p-4 flex items-center rounded overflow-hidden shadow-sm">

      <img src={images.main} alt='pimage' className="m-2 w-40 h-40"></img>

      <div className='px-2 h-40 flex flex-col justify-between'>

        <h1 className="flex justify-start text-2xl">{nombre}</h1>

        <h2 className='text-xl text-blue-900 font-medium'>${precio}</h2>
  
        <Link to="/carrito" onClick={onAddToCart} className="p-4 m-2 block bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 text-center md:text-left">Agregar al carrito</Link>

      </div>

      <Routes>
        <Route path="/productIndividualPage" element={<ProductIndividualPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
  
    </Link>
  );
};

export default ProductCard;
