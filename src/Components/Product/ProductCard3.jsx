import React from 'react';
import { Link } from 'react-router-dom';
import { GoShieldCheck } from "react-icons/go";
import { FaCheck, FaTruck } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard3 = ({ nombre, precio, onAddToCart }) => {

  const images = {
    'main': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    'img-2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33402_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_59981144-grn.jpg',
    'img-3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33403_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_de9bc156-grn.jpg',
    'img-4': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33404_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_e3e7dde9-grn.jpg',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-2 flex flex-col items-center justify-center bg-white rounded-lg border shadow-sm">

      <div className="m-2 w-full flex flex-col items-center">

        <img src={images['main']} alt="prod-pic" className="w-80 h-auto" />

        <div className='flex items-center justify-center border border-black'>

          {/*<Slider {...settings}>
            <img src={images['main']} alt='prod-pic-1' className='w-60 h-60'/>
            <img src={images['img-2']} alt='prod-pic-2' className='w-60 h-60'/>
            <img src={images['img-3']} alt='prod-pic-3' className='w-60 h-60'/>
            <img src={images['img-4']} alt='prod-pic-4' className='w-60 h-60'/>
          </Slider>*/}

        </div>
      </div>

      <div className="p-2 h-full md:w-1/2 flex flex-col justify-between">

        <div className="mt-4">
          <h1 className="text-2xl md:text-3xl font-normal">{nombre}</h1>
        </div>

        <div className='divider'></div>

        <div className="">
          <h1 className=" text-blue-500 text-3xl md:text-5xl font-semibold">${precio}</h1>
          <h1 className="my-2 text-xl">12 cuotas sin interés de ${(precio / 12)}</h1>
          <h1 className='text-xl'>Precio de lista $ {(precio + 100000)}</h1>
        </div>

        <div className='divider'></div>

        <div className=''>

          <div className='flex items-center justify-start'>
            <GoShieldCheck className='pr-1 text-green-500 text-2xl'/>
            <h1 className='text-green-500 text-xl'>Garantía - 12 meses</h1>
          </div>

          <div className='my-1 flex items-center justify-start'>
            <FaCheck className='pr-1 text-green-500 text-xl'/>
            <h1 className='text-green-500 text-xl'>Stock disponible.</h1>
          </div>
          
          <div className='flex items-center justify-start'>
            <FaTruck className='pr-1 text-green-500 text-2xl'/>
            <h1 className='text-green-500 text-xl'>Envíos a todo el país.</h1>
          </div>
          
        </div>

        <div className='divider'></div>

        <div className="gap-2 flex flex-col">

          <button className="p-4 bg-violet-900 text-white rounded-lg shadow-sm border hover:bg-white hover:text-violet-900 hover:border-violet-900">Comprar</button>
          <Link to="/carrito" className="p-4 bg-gray-100 text-center md:text-left rounded-lg shadow-sm border font-semibold hover:bg-gray-200 ">Agregar al carrito</Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard3;