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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className='px-10 h-144 bg-violet-50'>
      <div>

        <h2 className="text-4xl font-semibold p-4">Ofertas semanales</h2>
        <div className="divider"></div>
      </div>

      <div>

        <Slider {...settings}>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>

          <div>
            <ProductCard2 />
          </div>
          
        </Slider>

      </div>

    </div>
  );
}

export default ProductOfferSection;



