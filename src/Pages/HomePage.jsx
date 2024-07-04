import React from 'react'
import NavBar from '../Components/NavBar'
import BuildPcMain from '../Components/BuildPcMain'
import ServicesMain from '../Components/ServicesMain'
import Sponsors from '../Components/Sponsors'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import ProductOfferSection from '../Components/Product/ProductOfferSection'
import SecondNavBar from '../Components/SecondNavBar'

function HomePage() {

  return (
    <div className='flex flex-col justify-center'>

      <NavBar />

      <SecondNavBar />

      <BuildPcMain />

      <Sponsors />

      <ProductOfferSection />

      <ServicesMain />

      <div className='py-10 px-2 md:px-10 lg:px-20 xl:px-10 bg-violet-50 dark:bg-neutral-800'>
        <Contact />
      </div>

      <Footer />
        
    </div>
  )
}

export default HomePage
