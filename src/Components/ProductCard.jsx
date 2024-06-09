import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductIndividualPage from '../Pages/ProductIndividualPage.jsx';
import CartPage from '../Pages/CartPage.jsx'


const ProductCard = ({nombre, precio, imagen, onAddToCart}) => {
  return (
    <Link to="/productIndividualPage" className="p-4 w-176 flex items-center rounded-lg overflow-hidden shadow-md">

      <img src={imagen} alt='pimage' className="m-2 w-40 h-40"></img>

      <div className='px-2 h-40 flex flex-col justify-between'>

        <h1 className="flex justify-start text-2xl">{nombre}</h1>

        <h2 className='text-xl text-blue-900 font-medium'>${precio}</h2>
  
        <Link to="/carrito" onClick={onAddToCart} className="p-4 w-60 bg-gray-100 rounded-lg text-center font-semibold hover:bg-gray-200 md:text-center">Agregar al carrito</Link>

      </div>

      <Routes>
        <Route path="/productIndividualPage" element={<ProductIndividualPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
  
    </Link>
  );
};

export default ProductCard;
