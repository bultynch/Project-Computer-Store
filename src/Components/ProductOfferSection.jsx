import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard2 from './ProductCard2';

function ProductOfferSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 sm:px-10 py-8 bg-violet-50">
      <div>
        <h2 className="text-3xl font-semibold pt-4 text-center sm:text-left">Ofertas semanales</h2>
        <div className="divider"></div>
      </div>
      <Slider {...settings}>
        <div className="p-2">
          <ProductCard2 
            nombre='Procesador Intel Core i5 14400F 4.7GHz Turbo' 
            precio={305000} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38616_Procesador_Intel_Core_i5_14400F_4.7GHz_Turbo_Socket_1700_Raptor_Lake_b51753f7-grn.jpg'
          />
        </div>
        <div className="p-2">
          <ProductCard2 
            nombre='Fuente Cougar 750W 80 Plus Gold GEC750' 
            precio={123000} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39112_Fuente_Cougar_750W_80_Plus_Gold_GEC750_1d2f2d18-grn.jpg'
          />
        </div>
        <div className="p-2">
          <ProductCard2 
            nombre='Gabinete Antec NX292 MESH RGB Vidrio Templado' 
            precio={65000} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_35714_Gabinete_Antec_NX292_MESH_RGB_Vidrio_Templado_a017a79f-grn.jpg'
          />
        </div>
        <div className="p-2">
          <ProductCard2 
            nombre='Mother ASUS PRIME H610M-K DDR4 S1700' 
            precio={114000} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_32527_Mother_ASUS_PRIME_H610M-K_DDR4_S1700_ae2a81ba-grn.jpg'
          />
        </div>
        <div className="p-2">
          <ProductCard2 
            nombre='Memoria Team DDr4 16GB 3200MHz' 
            precio={50000} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38661_Memoria_Team_DDR4_16GB_3200Mhz_Vulcan_ASUS_TUF_Alliance_CL16_df660a5c-grn.jpg'
          />
        </div>
        <div className="p-2">
          <ProductCard2 
            nombre='Placa de Video XFX Radeon RX 6650 XT 8GB' 
            precio={324400} 
            imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg'
          />
        </div>
      </Slider>
    </div>
  );
}

export default ProductOfferSection;
