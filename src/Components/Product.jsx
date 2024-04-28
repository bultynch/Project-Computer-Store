import React from 'react';

const Producto = ({nombre, precio, imagen, onAddToCart}) => {
  return (
    <div className="m-20 p-4 flex items-center bg-white rounded overflow-hidden shadow-lg">

      <img src='https://m.media-amazon.com/images/I/71stHfUBHXL._AC_SX355_.jpg' alt='ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' className="m-2 w-40 h-40"></img>

      <div className='px-2 h-40 flex flex-col justify-between'>

        <h1 className="flex justify-start text-2xl">{nombre}</h1>

        <h2 className='text-xl text-blue-900'><strong>$ {precio}</strong></h2>
  
        <button onClick={onAddToCart} className="py-2 px-2 w-48 bg-gray-800 hover:bg-gray-600 text-white font-bold focus:outline-none focus:shadow-outline rounded">Agregar al carrito</button>

      </div>
  
    </div>
  );
};

export default Producto;
