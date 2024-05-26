import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard3() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      };

  return (
    <div className='h-144 flex items-center justify-center bg-red-500'>
    
        <div className='p-5 w-full h-full flex flex-col justify-start bg-yellow-400'>
            <img src='/bg-nintendo2.jpg' alt='prod-pic' className='w-full h-3/4  border border-black'/>
            <div className='w-full h-1/4 border border-black'>
                <Slider { ...settings}>
                    <div className='w-24 h-24'>
                        <img src='/bg-22.jpg' alt='asd' className='w-full h-full object-contain'/>
                    </div>
                    <div className='w-24 h-24'>
                        <img src='/bg-22.jpg' alt='asd' className='w-full h-full object-contain'/>
                    </div>
                    <div className='w-24 h-24'>
                        <img src='/bg-22.jpg' alt='asd' className='w-full h-full object-contain'/>
                    </div>
                    <div className='w-24 h-24'>
                        <img src='/bg-22.jpg' alt='asd' className='w-full h-full object-contain'/>
                    </div>
                </Slider>
            </div>
        </div>

        <div className='p-5 w-full h-full flex flex-col justify-between bg-pink-200'>
            <div className='py-10 border border-black'>seccion 1</div>
            <div className='py-10  border border-black'>seccion 2</div>
            <div className='py-10 border border-black'>seccion 3</div>
        </div>
    
    </div>
  )
}

export default ProductCard3
