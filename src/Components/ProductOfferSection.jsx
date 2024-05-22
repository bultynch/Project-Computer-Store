import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard2 from './ProductCard2';

function ProductSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='my-20 mx-20 h-128'>
      <Slider {...settings}>
        <ProductCard2 nombre='producto-1' precio='600.000' />
        <ProductCard2 nombre='producto-2' precio='300.000' />
        <ProductCard2 nombre='producto-3' precio='630.000' />
        <ProductCard2 nombre='producto-4' precio='240.000' />
        <ProductCard2 nombre='producto-5' precio='50.000' />
        <ProductCard2 nombre='producto-6' precio='120.000' />
      </Slider>
    </div>
  );
}

export default ProductSection;
