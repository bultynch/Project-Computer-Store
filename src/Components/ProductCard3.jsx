import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard3 = ({ nombre, precio, imagen, onAddToCart }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      };

  return (
    <div className='h-144 flex items-center justify-center rounded-2xl shadow-lg'>
    
        <div className='p-5 w-[1200px] h-full flex flex-col justify-start  rounded-l-2xl shadow-lg'>
            <img src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg' alt='prod-pic' className='mb-5 w-full h-3/4 border border-black'/>

            <div className='w-full h-1/4 border border-black'>
                
            </div>
        </div>

        <div className='p-5 w-full h-full flex flex-col justify-between  rounded-r-2xl shadow-lg'>
            <div className='border border-black'>
                <h1 className='text-3xl font-normal'>{nombre}</h1>
            </div>

            <div className="divider"></div>

            <div className='border border-black'>
                <h1 className='mb-2 text-blue text-5xl font-semibold'>$ {precio}</h1>
                <h1 className='ml-2'>12 cuotas sin interes de {precio/12}</h1>
            </div>

            <div className="divider"></div>

            <div className='border border-black'>
                <button className='p-7 m-5 mr-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800'>Comprar</button>
                <button className='p-7 m-5 ml-2 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200'>Agregar al acarrito</button>
            </div>
        </div>
    
    </div>
  )
}

export default ProductCard3
