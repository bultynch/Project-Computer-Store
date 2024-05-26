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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='px-10 h-96 bg-violet-50'>
      <div>
        <h2 className="text-xl my-4">Ofertas semanales</h2>
        <div className="divider"></div>
      </div>
      <div>
        <Slider {...settings}>
          {productData.procesador.map((producto, index) => (
            <ProductCard2
              key={index}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductOfferSection;


const productData = {
  procesador: [

      {
        nombre: 'procesador-amd-r7-5800x',
        precio: '326.000',
        imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg'
      },

      {
          nombre: 'procesador-intel-i7-13700f',
          precio: '491.000',
          imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38651_Procesador_Intel_Core_i7_13700F_5.2GHz_Turbo_Socket_1700_509fa2db-grn.jpg'
      },
      
    ],

  grafica: [

      {
        nombre: 'grafica-asus-4080-16gb',
        precio: '300.000',
        imagen: 'https://m.media-amazon.com/images/I/71stHfUBHXL._AC_SX355_.jpg'
      },

      {
        nombre: 'grafica-xfx-6750xt-12gb',
        precio: '480.000',
        imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_36849_Placa_de_Video_XFX_Radeon_RX_6750_XT_12GB_GDDR6_SPEEDSTER_MERC_319_e2a013eb-grn.jpg'
      },
      
    ],

  ram: [

    {
      nombre: 'ram-tcreate-2x32',
      precio: '600.000',
      imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38660_Memoria_Team_DDR5_64GB__2x32GB__6000Mhz_T-CREATE_EXPERT_CL34_Black_Intel_XMP_3.0___AMD_EXPO_14443ee4-grn.jpg'
    },

    {
      nombre: 'ram-tforce-1x16',
      precio: '55.000',
      imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_36219_Memoria_Team_DDR4_16GB_3200MHz_T-Force_Delta_ASUS_TUF_Alliance_RGB_CL16_8eacc95e-grn.jpg'
    },

    {
      nombre: 'ram-patriot-1x16',
      precio: '53.000',
      imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_17152_Memoria_Patriot_Viper_DDR4_16GB_3200MHz_Steel_72af2fec-grn.jpg'
    },

    {
      nombre: 'ram-tforce-1x8',
      precio: '39.000',
      imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_28529_Memoria_Team_DDR4_8GB_3600MHz_T-Force_Delta_RGB_Black_CL18_441c03ab-grn.jpg'
    },

  ],

  monitor: [

      {
          nombre: 'monitor-samsung-24-fhd-144',
          precio: '335.000',
          imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38265_Monitor_Gamer_Samsung_24__G3_Odyssey_Full_HD_144Hz_ae4fd22c-grn.jpg'
      },

      {
          nombre: 'monitor-lg-24-75',
          precio: '142.000',
          imagen: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_13284_Monitor_LG_24___24MK430H-B_75Hz_IPS_Full_HD_FreeSync_HDMI_7420ec90-grn.jpg'
        },
      
    ],
};



