import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductIndividualPage from '../Pages/ProductIndividualPage.jsx';
import CartPage from '../Pages/CartPage.jsx'


const ProductCard = ({nombre, precio, image, onAddToCart}) => {
  return (
    <Link to="/productIndividualPage" className="p-4 flex items-center rounded overflow-hidden shadow-sm">

      <img src={image} alt='pimage' className="m-2 w-40 h-40"></img>

      <div className='px-2 h-40 flex flex-col justify-between'>

        <h1 className="flex justify-start text-2xl">{nombre}</h1>

        <h2 className='text-xl text-blue-900 font-medium'>${precio}</h2>
  
        <Link to="/carrito" onClick={onAddToCart} className="py-2 px-2 w-48 bg-gray-800 hover:bg-gray-600 text-center text-white font-bold focus:outline-none focus:shadow-outline rounded-lg">Agregar al carrito</Link>

      </div>

      <Routes>
        <Route path="/productIndividualPage" element={<ProductIndividualPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
  
    </Link>
  );
};

export default ProductCard;
