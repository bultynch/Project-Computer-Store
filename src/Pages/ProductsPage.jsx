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

      <div className='m-2 gap-2 flex flex-col'>

        <ProductCategory />
        <ProductFilter />

        <div className=''>

          <div className='mb-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX ' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <ProductCard4 nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
};

export default ProductsPage