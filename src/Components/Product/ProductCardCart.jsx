import React from 'react';

function ProductCard() {
  return (
    <div className="w-full p-2 bg-white border flex flex-row">

      <div className='w-1/2 flex items-center'>

        <img src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_35714_Gabinete_Antec_NX292_MESH_RGB_Vidrio_Templado_a017a79f-grn.jpg' alt='pimage'
        className="w-20 h-20"></img>
        <h1 className='w-full truncate'>Producto asdasdasdasdad asdasd  asdasdasdasd</h1>

      </div>
      
    
      <div className='w-1/2 flex flex-row items-center justify-between'>
        
        <input type="radio" />
        <h1>Total</h1>
    
      </div>
  
    </div>
  );
};

export default ProductCard;
