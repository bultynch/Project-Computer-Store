import React from 'react';
import NavBar from '../Components/NavBar';
import ProductCard4 from '../Components/Product/ProductCard4';
import ProductCategory from '../Components/Product/ProductCategory'
import Footer from '../Components/Footer'
import ProductFilter from '../Components/Product/ProductFilter';
import SecondNavBar from '../Components/SecondNavBar';

function ProductsPage() {
  return (
    <div className='bg-violet-50 dark:bg-neutral-700'>

      <NavBar />
      <SecondNavBar />

      <div className='gap-2 m-2 sm:mx-10 md:mx-20 lg:mx-0 flex flex-col items-center justify-center lg:flex-row lg:items-start'>


        <div className='gap-2 w-full md:w-144 lg:max-w-sm flex flex-col'>
          <ProductCategory />
          <ProductFilter />
        </div>
        

        <div className='md:w-144'>

          <div className='mb-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX ' precio={479000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video' precio={479000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>
          min-h-screen
          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
};

export default ProductsPage