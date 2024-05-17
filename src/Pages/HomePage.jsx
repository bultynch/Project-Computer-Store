import React from 'react'
import NavBar from '../Components/NavBar'
import BuildPcMain from '../Components/BuildPcMain'
import ServicesMain from '../Components/ServicesMain'
import Sponsors from '../Components/Sponsors'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import CarouselProducts from '../Components/CarouselProducts'

function HomePage() {
  return (
    <div className='flex flex-col justify-center'>

      <NavBar />

      <BuildPcMain />

      <Sponsors />

      <ServicesMain />

      <Contact />

      <CarouselProducts />

      <Footer />
        
    </div>
  )
}

export default HomePage