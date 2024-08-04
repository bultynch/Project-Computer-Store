import React from 'react';

function ProductCard() {
  return (
    <div className="p-2 w-full flex items-center bg-white border">

      <img src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_35714_Gabinete_Antec_NX292_MESH_RGB_Vidrio_Templado_a017a79f-grn.jpg' alt='pimage'
      className=" w-20 h-20"></img>
    
      <div className='flex flex-row'>

        <h1 className=''>Producto</h1>
        <input type="text" />
        <h1 className=''>$33000</h1>
        <h1>Total</h1>
        

      </div>
  
    </div>
  );
};

export default ProductCard;
