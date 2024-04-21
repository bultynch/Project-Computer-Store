import React from 'react';

const Producto = ({nombre, precio, onAddToCart}) => {
  return (
    <div className="inline-block              
                    bg-white rounded
                    overflow-hidden
                    shadow-md
                    hover:
                    pb-2
                    w-48">

      <div className="w-48 h-64 bg-gray-400 rounded-t"></div>

      <div className="block m-1 font-assitant text-xl w-full">{nombre}</div>


      <p className="m-1 text-black text-base">${precio}</p>

      <div className='flex flex-center justify-center'>
        <button
          onClick={onAddToCart}
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold p-2 focus:outline-none focus:shadow-outline rounded">Agregar al carrito
        </button>
      </div>    
    </div>
  );
};


export default Producto;
