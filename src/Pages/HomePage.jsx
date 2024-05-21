import React from 'react'
import NavBar from '../Components/NavBar'
import BuildPcMain from '../Components/BuildPcMain'
import ServicesMain from '../Components/ServicesMain'
import Sponsors from '../Components/Sponsors'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import ProductCard2 from '../Components/ProductCard2'

function HomePage() {

  const slides = [
    <ProductCard2 key="product1" nombre='Producto-1' precio='70.000' />, 
    <ProductCard2 key="product2" nombre='Producto-2' precio='50.000' />, 
    <ProductCard2 key="product3" nombre='Producto-3' precio='100.000' />
  ];

  return (
    <div className='flex flex-col justify-center'>

      <NavBar />

      <BuildPcMain />

      <Sponsors />

      <Carousel slides={slides} />

      <ServicesMain />

      <Contact />

      <Footer />
        
    </div>
  )
}

export default HomePage
